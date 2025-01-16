interface Props {
    sliderValue: number;
    setSliderCont: (value: string) => void;
}

const LevelFilter: React.FC<Props> = ({ sliderValue, setSliderCont }) => {
    return (
        <div>
            <p>Level Filter</p>
            <input className="bg-gray-200 text-black border border-gray-800 rounded-md p-[10%] appearance-none" type="range" value={sliderValue} onChange={(e) => setSliderCont(e.target.value)} />
        </div>
    )
}

export default LevelFilter;