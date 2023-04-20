import { Chat } from "@/widgets/chat";
import { ChatsList } from "@/widgets/chats-list";
import { MainLayout } from "@/widgets/layouts";

export const HomePage = () => {
  return (
    <MainLayout>
      <main>
        <div className="flex">
          <ChatsList />
          <Chat />
        </div>
      </main>
    </MainLayout>
  );
};
