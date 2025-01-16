import React from "react";
import { Potion } from "../types/Potion";

interface Props {
  openModal: (potion: Potion) => void;
  potionsArray: Potion[];
}

const PotionList: React.FC<Props> = ({ openModal, potionsArray }) => {
  return (
    <>
      <div className="p-[2%] flex flex-wrap">
        {potionsArray.map((potion, i) => (
          <div key={i} className="w-[18%] bg-gray-950 bg-opacity-50 m-[1%] text-center p-[1%]">
            <p className="text-yellow-600 text-xl p-[2%]">{potion.name}</p>
            <div className="flex justify-center place-content-center p-[1%]">
              <img className="w-[50%]" src={`../../public/imgs/${potion.image}`} alt={potion.id} />
            </div>
            <p>{`Rarity: ${potion.rarity}`}</p>
            <p>{`Boss: ${potion.meta.availability.drop_rate.boss}`}</p>
            <p>{`Drop-rate: ${potion.meta.availability.drop_rate.chance}`}</p>
            <button className="float-right" onClick={() => { openModal(potion) }}>Details</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default PotionList;