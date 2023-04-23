export interface SpritesMap {
  chat:
    | "checked"
    | "clip"
    | "dots"
    | "file"
    | "image"
    | "micro"
    | "music"
    | "pending"
    | "search"
    | "send"
    | "sent"
    | "sidebar"
    | "smile"
    | "video";
  notification: "bell";
  player: "next" | "play" | "prev";
  social: "google" | "vkontakte";
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  chat: [
    "checked",
    "clip",
    "dots",
    "file",
    "image",
    "micro",
    "music",
    "pending",
    "search",
    "send",
    "sent",
    "sidebar",
    "smile",
    "video",
  ],
  notification: ["bell"],
  player: ["next", "play", "prev"],
  social: ["google", "vkontakte"],
};
