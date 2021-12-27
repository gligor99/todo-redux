import React from 'react'
import './empty.css'

const Empty = () => {
    return (
        <div className='empty-container'>
            <h2 className='title-empty'>TodoList is empty</h2>
            <p className='p-empty'>Add things using the input field</p>
        </div>
    )
}

export default Empty
