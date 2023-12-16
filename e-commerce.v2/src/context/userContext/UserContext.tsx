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

// Utilizando uma abordagem mais genérica para remover campos sensíveis
type Without<T, K extends keyof T> = Omit<T, K>;

// Removendo a senha da interface User
type UserWithoutPassword = Without<User, "password">;

interface UserContextProps {
  user: UserWithoutPassword | null;
  loginUser: (userData: Partial<User>) => void; // Agora aceita um objeto parcial de User
  logoutUser: () => void;
}

// Create the context
export const UserContext = createContext<UserContextProps>({
  user: null,
  loginUser: () => {},
  logoutUser: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserWithoutPassword | null>(null);

  const loginUser = (userData: Without<User, "password">) => {
    setUser(userData);
  };

  // Function to log out the user
  const logoutUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
