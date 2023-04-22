import Image from "next/image";

import { ChatInput } from "@/features/chat-input";

import { ChatMessage } from "@/entities/chat-message";

import { MessageStatus } from "@/shared/constants";
import { Icon, IconBtn } from "@/shared/ui";

export const Chat = () => {
  const getStatus = () =>
    Math.random() < 0.5
      ? Math.random() < 0.3
        ? MessageStatus.SENT
        : MessageStatus.CHECKED
      : MessageStatus.PENDING;

  return (
    <div className="flex max-h-[90vh] w-full flex-col">
      <div className="navbar bg-base-100">
        <div className="flex flex-1 items-center gap-4">
          <div className="avatar">
            <div className="w-14 rounded-full">
              <Image src="/image/avatar.jpg" alt="Ава чата" width="56" height="56" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-medium">Название чата</h2>
            <p className="text-sm opacity-80">2 участника, 1 в сети</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="opacity-80 transition-opacity hover:opacity-100">
            <Icon name="chat/search" className="h-5 w-5" />
          </button>
          <button className="opacity-80 transition-opacity hover:opacity-100">
            <Icon name="chat/dots" className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="divider mt-0"></div>
      <div className="flex-1 overflow-auto px-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <ChatMessage status={getStatus()} isUserMessage={Math.random() < 0.5} key={index} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};
