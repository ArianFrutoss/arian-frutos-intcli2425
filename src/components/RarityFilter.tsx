interface Props {
    setRarityValue: (value: string) => void;
}

const RarityFilter: React.FC<Props> = ({ setRarityValue }) => {
    return (
        <div>
            <p>Rarity Filter</p>
            <select
                onChange={(e) => setRarityValue(e.target.value)}
                className="bg-gray-200 text-black border border-gray-800 rounded-md p-[10%] appearance-none">
                    <option value="epic">Epic</option>
                    <option value="legendary">Legendary</option>
                    <option value="mythic">Mythic</option>
            </select>
        </div>
    )
}

export default RarityFilter;