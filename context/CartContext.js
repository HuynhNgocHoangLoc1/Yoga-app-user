import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [purchasedClasses, setPurchasedClasses] = useState([]);

  const addToCart = (classDetails) => {
    setCartItems((prevItems) => [...prevItems, classDetails]);
  };


  const purchaseClass = () => {
    setPurchasedClasses((prevClasses) => [...prevClasses, ...cartItems]);
    setCartItems([]); 
  };

  return (
    <CartContext.Provider value={{ cartItems, purchasedClasses, addToCart, purchaseClass }}>
      {children}
    </CartContext.Provider>
  );
};
