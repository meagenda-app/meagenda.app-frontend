import { createContext } from "react";

export interface User {
  token?: string;
  user?: {
    name: string;
  };
  theme?: "dark" | "light";
  leftMenuExpanded?: boolean;
  loading?: boolean;
}

export interface UserContextData {
  user: User;
  setUser: (user: User) => void;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);
