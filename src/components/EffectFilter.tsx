interface Props {
    setEffectValue: (value: string) => void;
}

const EffectFilter: React.FC<Props> = ({ setEffectValue }) => {
    return (
        <div>
            <p>Effect Filter</p>
            <input className="bg-gray-200 text-black border border-gray-800 rounded-md p-[4%] appearance-none" type="text" onChange={(e) => setEffectValue(e.target.value)} />
        </div>
    )
}

export default EffectFilter;