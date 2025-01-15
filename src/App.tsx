import { useState } from 'react';
import { Potion } from './types/Potion';
import { potions } from './data/data';
import PotionList from './components/PotionList';

function App() {
  const [potionsArray, setPotionsArray] = useState<Potion[]>(potions);

  return (
    <>
      <div className="w-screen h-screen">
        <PotionList potionsArray={potionsArray}/>
      </div>
    </>
  )
}

export default App;