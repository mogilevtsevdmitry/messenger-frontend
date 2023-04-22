import Image from "next/image";

export const ChatInfo = () => {
  return (
    <div className="w-full max-w-xs px-2">
      <div className="flex flex-1 items-center gap-4">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <Image src="/image/avatar.jpg" alt="Ава чата" width="56" height="56" />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-medium">Название чата</h2>
          <p className="chat-small">2 участника</p>
        </div>
      </div>
      <div className="mt-4 pl-8">
        <div>
          <a href="#" className="link">
            @super-chat
          </a>
          <p className="chat-small">Ссылка</p>
        </div>
        <div className="mt-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
          <p className="chat-small">Описание</p>
        </div>
      </div>
    </div>
  );
};
