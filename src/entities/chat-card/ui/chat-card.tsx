import Image from "next/image";

export const ChatCard = () => {
  return (
    <>
      <article className="flex max-w-md px-4">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <Image src="/image/avatar.jpg" width="48" height="48" alt="Аватар чата" />
          </div>
        </div>
        <div className="max-w-full overflow-hidden">
          <strong className="font-semibold">The73756:</strong>
          <div className="flex max-w-min gap-1">
            <p className="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>10:11</p>
          </div>
        </div>
      </article>
      <div className="divider pointer-events-none m-2 w-full border-none px-0 py-0 after:content-none "></div>
    </>
  );
};
