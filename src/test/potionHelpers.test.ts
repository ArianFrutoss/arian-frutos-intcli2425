import { potions } from "../data/data";
import { filterByLevelRequirement, findPotionByEffect, getPotionsByRarity, listIngredients } from "../helpers/potionHelpers";

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

describe('When select a potion', () => {
    it('Should return potion ingredient list', () => {
        const potion = potions[0];

        const potionIngredients = listIngredients(potion);

        expect(potionIngredients).toStrictEqual(['Phoenix Feather', 'Molten Ember', 'Flameflower Extract']);
    });
});

describe('When the effect it is the same as the potion secondary effect', () => {
    it('Should return potions with the secondary effect', () => {
        const effect = "manaRegeneration";
        const potionsArray = potions;

        const filteredPotions = findPotionByEffect(potionsArray, effect);
        
        expect(filteredPotions).toStrictEqual([potionsArray[1], potionsArray[4]]);
    });
});