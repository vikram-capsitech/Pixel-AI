import React from 'react';

type ChatbotWelcomeProps = {
  message: string;
  avatarUrl?: string;
};

export const ChatbotWelcome: React.FC<ChatbotWelcomeProps> = ({
  message,
  avatarUrl = 'https://i.imgur.com/8Km9tLL.png', // default bot avatar
}) => {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg bg-white dark:bg-gray-900 shadow-md max-w-md">
      <img src={avatarUrl} alt="Bot" className="w-12 h-12 rounded-full" />
      <div className="text-sm text-gray-800 dark:text-gray-100">
        {message}
      </div>
    </div>
  );
};
