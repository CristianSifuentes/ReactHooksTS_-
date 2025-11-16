import {
  type PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';

import { users, type User } from '../data/user-mock.data';

// interface UserContextProps {
//   children: React.ReactNode;
// }
// A context is a way to share data between components without passing props down manually at every level.
// Context is designed to share data that can be considered “global” for a tree of React components,
// such as the authenticated user, theme, or preferred language.
// We create the context with the createContext function
// and we define the shape of the context with an interface
// we create a provider component that will wrap our app and provide the context to all its children
// we define the state and methods that will be available in the context
type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
  // state
  authStatus: AuthStatus;
  user: User | null;
  isAuthenticated: boolean;

  // Methods
  login: (userId: number) => boolean;
  logout: () => void;
}

// create the context
// we use a type assertion to tell TypeScript that the context will have the shape of UserContextProps  
// even if we initialize it with an empty object
// this is safe because we will always use the provider to wrap our app
// and provide the context values
export const UserContext = createContext({} as UserContextProps);

// HOC
// create a space whre we will provide the context to all its children
// funcions and state that will be available in the context
// anll children will have access to the context
// we use the useState hook to manage the state of the context
// we use the useEffect hook to initialize the context
// we check if there is a user in localStorage and set the state accordingly
// we define the login and logout methods that will update the state
// and also update the localStorage

// higher order component, recibe props with children

// Api USe
export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    if (!user) {
      console.log(`User not found ${userId}`);
      setUser(null);
      setAuthStatus('not-authenticated');
      return false;
    }

    setUser(user);
    setAuthStatus('authenticated');
    localStorage.setItem('userId', userId.toString());
    return true;
  };

  const handleLogout = () => {
    console.log('logout');
    setAuthStatus('not-authenticated');
    setUser(null);
    localStorage.removeItem('userId');
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      handleLogin(+storedUserId);
      return;
    }

    handleLogout();
  }, []);

  return (
    <UserContext
      value={{
        authStatus: authStatus,
        isAuthenticated: authStatus === 'authenticated',
        user: user,

        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
