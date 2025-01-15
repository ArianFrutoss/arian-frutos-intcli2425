import React from "react";
import { Potion } from "../types/Potion";

interface Props {
  potionsArray: Potion[];
}

const PotionList: React.FC<Props> = ({ potionsArray }) => {
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
            </div>
          ))}
      </div>
    </>
  )
}

export default PotionList;