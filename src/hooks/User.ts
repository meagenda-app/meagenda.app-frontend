import { useContext } from "react";
import { UserContext, UserContextData } from "../contexts/User";

export const useUser = (): UserContextData => {
  return useContext(UserContext);
};
