interface Props {
    calculateCraftTime: VoidFunction;
}

const CraftTimeButton: React.FC<Props> = ({ calculateCraftTime }) => {
    return (
        <>
            
            <button onClick={calculateCraftTime}>Craft time calculate button</button>
        </>
    )
}

export default CraftTimeButton;