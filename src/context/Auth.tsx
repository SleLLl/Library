import React, { createContext, FC } from 'react';

import { USER_KEY } from '../constans';
import useLocalStorage from '../utils/useLocalStorage';

export interface User {
  userName: string;
  birthdate: string;
  email: string;
  password: string;
  userImage: string;
  auth: boolean;
}

interface AuthContext {
  user: User;
  createUser: (us: User) => void;
  changeSetting: (us: {
    userName?: string;
    birthdate?: string;
    email?: string;
    userImage?: string;
  }) => void;
  changePassword: (pass: string) => void;
  logIn: (name: string, pass: string) => boolean;
  logOut: () => void;
}

export const AuthContext = createContext<AuthContext>({
  user: {
    userName: '',
    birthdate: '',
    email: '',
    password: '',
    userImage: '',
    auth: false,
  },
  createUser: () => null,
  changePassword: () => null,
  logIn: () => false,
  logOut: () => null,
  changeSetting: () => null,
});

const AuthContextProvider: FC = (props): JSX.Element => {
  const [user, setUser] = useLocalStorage<User>(USER_KEY, {
    userName: '',
    birthdate: '',
    email: '',
    password: '',
    userImage: '',
    auth: false,
  });

  const createUser = (us: User): void => {
    setUser(us);
  };

  const changePassword = (pass: string): void => {
    setUser((prevState) => ({ ...prevState, password: pass }));
  };

  const changeSetting = (us: {
    userName?: string;
    birthdate?: string;
    email?: string;
    userImage?: string;
  }): void => {
    setUser((prevState) => ({ ...prevState, ...us }));
  };

  const logIn = (name: string, pass: string): boolean => {
    if (name === user.userName && pass === user.password) {
      setUser((prevState) => {
        return {
          ...prevState,
          auth: true,
        };
      });
      return true;
    }
    return false;
  };

  const logOut = (): void => {
    setUser((prevState) => {
      return {
        ...prevState,
        auth: false,
      };
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        createUser,
        changePassword,
        logIn,
        logOut,
        changeSetting,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
