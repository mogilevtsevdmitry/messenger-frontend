import { ChatCard } from "@/entities/chat-card";

export const ChatsList = () => {
  return (
    <aside className="bordered mt-5">
      <h2 className=" px-4 text-xl font-bold">Последние чаты:</h2>
      <ul className="menu mt-2 bg-base-100">
        {Array.from({ length: 4 }).map((_, index) => (
          // На активном чате добавляется "bordered" на li
          <li key={index}>
            <ChatCard />
          </li>
        ))}
      </ul>
    </aside>
  );
};
