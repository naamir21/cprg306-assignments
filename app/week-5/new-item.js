'use client';

import { useState } from 'react';

export default function NewItem() {
    const [name, setName] = useState(''); // State for Name Field
    const [quantity, setQuantity] = useState(1); // State for Quantity
    const [category, setCategory] = useState('produce'); // State for Category Field

    // Increment quantity with max limit of 20
    const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
    };

    // Decrement quantity with min limit of 1
    const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    };

    // Form Submission Handler
    const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create item object
    const item = {
        name,
        quantity,
        category,
    };

    console.log(item); // Log item to console
    alert(`Added Item \nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`); // Display an alert with added item details

    // Reset form fields
    setName('');
    setQuantity(1);
    setCategory('produce');
    };

    return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-md max-w-md text-white">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name Field */}
        <div>
            <label htmlFor="name" className="block text-sm font-medium">
            Name
            </label>
            <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 text-black rounded"
            placeholder="Enter item name"
            />
        </div>

        {/* Quantity Field */}
        <div>
            <label htmlFor="quantity" className="block text-sm font-medium">
            Quantity
            </label>
            <div className="flex items-center gap-6 mt-1">
            {/* Current Quantity Display */}
            <span className="text-lg font-semibold">{quantity}</span>

            {/* Buttons Container */}
            <div className="flex gap-2 ml-auto">
                {/* Decrement Button */}
                <button
                onClick={decrement}
                type="button"
                disabled={quantity === 1}
                className={`px-4 py-2 text-black font-medium rounded ${
                  quantity === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
                }`}
                >
                -
                </button>

                {/* Increment Button */}
                <button
                onClick={increment}
                type="button"
                disabled={quantity === 20}
                className={`px-4 py-1 text-white font-medium rounded ${
                  quantity === 20 ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
                }`}
                >
                +
                </button>
            </div>
          </div>
        </div>

        {/* Category Field */}
        <div>
            <label htmlFor="category" className="block text-sm font-medium">
            Category
            </label>
            <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 mt-1 text-black rounded"
            >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
            </select>
        </div>

        {/* Submit Button */}
        <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded"
        >
            Add Item
        </button>
        </form>
    </div>
    );
}
