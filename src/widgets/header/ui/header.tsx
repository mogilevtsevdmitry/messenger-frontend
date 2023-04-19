"use client";

import Link from "next/link";
import { useState } from "react";

import { MusicPlayer } from "@/features/music-player";
import { Notification } from "@/features/notification";
import { Search } from "@/features/search";

import { User } from "@/entities/user-header";

import { Burger } from "./burger";

export const Header = () => {
  const [isShowBurger, setIsShowBurger] = useState<boolean>(false);

  return (
    <div className="navbar bottom-0 z-10 mx-auto max-w-[1190px]">
      <button
        onClick={() => setIsShowBurger(true)}
        className="flex flex-col items-start space-y-2 lg:hidden">
        <div className="h-0.5 w-8 bg-gray-600"></div>
        <div className="h-0.5 w-8 bg-gray-600"></div>
        <div className="h-0.5 w-6 bg-gray-600"></div>
      </button>
      <Burger isShow={isShowBurger} />
      <Link href="#" className="btn-ghost btn ml-auto text-xl normal-case lg:ml-0 lg:mr-10">
        Logo
      </Link>
      <h1 onClick={() => setIsShowBurger(false)}>close</h1>
      <div className="hidden flex-auto  items-center lg:flex">
        <Search />
        <Notification />
        <MusicPlayer />
        <User />
      </div>
    </div>
  );
};
