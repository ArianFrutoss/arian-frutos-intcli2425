import { useEffect, useState } from 'react';
import { Potion } from './types/Potion';
import { potions } from './data/data';
import PotionList from './components/PotionList';
import LevelFilter from './components/LevelFilter';
import { filterByLevelRequirement } from './helpers/potionHelpers';

function App() {
  const [activePotions, setActivePotions] = useState<Potion[]>(potions);
  const [sliderCont, setSliderCont] = useState<string>("50");

  useEffect(() => {
    setActivePotions(filterByLevelRequirement(potions, +sliderCont));
  },[sliderCont]);

  return (
    <>
      <div className="w-screen h-screen">
        <PotionList potionsArray={activePotions}/>
        <LevelFilter setSliderCont={setSliderCont}/>
      </div>
    </>
  )
}

export default App;