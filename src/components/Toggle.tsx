import React from 'react'
import { IToggle } from '../interfaces/IToggle'
import '../styles/toggle.scss'

function Toggle(props: IToggle) {
    return (
        <label className='toggle' htmlFor='toggle'>
            <input id='toggle' type='checkbox' className="toggle__input" onChange={e => props.setActive(e.target.checked)} />
            <span className="toggle__style"></span>
        </label>
    )
}

export default Toggle