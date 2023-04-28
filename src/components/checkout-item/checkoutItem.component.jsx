import './checkoutItem.styles.scss'
import { useContext } from 'react'
import { CardContext } from '../../context/card.context'

function CheckoutItem({cardItem}) {
    const {name,imageUrl,price,quantity} = cardItem
    const {clearItemFromCard,addItemToCard,removeItemFromCard}= useContext(CardContext)
    const clearItemHandler = () => clearItemFromCard(cardItem)
    const addItemHandler = ()=> addItemToCard(cardItem)
    const removeItemHandler = ()=> removeItemFromCard(cardItem)
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem
