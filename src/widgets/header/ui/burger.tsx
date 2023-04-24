import React from "react";
import { CSSTransition } from "react-transition-group";

import { MenuList } from "@/features/menu-list";

import { UserCard } from "@/entities/user-card";

interface BurgerProps {
  isShow: boolean;
}

export const Burger: React.FC<BurgerProps> = ({ isShow }) => {
  return (
    <CSSTransition in={isShow} classNames="burger" timeout={500} unmountOnExit>
      <div onClick={(e) => e.stopPropagation()} className="burger fixed bottom-0 left-0 top-0 flex">
        <div className="flex h-full w-72 flex-col overflow-y-auto bg-neutral p-3 shadow">
          <div className="space-y-3">
            <UserCard />
            <MenuList />
          </div>
        </div>
        <style jsx>{`
          .burger.burger-enter {
            transform: translateX(-300px);
          }

          .burger.burger-enter-active {
            transform: translateX(0);
            transition: transform 0.5s ease;
          }

          .burger.burger-exit {
            transform: translateX(0);
          }

          .burger.burger-exit-active {
            transform: translateX(-300px);
            transition: transform 0.5s ease;
          }
        `}</style>
      </div>
    </CSSTransition>
  );
};
