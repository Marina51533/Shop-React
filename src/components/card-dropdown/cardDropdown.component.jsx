import './cardDropdown.styles.scss'
import Button from '../button/button.component'
import CardItem from '../card-item/cardItem.component'
import { useContext } from 'react'
import { CardContext } from '../../context/card.context'

const CardDropdown = () => {
    const {cardItems} = useContext(CardContext)
  return (
    <div className='card-dropdown-container'>
      <div className='card-items'>
        {cardItems.map(item=>(
            <CardItem key={item.id} cardItem={item}/>
        ))}
      </div>
      <Button>Click</Button>
    </div>
  )
}

export default CardDropdown

