import { useEffect, useState } from 'react';
import { Potion } from './types/Potion';
import { potions } from './data/data';
import PotionList from './components/PotionList';
import LevelFilter from './components/LevelFilter';
import { filterByLevelRequirement, findPotionByEffect, getPotionsByRarity } from './helpers/potionHelpers';
import RarityFilter from './components/RarityFilter';
import EffectFilter from './components/EffectFilter';

function App() {
  const [activePotions, setActivePotions] = useState<Potion[]>(potions);
  const [sliderValue, setSliderValue] = useState<string>("50");
  const [rarityValue, setRarityValue] = useState<string>("epic");
  const [effectValue, setEffectValue] = useState<string>("epic");

  useEffect(() => {
    setActivePotions(filterByLevelRequirement(potions, +sliderValue));
  },[sliderValue]);

  useEffect(() => {
    setActivePotions(getPotionsByRarity(potions, rarityValue));
  },[rarityValue]);

  useEffect(() => {
    setActivePotions(findPotionByEffect(potions, effectValue));
  },[effectValue]);

  return (
    <>
      <div className="w-screen h-screen">
        <PotionList potionsArray={activePotions}/>
        <LevelFilter setSliderCont={setSliderValue}/>
        <RarityFilter setRarityValue={setRarityValue}/>
        <EffectFilter setEffectValue={setEffectValue}/>
      </div>
    </>
  )
}

export default App;