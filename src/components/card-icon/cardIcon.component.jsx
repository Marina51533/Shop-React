import './cardIcon.styles.scss'
import React from "react";
import { default as logo } from '../../assets/shopping-bag.svg'
import { useContext } from 'react';
import { CardContext } from '../../context/card.context';



function CardIcon() {
    const {isCardOpen, setIsCardOpen,cardCount}=useContext(CardContext)
    const toggleIsCardOpen = ()=>setIsCardOpen(!isCardOpen)
  return (
    <div className='card-icon-container' onClick={toggleIsCardOpen}>
      <img src={logo} className='shopping-icon'/>
      <span className='item-count'>{cardCount}</span>
    </div>
  )
}

export default CardIcon
