'use client';

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import initialItems from "./items.json";

export default function Page() {
    const [items, setItems] = useState(initialItems);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <main className="p-6 bg-gray-950 min-h-screen">
            <h1 className="text-2xl font-semibold p-1 m-4">Shopping List</h1>
            <div> 
                <NewItem onAddItem={handleAddItem} />
            </div>
            <div>
                <ItemList items={items} />
            </div>
        </main>
    )
}

