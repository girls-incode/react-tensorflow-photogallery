import { createContext } from 'react';

export const initUser = { isLoggedin: false, user: {} };
export const AppContext = createContext(initUser);
