import React from 'react';
import { CartProvider } from './context/CartContext';
import NavigationApp from './navigation/Navigation';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
 <UserProvider>
    <CartProvider>
      <NavigationApp />
    </CartProvider>
 </UserProvider>
  );
}
