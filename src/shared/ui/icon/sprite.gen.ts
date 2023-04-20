export interface SpritesMap {
  chat: "checked" | "clip" | "micro" | "pending" | "sent" | "smile";
  notification: "bell";
  player: "next" | "play" | "prev";
  social: "google" | "vkontakte";
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  chat: ["checked", "clip", "micro", "pending", "sent", "smile"],
  notification: ["bell"],
  player: ["next", "play", "prev"],
  social: ["google", "vkontakte"],
};
