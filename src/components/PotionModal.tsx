import React from "react";
import { Potion } from "../types/Potion";

interface Props {
    closeModal: () => void;
    potion: Potion;
}

const PotionModal: React.FC<Props> = ({ closeModal, potion }) => {
    return (
        <>
            <div className='absolute w-screen h-screen bg-black bg-opacity-80 z-10 flex justify-center'>
                <div className='bg-stone-950 w-[50%]'>
                    <button onClick={closeModal}>X</button>
                </div>
            </div>
        </>
    )
}

export default PotionModal;