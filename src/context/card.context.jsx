import { createContext, useState, useEffect } from "react";

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

const removeCardItem = (cardItems, cardItemToRemove) => {
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === cardItemToRemove.id
  );

  if (existingCardItem.quantity === 1) {
    return cardItems.filter((cardItem) => cardItem.id !== cardItemToRemove.id);
  }

  return cardItems.map((cardItem) =>
    cardItem.id === cardItemToRemove.id
      ? { ...cardItem, quantity: cardItem.quantity - 1 }
      : cardItem
  );
};

const clearCardItem = (cardItems, cardItemToClear) => {
  return cardItems.filter((cardItem) => cardItem.id !== cardItemToClear.id);
};

export const CardContext = createContext({
  isCardOpen: false,
  setIsCardOpen: () => {},
  cardItems: [],
  addItemToCard: () => {},
  removeItemFromCard: () => {},
  clearItemFromCard: () => {},
  cardCount: 0,
  cardTotal: 0,
});

export const CardProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardItems, setCardItems] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [cardTotal, setCardTotal] = useState(0);

  //UseEffect to sum items in the bag of the header
  useEffect(() => {
    const newCardCount = cardItems.reduce(
      (total, cardItem) => total + cardItem.quantity,
      0
    );
    setCardCount(newCardCount);
  }, [cardItems]);

  /// useEffect to sum total price in the checkout card
  useEffect(() => {
    const newCardTotal = cardItems.reduce(
      (total, cardItem) => total + cardItem.price * cardItem.quantity,
      0
    );
    setCardTotal(newCardTotal);
  }, [cardItems]);

  const addItemToCard = (productToAdd) => {
    setCardItems(addCardItem(cardItems, productToAdd));
  };

  const removeItemFromCard = (cardItemToRemove) => {
    setCardItems(removeCardItem(cardItems, cardItemToRemove));
  };

  const clearItemFromCard = (cardItemToClear) => {
    setCardItems(clearCardItem(cardItems, cardItemToClear));
  };

  const value = {
    isCardOpen,
    setIsCardOpen,
    addItemToCard,
    cardItems,
    cardCount,
    removeItemFromCard,
    clearItemFromCard,
    cardTotal
  };
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
