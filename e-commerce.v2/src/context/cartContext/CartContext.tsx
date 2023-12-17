"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
} from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Cart {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

interface CartContextData {
  cart: Cart | null;
  quantities: { [productId: number]: number };
  coupon: string | null;
  subtotal: number;
  discount: number;
  total: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  updateCart: (cart: Cart) => void;
  applyCoupon: (coupon: string) => void;
  setQuantity: (productId: number, quantity: number) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart | null>(null); // Keeps the state of the cart
  const [coupon, setCoupon] = useState<string | null>(null); // Keeps the state of the coupon
  const [quantities, setQuantities] = useState<{ [productId: number]: number }>(
    {}
  );

  const subtotal = cart
    ? cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : 0;
  const discount = coupon ? calculateDiscount(coupon, subtotal) : 0; // You need to implement the calculateDiscount function
  const total = subtotal - discount;

  const setQuantity = (productId: number, quantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const addToCart = (item: CartItem) => {
    if (cart) {
      // Check if the item already exists in the cart
      const existingItem = cart.items.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // If the item already exists, update its quantity
        const updatedItems = cart.items.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );

        setCart({ ...cart, items: updatedItems });
      } else {
        // If the item doesn't exist, add it to the cart
        setCart({ ...cart, items: [...cart.items, item] });
      }
    } else {
      // If the cart is empty, create a new cart with the item
      setCart({
        items: [...cart.items, item],
        totalQuantity: cart.totalQuantity + item.quantity,
        totalPrice: cart.totalPrice + item.price * item.quantity,
      });
    }
  };
  const applyCoupon = (couponCode: string) => {
    setCoupon(couponCode);
    calculateDiscount(couponCode, subtotal);

    if (couponCode === "DISCOUNT" || couponCode === "SUPERDISCOUNT") {
      return discount;
    } else {
      return 0;
    }
  };

  const removeFromCart = (itemId: number) => {
    if (cart) {
      // Find the index of the item to be removed
      const itemIndex = cart.items.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        // Create a new array without the item to be removed
        const updatedItems = [...cart.items];
        updatedItems.splice(itemIndex, 1);

        // Update the cart with the new items array
        const removedItem = cart.items[itemIndex];

        setCart({
          items: updatedItems,
          totalQuantity: cart.totalQuantity - removedItem.quantity,
          totalPrice:
            cart.totalPrice - removedItem.price * removedItem.quantity,
        });
      }
    }
  };

  const updateCart = (cartData: Cart) => {
    setCart(cartData);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        quantities,
        addToCart,
        removeFromCart,
        updateCart,
        setQuantity,
        coupon,
        applyCoupon,
        subtotal,
        discount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function calculateDiscount(couponCode: string, subtotal: number) {
  const coupon = couponCode.toUpperCase();
  let discount = 0;
  switch (coupon) {
    case "DISCOUNT":
      discount = subtotal * 0.1;
      break;
    case "SUPERDISCOUNT":
      discount = subtotal * 0.2;
      break;
    default:
      discount = 0;
      break;
  }

  return discount;
}
