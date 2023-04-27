import { createContext, useState,useEffect } from "react";

const addCardItem = (cardItems, productToAdd) => {
  // case for existing in the card item // find returns true/false
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === productToAdd.id
  );
  //if found - increment quantity
  if (existingCardItem) {
    return cardItems.map((cardItem) =>
      cardItem.id === productToAdd.id
        ? { ...cardItem, quantity: cardItem.quantity + 1 }
        : cardItem
    );
  }

  ///case for a new product
  return [...cardItems, { ...productToAdd, quantity: 1 }];
};

export const CardContext = createContext({
  isCardOpen: false,
  setIsCardOpen: () => {},
  cardItems: [],
  addItemToCard: () => {},
  cardCount:0
});

export const CardProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardItems, setCardItems] = useState([]);
  const [cardCount,setCardCount] = useState(0)


useEffect(() => {
  const newCardCount = cardItems.reduce(
    (total, cardItem) => total + cardItem.quantity,
    0
  );
  setCardCount(newCardCount);
}, [cardItems]);

  const addItemToCard = (productToAdd) => {
    setCardItems(addCardItem(cardItems, productToAdd));
  };

  const value = { isCardOpen, setIsCardOpen,addItemToCard,cardItems,cardCount};
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

