export interface SpritesMap {
  chat: "checked" | "pending" | "sent";
  notification: "bell";
  player: "next" | "play" | "prev";
  social: "google" | "vkontakte";
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  chat: ["checked", "pending", "sent"],
  notification: ["bell"],
  player: ["next", "play", "prev"],
  social: ["google", "vkontakte"],
};
