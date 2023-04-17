import { MusicPlayer } from "@/features/music-player";
import { Notification } from "@/features/notification";
import { Search } from "@/features/search";

import { User } from "@/entities/user-header";

export const Header = () => {
  return (
    <div className="navbar bottom-0 z-10 mx-auto max-w-[1190px] bg-base-100">
      <div className="flex flex-col items-start space-y-2 lg:hidden">
        <span className="block h-0.5 w-8 bg-gray-600"></span>
        <span className="block h-0.5 w-8 bg-gray-600"></span>
        <span className="block h-0.5 w-5 bg-gray-600"></span>
      </div>
      <a className="btn-ghost btn ml-auto  text-xl normal-case lg:ml-0 lg:mr-2">Logo</a>
      <div className="hidden items-center lg:flex">
        <Search />
        <Notification />
        <MusicPlayer />
      </div>
      <User />
    </div>
  );
};
