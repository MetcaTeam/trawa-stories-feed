import { supabase } from '../connection/supabaseClient';

declare global {
  interface Window {
    Telegram: any;
  }
}

// Функция, которая гарантирует регистрацию пользователя, обновляя данные только при изменениях
export const ensureUserRegistered = async (): Promise<void> => {
  const telegramUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
  if (!telegramUser) {
    console.error('Пользователь не найден в Telegram WebApp');
    return;
  }

  const { id: telegramId, first_name, last_name, username, photo_url } = telegramUser;

  // Получаем данные пользователя из БД
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('telegram_id', telegramId)
    .maybeSingle();

  if (error) {
    console.error('Ошибка при получении пользователя:', error.message);
    return;
  }

  if (!data) {
    // Если пользователя нет – создаём новую запись
    const { error: insertError } = await supabase.from('users').insert({
      telegram_id: telegramId,
      first_name,
      last_name,
      username,
      photo_url,
    });
    if (insertError) {
      console.error('Ошибка при создании пользователя:', insertError.message);
    }
  } else {
    // Если пользователь найден – обновляем данные только если они отличаются
    const hasChanges =
      data.first_name !== first_name ||
      data.last_name !== last_name ||
      data.username !== username ||
      data.photo_url !== photo_url;

    if (hasChanges) {
      const { error: updateError } = await supabase
        .from('users')
        .update({ first_name, last_name, username, photo_url })
        .eq('telegram_id', telegramId);
      if (updateError) {
        console.error('Ошибка при обновлении пользователя:', updateError.message);
      }
    }
  }
};

export const getUserByTelegramId = async (telegramId: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('telegram_id', telegramId)
    .maybeSingle();
  if (error) {
    console.error('Ошибка при получении пользователя:', error.message);
    return null;
  }
  return data;
};
