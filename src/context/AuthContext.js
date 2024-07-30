"use client";

import React, { useState, useEffect, useContext, createContext } from "react";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/firebase/config";

//* Create AuthContext
const AuthContext = createContext();

//* Create useAuthContext hook
export const useAuthContext = () => useContext(AuthContext);

//* Create AuthContextProvider component to wrap around the app in layout.js
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  //* Listen for changes in the user's sign-in state
  useEffect(() => {
    //* onAuthStateChanged returns an unsubscribe function that can be called
    //* to unsubscribe the listener from the user's sign-in state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? (
        <div>
          Loading . . .
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>







  );
};
