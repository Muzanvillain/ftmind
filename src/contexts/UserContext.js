import React, { createContext, useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user] = useAuthState(auth);
  const [userProfile, setUserProfile] = useState(user);

  useEffect(() => {
    setUserProfile(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};