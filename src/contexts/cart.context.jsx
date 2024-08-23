/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// provider
// consumer
const Cart = createContext();

// const initialObj = {
//     quantity: 0,
//     product: {}
// }

export const useCart = () => {
  return useContext(Cart);
};

export function CartContext({ children }) {
  const [state, setState] = useState({
    productWithQuantities: [],
    totalItemsInCart: 0,
    totalUniqueItems: 0,
    vat: 0,
    shipping: 0,
  });

  const addProduct = ({ product, quantity }) => {
    const value = (p) => ({
      ...p,
      productWithQuantities: [
        ...p.productWithQuantities,
        { product, quantity },
      ],
    });
    setState(value);
  };

  const removeProduct = (id) => {
    const products = state.productWithQuantities;
    // buscar el producto
    let productInCart = products.find((item) => item.id === id);
    const index = products.findIndex((item) => item.id === id);

    if (productInCart) {
      const n = productInCart.quantity;
      if (n > 1) {
        productInCart.quantity -= 1;
      } else {
        productInCart = null;
      }

      const copy = [...products];
      copy.splice(index, 1, productInCart);
      // setProducts(copy)
    }
  };

  return (
    <Cart.Provider value={{ state, addProduct, removeProduct }}>
      {children}
    </Cart.Provider>
  );
}
