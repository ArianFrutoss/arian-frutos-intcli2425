import { potions } from "../data/data";
import { filterByLevelRequirement, getPotionsByRarity } from "../helpers/potionHelpers";

describe('When the level is higher than the potion requirement level', () => {
    it('Should return potions with level_requirement lower than level', () => {
        const level = 16;
        const potionsArray = potions;

        const filteredPotions = filterByLevelRequirement(potionsArray, level);

        expect(filteredPotions).toStrictEqual([potionsArray[0], potionsArray[2], potionsArray[5]]);
    });
});

describe('When the rarity it is the same as the potion rarity', () => {
    it('Should return potions with the same rarity', () => {
        const rarity = "mythic";
        const potionsArray = potions;

        const filteredPotions = getPotionsByRarity(potionsArray, rarity);

        expect(filteredPotions).toStrictEqual([potionsArray[7], potionsArray[9]]);
    });
});