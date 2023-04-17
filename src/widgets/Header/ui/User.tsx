import React from "react";
import {UserSettings} from "@/features/user-settings";
// import {Image} from "next/"

export const User = () => {
  return (
    <div className="hidden lg:flex items-center gap-3 ml-2 lg:ml-auto">
      <span className="text-lg font-medium">Pauchok</span>
      <div className="dropdown-end dropdown">
        <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
          <div className="w-10 rounded-full">
            <img src="https://comicbookmovie.com/images/articles/banners/198568.jpg" />
          </div>
        </label>
        <UserSettings />
      </div>
    </div>
  );
};
