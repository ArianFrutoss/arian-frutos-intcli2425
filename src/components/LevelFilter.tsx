interface Props {
    setSliderCont: (value: string) => void;
}

const LevelFilter: React.FC<Props> = ({ setSliderCont }) => {
    return (
        <>  
            <p>Level Filter</p>
            <input type="range" onChange={(e) => setSliderCont(e.target.value)} />
        </>
    )
}

export default LevelFilter;