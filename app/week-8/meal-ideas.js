'use client';

import { useState, useEffect } from 'react';

// Function to fetch meal ideas from TheMealDB API
async function fetchMealIdeas(ingredient) {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    // Load meal ideas whenever the ingredient changes
    useEffect(() => {
        if (ingredient) {
            async function loadMealIdeas() {
                const mealIdeas = await fetchMealIdeas(ingredient);
                setMeals(mealIdeas);
            }
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div className="ml-4 p-6 bg-gray-900 rounded-lg shadow-md max-w-md text-white">
            <h2 className="text-xl font-semibold mb-4">
                Meal Ideas for: {ingredient || "None"}
            </h2>
            {meals.length > 0 ? (
                <ul className="space-y-2">
                    {meals.map((meal) => (
                        <li key={meal.idMeal} className="flex items-center gap-4">
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                className="w-12 h-12 rounded-full"
                            />
                            <span>{meal.strMeal}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No meal ideas available for this ingredient.</p>
            )}
        </div>
    );
}
