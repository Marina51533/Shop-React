import './cardItem.styles.scss'

const CardItem = ({cardItem}) => {
    const {name,price,quantity,imageUrl} = cardItem
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`}/>
      <div className='item-details'>
    <span className='name'>{name}</span>
    <span className='price'>{quantity} x ${price}</span>
      </div>
    </div>
  )
}

export default CardItem
