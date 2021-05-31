import { createContext } from "react";

export interface User {
  loading?: boolean;
  user?: {
    name: string;
  };
  theme?: "dark" | "light";
  leftMenuExpanded?: boolean;
}

export interface UserContextData {
  user: User;
  setUser: (user: User) => void;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);
