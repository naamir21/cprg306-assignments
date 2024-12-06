export default function Item({name, quantity, category}) {
    return (
        <div>
            <ul className="hover:text-blue-400 p-2">
                <li>
                    <h2 className="text-xl font-semibold">{name}</h2>
                </li>
                <li>
                    <p className="text-sm ml-1">Buy {quantity} in {category}</p>
                </li>
            </ul>
        </div>
    )
} 


