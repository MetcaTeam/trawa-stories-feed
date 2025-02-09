import { useEffect, useState } from 'react';
import { ensureUserRegistered, getUserByTelegramId } from '../services/userService';

interface User {
  id: string;
  telegram_id: string;
  first_name: string;
  last_name: string;
  username: string;
  photo_url: string;
}

export const useUser = (): User | null => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const initUser = async () => {
      const telegramUserId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id;
      if (!telegramUserId) return;
      // Регистрируем или обновляем пользователя
      await ensureUserRegistered();
      // Получаем данные пользователя по Telegram ID
      const userData = await getUserByTelegramId(telegramUserId);
      if (userData) {
        setUser(userData);
      }
    };

    initUser();
  }, []);

  return user;
};
