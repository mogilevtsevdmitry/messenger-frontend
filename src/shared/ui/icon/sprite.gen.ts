export interface SpritesMap {
  social: "google" | "vkontakte";
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  social: ["google", "vkontakte"],
};
