interface Props {
    setEffectValue: (value: string) => void;
}

const EffectFilter: React.FC<Props> = ({ setEffectValue }) => {
    return (
        <>
            <p>Level Filter</p>
            <input type="text" onChange={(e) => setEffectValue(e.target.value)} />
        </>
    )
}

export default EffectFilter;