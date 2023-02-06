import React from 'react'
import '../styles/toggle.scss'

function Toggle() {
    return (
        <label className='toggle'>
            <input type='checkbox' className="toggle__input" />
            <span className="toggle__style"></span>
        </label>
    )
}

export default Toggle