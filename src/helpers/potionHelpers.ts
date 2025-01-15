import { Potion } from "../types/Potion";

export const filterByLevelRequirement = (potions: Potion[], level: number) => {
    return potions.filter((potion: Potion) => potion.usage.restrictions.levelRequirement <= level);
}