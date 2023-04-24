import { SpriteKey } from "@/shared/api";

interface IMenuIitem {
  iconName: SpriteKey;
  path: string;
  value: string;
}

export const menuList: IMenuIitem[] = [
  {
    iconName: "settings/account",
    path: "/profile",
    value: "Мой аккаунт",
  },
  {
    iconName: "settings/group",
    path: "/new-group",
    value: "Новая группа",
  },
  {
    iconName: "settings/friends",
    path: "/friends",
    value: "Друзья",
  },
  {
    iconName: "settings/message",
    path: "/messages",
    value: "Сообщения",
  },
  {
    iconName: "settings/tools",
    path: "/tools",
    value: "Настройки",
  },
  {
    iconName: "settings/exit",
    path: "/exit",
    value: "Выход",
  },
];
