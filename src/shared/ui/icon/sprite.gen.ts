export interface SpritesMap {
  chat:
    | "checked"
    | "clip"
    | "dots"
    | "micro"
    | "pending"
    | "search"
    | "send"
    | "sent"
    | "sidebar"
    | "smile";
  notification: "bell";
  player: "next" | "play" | "prev";
  social: "google" | "vkontakte";
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  chat: [
    "checked",
    "clip",
    "dots",
    "micro",
    "pending",
    "search",
    "send",
    "sent",
    "sidebar",
    "smile",
  ],
  notification: ["bell"],
  player: ["next", "play", "prev"],
  social: ["google", "vkontakte"],
};
