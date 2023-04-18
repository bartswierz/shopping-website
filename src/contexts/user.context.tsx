import { createContext, useState, useEffect, ReactNode } from "react";

interface UserContextValue {
  currentUser: null;
  setCurrentUser: (user: null) => void;
}

export const UserContext = createContext<UserContextValue>({
  currentUser: null,
  setCurrentUser: (user: null) => null,
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState(null);

  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
