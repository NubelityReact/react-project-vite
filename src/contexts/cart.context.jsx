/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// provider
// consumer
const Cart = createContext();

const initialState = {
  productWithQuantities: [],
  totalItemsInCart: 0,
  totalUniqueItems: 0,
  vat: 0,
  shipping: 0,
  total: 0,
  subtotal: 0,
};

export const useCart = () => {
  return useContext(Cart);
};

export function CartContext({ children }) {
  const [state, setState] = useState(initialState);

  const addProduct = ({ product, quantity }) => {
    let newArrayPayload = state.productWithQuantities;
    let newUniqueItems = state.totalUniqueItems;
    let newItems = state.totalItemsInCart;
    let unitPrice = product.price;
    // buscar si el producto ya está en el carrito de compras
    const productWithQuantity = state.productWithQuantities.find(
      (item) => item.product.id == product.id,
    );
    // si existe, solo modificar el parámetro quantity
    if (productWithQuantity) {
      const productIndex = state.productWithQuantities.findIndex(
        (item) => item.product.id == product.id,
      );
      newArrayPayload = [...state.productWithQuantities];
      newArrayPayload.splice(productIndex, 1, {
        ...productWithQuantity,
        quantity: productWithQuantity.quantity + quantity,
      });
      newItems += quantity;
    }
    // si no existe agregarlo al array del carrito
    else {
      newArrayPayload = [...state.productWithQuantities, { product, quantity }];
      // actualizar valor de items totales
      newItems += quantity;
      // actualizar valor de items únicos
      newUniqueItems += 1;
    }

    const newVat =
      newArrayPayload.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0,
      ) * 0.16;
    // agregar lógica para calcular el costo de envío

    const subtotal = state.subtotal + unitPrice * quantity;
    const total = subtotal + newVat + state.shipping;
    setState({
      productWithQuantities: newArrayPayload,
      shipping: state.shipping,
      vat: newVat,
      totalItemsInCart: newItems,
      totalUniqueItems: newUniqueItems,
      subtotal,
      total,
    });
  };

  const removeProduct = (id) => {
    const products = state.productWithQuantities;
    // buscar el producto
    let productInCart = products.find((item) => item.product.id === id);
    const index = products.findIndex((item) => item.product.id === id);

    if (productInCart) {
      const n = productInCart.quantity;
      if (n > 1) {
        productInCart.quantity -= 1;
      } else {
        productInCart = null;
      }

      const copy = [...products];
      copy.splice(index, 1, productInCart);

      const newVat =
        copy.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0,
        ) * 0.16;

      const subtotal = state.subtotal - (productInCart?.product?.price ?? 0);

      setState({
        productWithQuantities: copy,
        shipping: state.shipping,
        vat: newVat,
        totalItemsInCart: state.totalItemsInCart - 1,
        totalUniqueItems: copy.length,
        subtotal,
        total: subtotal + newVat + state.shipping,
      });
    }
  };

  const clearCart = () => {
    setState(initialState);
  };

  return (
    <Cart.Provider value={{ state, addProduct, removeProduct, clearCart }}>
      {children}
    </Cart.Provider>
  );
}
