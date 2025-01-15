interface Props {
    setRarityValue: (value: string) => void;
}

const RarityFilter: React.FC<Props> = ({ setRarityValue }) => {
    return (
        <select
            onChange={(e) => setRarityValue(e.target.value)}
            className="block w-8/12 bg-gray-200 text-black border border-gray-800 rounded-md py-1 pl-6 pr-10 2xl:text-3xl lg:text-xl sm:text-base appearance-none">
                <option value="epic">Epic</option>
                <option value="legendary">Legendary</option>
                <option value="mythic">Mythic</option>
        </select>
    )
}

export default RarityFilter;