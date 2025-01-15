import { useEffect, useState } from 'react';
import { Potion } from './types/Potion';
import { potions } from './data/data';
import PotionList from './components/PotionList';
import LevelFilter from './components/LevelFilter';
import { calculateCraftingTime, filterByLevelRequirement, findPotionByEffect, getPotionsByRarity } from './helpers/potionHelpers';
import RarityFilter from './components/RarityFilter';
import EffectFilter from './components/EffectFilter';
import CraftTimeButton from './components/CraftTimeButton';

function App() {
  const [potionsArray] = useState<Potion[]>(potions);
  const [activePotions, setActivePotions] = useState<Potion[]>(potions);
  const [sliderValue, setSliderValue] = useState<string>("50");
  const [rarityValue, setRarityValue] = useState<string>("epic");
  const [effectValue, setEffectValue] = useState<string>("");
  const [craftTimeValue, setCraftTimeValue] = useState<number>(0);

  useEffect(() => {
    setActivePotions(filterByLevelRequirement(potionsArray, +sliderValue));
  }, [sliderValue]);

  useEffect(() => {
    setActivePotions(getPotionsByRarity(potionsArray, rarityValue));
  }, [rarityValue]);

  useEffect(() => {
    setActivePotions(findPotionByEffect(potionsArray, effectValue));
  }, [effectValue]);

  const calculateCraftTime = () => {
    setCraftTimeValue(calculateCraftingTime(activePotions));
  };

  return (
    <>
      <div className="w-screen h-screen">
        <PotionList potionsArray={activePotions} />
        <div className="flex justify-around h-[10%]">
          <LevelFilter setSliderCont={setSliderValue} />
          <RarityFilter setRarityValue={setRarityValue} />
          <EffectFilter setEffectValue={setEffectValue} />
          <CraftTimeButton craftTimeValue={craftTimeValue} calculateCraftTime={calculateCraftTime} />
        </div>
      </div>
    </>
  )
}

export default App;