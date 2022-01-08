import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { User } from "../components/types/api/user";

export type LoginUserContextType = {
  loginUser: loginUser | null;
  setLoginUser: Dispatch<SetStateAction<loginUser | null>>;
};
type loginUser = User & { isAdmin: boolean };

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<loginUser | null>(null);
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
