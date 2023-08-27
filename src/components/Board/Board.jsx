import React, { useEffect, useState } from 'react'
import Category from '../Category/Category.jsx'
import './Board.css'

function Board() {
    const [categories, setCategories] = useState([]);

    // This useEffect hook will run once after the component is first rendered.
    useEffect(() => {
        const fetchData = async () => {
            let offset = Math.floor(Math.random() * 28175) + 1
    
            // Fetch the categories from the API.
            const categoryUrl = `/api/categories?count=6&offset=${offset}`;

            const categoryResponse = await fetch(categoryUrl);
            const categoryData = await categoryResponse.json();
            // console.log(categoryData)
    
            // Fetch the clues for each category.   
            const categoriesWithClues = await Promise.all(categoryData.map(async (category) => {
                const clueUrl = `/api/clues?category=${category.id}`;

                const clueResponse = await fetch(clueUrl);
                const clueData = await clueResponse.json();
    
                // Attach the clues to the category.
                return {
                    ...category,
                    clues: clueData,
                };
            }));
    
            setCategories(categoriesWithClues);
        }

        fetchData();
    }, []);

    return (
        <div className="jeopardy-board">
            {categories.map((category) => (
                <Category key={category.id} category={category} />
            ))}
        </div>
    );
}

export default Board;