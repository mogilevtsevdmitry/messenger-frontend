import {SpritesMap} from "../constants/sprite.gen";

export type SpriteKey = {
    [Key in keyof SpritesMap]: `${Key}/${SpritesMap[Key]}`;
}[keyof SpritesMap];