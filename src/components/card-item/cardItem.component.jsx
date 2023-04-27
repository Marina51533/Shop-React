import './cardItem.styles.scss'

const CardItem = ({cardItem}) => {
    const {name,quantity} = cardItem
  return (
    <div>
      <h1>{name}</h1>
      <span>{quantity}</span>
    </div>
  )
}

export default CardItem
