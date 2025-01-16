interface Props {
    craftTimeValue: number;
    calculateCraftTime: VoidFunction;
}

const CraftTimeButton: React.FC<Props> = ({ craftTimeValue, calculateCraftTime }) => {
    return (
        <div className="flex justify-center place-items-center"> 
            <button onClick={calculateCraftTime}>Craft time calculate button</button>
            <p className="pl-10">{`${craftTimeValue} minutes`}</p>
        </div>
    )
}

export default CraftTimeButton;