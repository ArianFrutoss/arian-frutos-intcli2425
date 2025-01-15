import { potions } from "../data/data";
import { filterByLevelRequirement } from "../helpers/potionHelpers";

describe('When the level is higher than the potion requirement level', () => {
    it('Should return potions with level_requirement lower than level', () => {
        const level = 16;
        const potionsArray = potions;

        const filteredPotions = filterByLevelRequirement(potionsArray, level);

        expect(filteredPotions).toStrictEqual([potionsArray[0], potionsArray[2], potionsArray[5]]);
    });
});