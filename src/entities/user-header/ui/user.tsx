import Image from "next/image";

import { UserSettings } from "./user-settings";

export const User = () => {
  return (
    <div className="ml-2 hidden items-center gap-3 lg:ml-auto lg:flex">
      <span className="text-lg font-medium">Pauchok</span>
      <div className="dropdown-end dropdown">
        <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
          <div className="w-10 rounded-full">
            <Image width={40} height={40} src="/image/avatar.jpg" alt="Аватар" />
          </div>
        </label>
        <UserSettings />
      </div>
    </div>
  );
};
