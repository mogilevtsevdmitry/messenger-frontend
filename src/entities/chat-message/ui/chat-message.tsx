import Image from "next/image";

import { MessageStatus } from "@/shared/constants";
import { Icon } from "@/shared/ui";

interface ChatMessageProps {
  isUserMessage: boolean;
  status: MessageStatus;
}

export const ChatMessage = ({ isUserMessage, status }: ChatMessageProps) => {
  if (isUserMessage) {
    return (
      <div className="chat chat-end">
        <div className="chat-bubble bg-primary-content">
          I hate you!
          <div className="chat-footer flex items-center gap-1">
            <time dateTime="2023-04-20 10:11" className="ml-auto  opacity-50">
              10:11
            </time>
            <Icon name={`chat/${status}`} className="h-3 w-3 text-primary opacity-80" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Image alt="Фото профиля" width="40" height="40" src="/image/avatar.jpg" />
        </div>
      </div>
      <div className="chat-header">Obi-Wan Kenobi</div>
      <div className="chat-bubble">
        <span>Not leave it in Darkness</span>
        <div className="chat-footer flex opacity-50">
          <time dateTime="2023-04-20 10:11" className="ml-auto">
            10:11
          </time>
        </div>
      </div>
    </div>
  );
};
