import { Potion } from "../types/Potion";

export const filterByLevelRequirement = (potions: Potion[], level: number) => {
    return potions.filter((potion: Potion) => potion.usage.restrictions.levelRequirement <= level);
}

export const getPotionsByRarity = (potions: Potion[], rarity: string) => {
    return potions.filter((potion: Potion) => potion.rarity === rarity);
}