import {SpritesMap} from "../constants/sprite";

export type SpriteKey = {
    [Key in keyof SpritesMap]: `${Key}/${SpritesMap[Key]}`;
}[keyof SpritesMap];