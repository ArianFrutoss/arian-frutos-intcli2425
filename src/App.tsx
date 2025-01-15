import { useEffect, useState } from 'react';
import { Potion } from './types/Potion';
import { potions } from './data/data';
import PotionList from './components/PotionList';
import LevelFilter from './components/LevelFilter';
import { filterByLevelRequirement, getPotionsByRarity } from './helpers/potionHelpers';
import RarityFilter from './components/RarityFilter';

function App() {
  const [activePotions, setActivePotions] = useState<Potion[]>(potions);
  const [sliderCont, setSliderCont] = useState<string>("50");
  const [rarityValue, setRarityValue] = useState<string>("epic");

  useEffect(() => {
    setActivePotions(filterByLevelRequirement(potions, +sliderCont));
  },[sliderCont]);

  useEffect(() => {
    setActivePotions(getPotionsByRarity(potions, rarityValue));
  },[rarityValue]);

  return (
    <>
      <div className="w-screen h-screen">
        <PotionList potionsArray={activePotions}/>
        <LevelFilter setSliderCont={setSliderCont}/>
        <RarityFilter setRarityValue={setRarityValue}/>
      </div>
    </>
  )
}

export default App;