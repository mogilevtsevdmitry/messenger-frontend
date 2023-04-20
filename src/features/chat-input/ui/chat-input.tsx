import { IconBtn } from "@/shared/ui";

export const ChatInput = () => {
  //TODO: Переделать input на textarea с автоматическим изменением высоты
  return (
    <div className="mt-10 flex gap-2">
      <IconBtn name="chat/clip" />
      <form className=" w-full">
        <input
          type="text"
          className="input-bordered input w-full"
          placeholder="Ваше сообщение..."
        />
      </form>
      <div>ГС</div>
    </div>
  );
};
