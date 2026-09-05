import React, { createContext, useState } from 'react'
import { getLocalStrorage, setLocalStrorage } from '../utils/LocalStorage';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(() => {
    setLocalStrorage();
    return getLocalStrorage();
  });

  const [loggedInUser, setLoggedInUser] = useState(() => {
    const savedUser = localStorage.getItem('loggedInUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });
 
  return (
    <AuthContext.Provider value={{ ...userData, setUserData, loggedInUser, setLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
