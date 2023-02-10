import React from 'react'
import { ICard } from '../interfaces/ICard'
import '../styles/card.scss'

function Card(props: ICard) {
    return (
        <div className={props.name}>
            <div className='card__header'>
                <div className='card__header__title'>{props.header}</div>
                <div className='card__header__amount'>
                    <span>$</span>
                    <span>{props.amount}</span>
                </div>
            </div>
            <div className='card__body'>
                <div className='card__body__divider'></div>
                <div className='card__body__offer'>{props.storageSize} Storage</div>
                <div className='card__body__divider'></div>
                <div className='card__body__offer'>{props.users} Users Allowed</div>
                <div className='card__body__divider'></div>
                <div className='card__body__offer'>Send up to {props.sendUp} GB</div>
                <div className='card__body__divider'></div>
                <button className='card__body__button'>learn more</button>
            </div>
        </div>
    )
}

export default Card