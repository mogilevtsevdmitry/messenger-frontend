"use client";

import { useState } from "react";

import { Icon, IconBtn } from "@/shared/ui";

export const ChatInput = () => {
  const [message, setMessage] = useState("");

  //TODO: Переделать input на textarea с автоматическим изменением высоты
  return (
    <div className="mt-4 flex gap-2">
      <form className="flex w-full gap-2">
        <label htmlFor="file">
          {/* Если сделать кнопкой, label не срабатывает */}
          <div className="no-animation btn flex h-12 w-12 items-center justify-center rounded-full p-0 ">
            <Icon name="chat/clip" className="h-5 w-5 " />
          </div>
        </label>
        <input type="file" id="file" className="hidden" />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input-bordered input w-full"
          placeholder="Ваше сообщение..."
        />
      </form>
      <IconBtn name="chat/smile" iconClassName="h-6 w-6" />
      <IconBtn name={`chat/${message ? "send" : "micro"}`} iconClassName={message && "ml-[3px]"} />
    </div>
  );
};
