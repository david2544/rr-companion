import React, { useEffect, useState } from 'react';
import app from '@utils/firebaseConfig';

export const AuthContext = React.createContext<any>({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
