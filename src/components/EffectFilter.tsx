interface Props {
    setEffectValue: (value: string) => void;
}

const EffectFilter: React.FC<Props> = ({ setEffectValue }) => {
    return (
        <>
            <p>Effect Filter</p>
            <input type="text" onChange={(e) => setEffectValue(e.target.value)} />
        </>
    )
}

export default EffectFilter;