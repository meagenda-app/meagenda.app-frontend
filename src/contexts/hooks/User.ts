import { useContext } from "react";
import { UserContext, UserContextData } from "../UserContext";

export const useUser = (): UserContextData => {
  return useContext(UserContext);
};
