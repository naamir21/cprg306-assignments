'use client';

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = sortBy === "group" 
        ? Object.entries(itemsData.reduce((acc, item) => {
            acc[item.category] = acc[item.category] || [];
            acc[item.category].push(item);
            return acc;
        }, {}))
        : [...itemsData].sort((a, b) => {
            if (sortBy === "name") return a.name.localeCompare(b.name);
            if (sortBy === "category") return a.category.localeCompare(b.category);
            return 0;
        });

    return (
        <main className="ml-4">
            <div className="flex space-x-2 mb-4">
                <button 
                    className={`px-4 py-1.5 rounded text-sm font-semibold ${sortBy === "name" ? "bg-yellow-500" : "bg-yellow-600"}`}
                    onClick={() => setSortBy("name")}
                >
                    Sort by Name
                </button>
                <button 
                    className={`px-4 py-1.5 rounded text-sm font-semibold ${sortBy === "category" ? "bg-yellow-500" : "bg-yellow-600"}`}
                    onClick={() => setSortBy("category")}
                >
                    Sort by Category
                </button>
                <button 
                    className={`px-4 py-1.5 rounded text-sm font-semibold ${sortBy === "group" ? "bg-yellow-500" : "bg-yellow-600"}`}
                    onClick={() => setSortBy("group")}
                >
                    Group by Category
                </button>
            </div>
            {sortBy === "group" 
                ? sortedItems.map(([category, items]) => (
                    <div key={category}>
                        <h2 className="text-xl font-semibold capitalize mb-2">{category}</h2>
                        {items.map(item => (
                            <Item 
                                key={item.id} 
                                name={item.name} 
                                quantity={item.quantity} 
                                category={item.category} 
                            />
                        ))}
                    </div>
                  ))
                : sortedItems.map(item => (
                    <Item 
                        key={item.id} 
                        name={item.name} 
                        quantity={item.quantity} 
                        category={item.category} 
                    />
                  ))}
        </main>
    );
}
