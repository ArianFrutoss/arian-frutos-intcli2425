import { Crafting } from "./Crafting";
import { Effects } from "./Effects";
import { SecondaryEffects } from "./SecondaryEffects";
import { Ingredient } from "./Ingredients";
import { Meta } from "./Meta";
import { Usage } from "./Usage";

export interface Potion {
    id: string,
    name: string,
    type: string,
    rarity: string,
    effects: {
        primary: Effects,
        secondary: SecondaryEffects[],
    },
    ingredients: Ingredient[],
    crafting: Crafting,
    usage: Usage,
    meta: Meta,
    image: string,
}