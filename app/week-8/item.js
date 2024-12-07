export default function Item({ name, quantity, category, onSelect }) {
    return (
        <div onClick={() => onSelect && onSelect(name)} className="cursor-pointer hover:bg-gray-800 p-2 rounded-lg">
            <ul>
                <li>
                    <h2 className="text-m font-semibold">{name}</h2>
                </li>
                <li>
                    <p className="text-sm ml-1">Buy {quantity} in {category}</p>
                </li>
            </ul>
        </div>
    );
}



