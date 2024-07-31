"use client";

import React, { useState, useEffect, useContext, createContext } from "react";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/firebase/config";
import Loading from "@/components/Loading";

//* Crear un AuthContext
const AuthContext = createContext();

//* Crear un useAuthContext hook
export const useAuthContext = () => useContext(AuthContext);

//* Crear context component AuthContextProvider para envolver la aplicación en el layout.js
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
        <Loading />
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
