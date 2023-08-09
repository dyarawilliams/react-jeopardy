import React, { useState } from 'react'
import './Clue.css'

const Clue = ({ value, clue }) => {
    const [stage, setStage] = useState(0)
    const [toggle, setToggle] = useState(false)
    
    const handleClick = () => {
        setStage(stage + 1)
        setToggle(true)
    }

    let content 
    let className
    if (stage === 0) {
        content = `$${value}`
        className = `jeopardy-clue dollar-value`
    } else if (stage === 1) {
        content = <p className='jeopardy-clue-container'>{clue ? clue.question : null}</p>
        className = `jeopardy-clue`
    } else if (stage === 2) {
        content = <p>{clue ? clue.answer : null}</p>
        className = `jeopardy-clue`
    }



    return (
        <div className={className} style={{
            prespective: toggle ? '7em' : '',
            }} 
            onClick={handleClick}
        >
            { content }
        </div>
    )
}

export default Clue