'use client';

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import initialItems from "./items.json";

export default function Page() {
    const [items, setItems] = useState(initialItems);
    const [selectedItemName, setSelectedItemName] = useState(""); // State for selected item name

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleItemSelect = (name) => {
        // Clean up the item name for API use
        const cleanName = name
            .split(",")[0] // Remove size or quantity information
            .replace(/[\u{1F300}-\u{1F6FF}\u{2600}-\u{26FF}]/gu, "") // Remove emojis
            .trim();
        setSelectedItemName(cleanName);
    };

    return (
        <main className="p-6 bg-gray-950 min-h-screen">
            <h1 className="text-2xl font-semibold p-1 m-4">Shopping List</h1>
            <div className="flex flex-col lg:flex-row lg:gap-6">
                {/* Left Section: New Item and Item List */}
                <div>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>

                {/* Right Section: Meal Ideas */}
                <div>
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}
