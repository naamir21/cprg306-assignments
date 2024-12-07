'use client';

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = sortBy === "group"
        ? Object.entries(
              items.reduce((acc, item) => {
                  acc[item.category] = acc[item.category] || [];
                  acc[item.category].push(item);
                  return acc;
              }, {})
          )
        : [...items].sort((a, b) => {
              if (sortBy === "name") return a.name.localeCompare(b.name);
              if (sortBy === "category") return a.category.localeCompare(b.category);
              return 0;
          });

    return (
        <div className="ml-4 p-6 bg-gray-900 rounded-lg shadow-md max-w-md text-white">
            {/* Sort Items Section */}
            <h2 className="text-xl font-semibold mb-4">Sort Items</h2>
            <div className="flex space-x-2 mb-6">
                <button
                    className={`px-4 py-2 text-sm font-medium text-black rounded ${
                        sortBy === "name" ? "bg-blue-700 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => setSortBy("name")}
                >
                    Sort by Name
                </button>
                <button
                    className={`px-4 py-2 text-sm font-medium text-black rounded ${
                        sortBy === "category" ? "bg-blue-700 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => setSortBy("category")}
                >
                    Sort by Category
                </button>
                <button
                    className={`px-4 py-2 text-sm font-medium text-black rounded ${
                        sortBy === "group" ? "bg-blue-700 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => setSortBy("group")}
                >
                    Group by Category
                </button>
            </div>

            {/* Items Section */}
            {sortBy === "group"
                ? sortedItems.map(([category, items]) => (
                      <div key={category} className="mb-4">
                          <h2 className="text-lg font-semibold capitalize mb-2">{category}</h2>
                          {items.map((item) => (
                              <Item
                                  key={item.id}
                                  name={item.name}
                                  quantity={item.quantity}
                                  category={item.category}
                              />
                          ))}
                      </div>
                  ))
                : sortedItems.map((item) => (
                      <Item
                          key={item.id}
                          name={item.name}
                          quantity={item.quantity}
                          category={item.category}
                      />
                  ))}
        </div>
    );
}
