import React from "react";
import { Potion } from "../types/Potion";

interface Props {
  openModal: (potion: Potion) => void;
  potionsArray: Potion[];
}

const PotionList: React.FC<Props> = ({ openModal, potionsArray }) => {
  return (
    <>
      <div className="w-[100%] bg-gray-950 bg-opacity-50 p-[2%] flex flex-wrap">
        {potionsArray.map((potion, i) => (
          <div key={i} className="bg-black w-[20%] p-[2%]">
            <p>{potion.name}</p>
            <img className="w-[60%]" src={`../../../public/imgs/${potion.image}`} alt={potion.id} />
            <p>{potion.rarity}</p>
            <p>{potion.meta.availability.drop_rate.boss}</p>
            <p>{potion.meta.availability.drop_rate.chance}</p>
            <button onClick={() => { openModal(potion) }}>Details</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default PotionList;