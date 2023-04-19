import Image from "next/image";

import { UserSettings } from "./user-settings";

export const User = () => {
  return (
    <div className="flex flex-col-reverse items-center gap-3 sm:ml-2 lg:ml-auto lg:flex-row">
      <span className="font-medium">Pauchok</span>
      <div className="dropdown-end dropdown">
        <label
          tabIndex={0}
          className="btn-ghost btn-circle avatar btn block h-24 w-24 lg:h-12 lg:w-12">
          <Image fill src="/image/avatar.jpg" alt="Аватар" className="rounded-full" />
        </label>
        <UserSettings />
      </div>
    </div>
  );
};
