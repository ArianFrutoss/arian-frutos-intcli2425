
import { Ingredient } from "../types/Ingredients";
import { Potion } from "../types/Potion";

export const filterByLevelRequirement = (potions: Potion[], level: number) => {
    return potions.filter((potion: Potion) => potion.usage.restrictions.levelRequirement >= level);
}

export const getPotionsByRarity = (potions: Potion[], rarity: string) => {
    return potions.filter((potion: Potion) => potion.rarity === rarity);
}

export const listIngredients = (potion: Potion) => {
    return potion.ingredients.map((ingredient: Ingredient) => ingredient.name);
}

export const findPotionByEffect = (potions: Potion[], effect: string) => {
    return potions.filter((potion: Potion) => potion.effects.secondary.find((secondaryEffect) => secondaryEffect.attribute === effect));
}

export const calculateCraftingTime = (potions: Potion[]) => {
    return potions.reduce((craftingTime: number, potion: Potion) => 
        potion.crafting.time.unit === "hours" ?
        craftingTime + potion.crafting.time.amount * 60 :
        craftingTime + potion.crafting.time.amount, 0
    );
}