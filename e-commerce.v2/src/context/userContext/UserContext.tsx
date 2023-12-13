import React, { createContext, useState, FC, ReactNode } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  sendAddress: {
    street: string;
    district: string;
    city: string;
    state: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

interface Cart {
  id: number;
  userId: number;
  products: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
}

interface PurchaseHistory {}

interface UserContextProps {
  user: User | null;
  cart: Cart | null;
  loginUser: (user: User) => void;
  logoutUser: () => void;
  updateCart: (cart: Cart) => void;
}

// Create the context
export const UserContext = createContext<UserContextProps>({
  user: null,
  cart: null,
  loginUser: () => {},
  logoutUser: () => {},
  updateCart: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null); // Keeps the state of the user
  const [cart, setCart] = useState<Cart | null>(null); // Keeps the state of the cart

  // Function to log in the user
  const loginUser = (userData: User) => {
    setUser(userData);

    console.log(userData);
  };

  // Function to log out the user
  const logoutUser = () => {
    setUser(null);
    setCart(null);
  };

  const updateCart = (cartData: Cart) => {
    setCart(cartData);
  };

  return (
    <UserContext.Provider
      value={{ user, cart, loginUser, logoutUser, updateCart }}
    >
      {children}
    </UserContext.Provider>
  );
};
