import { supabase } from '../connection/supabaseClient';

declare global {
  interface Window {
    Telegram: any;
  }
}

export const registerOrUpdateUser = async () => {
  const telegramUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
  if (!telegramUser) {
    console.error('Пользователь не найден в Telegram WebApp');
    return;
  }

  const { id, first_name, last_name, username, photo_url } = telegramUser;

  // Проверяем, существует ли пользователь в таблице users
  const { data, error } = await supabase
    .from('users')
    .select('id')
    .eq('id', id)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Ошибка при получении пользователя:', error.message);
    return;
  }

  if (!data) {
    // Если пользователь не найден, создаём новую запись
    const { error: insertError } = await supabase.from('users').insert([
      {
        id,
        first_name,
        last_name,
        username,
        photo_url,
      },
    ]);
    if (insertError) {
      console.error('Ошибка при создании пользователя:', insertError.message);
    }
  } else {
    // Если пользователь найден, можно обновить данные при необходимости
    const { error: updateError } = await supabase
      .from('users')
      .update({
        first_name,
        last_name,
        username,
        photo_url,
      })
      .eq('id', id);
    if (updateError) {
      console.error('Ошибка при обновлении пользователя:', updateError.message);
    }
  }
};