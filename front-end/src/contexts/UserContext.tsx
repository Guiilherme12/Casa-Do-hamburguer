import { createContext, useState, type ReactNode } from "react";
import type { UserContextType } from "../types/User";
export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  // é um componente que serve para colocar outros componentes dentro de si
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
