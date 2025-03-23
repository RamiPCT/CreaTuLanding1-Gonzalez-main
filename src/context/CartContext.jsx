/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      setCart([...cart, { ...product, quantity: product.quantity }]);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: Math.min(item.quantity + product.quantity, item.stock),
            }
          : item
      );
      setCart(updatedCart);
    }
  };

  const handleDelete = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? {
            ...item,
            quantity: item.quantity - 1, // Reducimos la cantidad en lugar de eliminar
          }
        : item
    );

    const filteredCart = updatedCart.filter((item) => item.quantity > 0);
    setCart(filteredCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, handleDelete }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
