import React from "react";
import { Potion } from "../types/Potion";
import { Effects } from "../types/Effects";

interface Props {
    closeModal: () => void;
    potion: Potion;
}

const PotionModal: React.FC<Props> = ({ closeModal, potion }) => {
    return (
        <>
            <div className="absolute w-screen h-screen bg-black bg-opacity-80 z-10 flex justify-center">
                <div className="bg-stone-950 w-[50%]">
                    <button className="float-end" onClick={closeModal}>X</button>
                    <div className="text-center p-[3%]">
                        <h2 className="text-2xl pt-[2%] pb-[1%] text-yellow-600">Potion Details</h2>
                        <h3 className="text-xl pt-[2%] pb-[1%] text-yellow-400">Primary Effects</h3>
                        <div>
                            <p>{potion.effects.primary.attribute}</p>
                            <p>{`Duration: ${potion.effects.primary.duration.amount} ${potion.effects.primary.duration.unit}`}</p>
                            <p>{`Value: ${potion.effects.primary.value}`}</p>
                        </div>
                        <h3 className="text-xl pt-[2%] pb-[1%] text-yellow-400">Secondary Effects</h3>
                        <div className="flex justify-around">
                            <>
                                {potion.effects.secondary.map((secondary) => {
                                    return (
                                        <div>
                                            <p>{secondary.attribute}</p>
                                            <p>{`Duration: ${secondary.duration.amount} ${secondary.duration.unit}`}</p>
                                            <p>{`Value: ${secondary.value}`}</p>
                                        </div>
                                    )
                                })}
                            </>
                        </div>
                        <h3 className="text-xl pt-[2%] pb-[1%] text-yellow-400">Ingredients</h3>
                        <div className="flex justify-around">
                            <>
                                {potion.ingredients.map((ingredient) => { 
                                    return (
                                        <div>
                                            <p>{ingredient.name}</p>
                                            <p>{`Quantity: ${ingredient.quantity}`}</p>
                                            <p>{`Location: ${ingredient.origin.location}`}</p>
                                            <p>{`Region: ${ingredient.origin.region}`}</p>
                                        </div>
                                    )
                                })}
                            </>
                        </div>
                        <h3 className="text-xl pt-[2%] pb-[1%] text-yellow-400">Restrictions</h3>
                        <div>
                            <span>Class Restrictions: </span>
                            <>
                                {potion.usage.restrictions.classRestrictions.map((classRestriction) => {
                                    return (<span>{`${classRestriction}. `}</span>)
                                })}
                            </>
                            <p>{`Level Restriction: ${potion.usage.restrictions.levelRequirement}`}</p>
                        </div>
                        <h3 className="text-xl pt-[2%] pb-[1%] text-yellow-400">Warnings</h3>
                        <div>
                            <>
                                {potion.usage.restrictions.warnings.map((warning) => {
                                    return (<p>{warning}</p>)
                                })}
                            </>
                        </div>
                        <h3 className="text-xl pt-[2%] pb-[1%] text-yellow-400">Instructions</h3>
                        <div>
                            <>
                                {potion.usage.instructions.map((instruction) => {
                                    return (<p>{instruction}</p>)
                                })}
                            </>
                        </div>
                        <h3 className="text-xl pt-[2%] text-yellow-400">{`Crafting Time: ${potion.crafting.time.amount} ${potion.crafting.time.unit}`}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PotionModal;