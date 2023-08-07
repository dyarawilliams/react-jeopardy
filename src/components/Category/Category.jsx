// eslint-disable-next-line no-unused-vars
import React from 'react'
import Clue from '../Clue/Clue.jsx'
import './Category.css'

const Category = ({ category }) => {
    const values = [200, 400, 600, 800, 1000]

    const toTitleCase = (str) => {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ')
    }

    const title = toTitleCase(category.title)

    return (
        <div className="jeopardy-category">
            <h2>{title}</h2>
            {values.map((value, index) => {
                const clue = category.clues.find((clue) => clue.value === value)
                return <Clue key={index} value={value} clue={clue} />
            })}
        </div>
    )
}

export default Category