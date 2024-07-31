"use client";

import React, { useEffect } from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const AuthGuard = ({ children }) => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    console.log("Estoy pasando por un guard xd")
    if (user === undefined) return; // Espera a que el estado de autenticación esté determinado

    if (user === null) {
      router.push('/'); // Redirige a la página de inicio si el usuario no está autenticado
    }
  }, [user, router]);

  if (user === undefined || user === null) return null; // No renderiza nada mientras se decide el estado de autenticación

  return <>{children}</>;
};

export default AuthGuard;
