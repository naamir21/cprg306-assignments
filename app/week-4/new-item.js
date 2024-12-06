'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-md max-w-sm text-center">
      <h1 className="text-2xl font-bold mb-4">New Item Quantity</h1>
      <div className="flex items-center justify-center gap-4">
        
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 text-black font-medium rounded ${
            quantity === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
          }`}
        >
          -
        </button>

        <span className="text-xl font-semibold">{quantity}</span>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 text-white font-medium rounded ${
            quantity === 20 ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}