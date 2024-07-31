"use client";
// Llamado a nuestro contexto que maneja el estado de nuestro inicio de sesión
import { useAuthContext } from "@/context/AuthContext";


// Importamos nuestra cabecera
import NavbarGame from "@/components/NavbarGame";

export default function Page() {
  // Esto no crea una variable como tal sino que extrae de nuestro useAuthContext el "user"
  const { user } = useAuthContext();
  return (
    <>
      <NavbarGame user={user} />
      <h1 className="">
        Aqui solo van cosas de game
      </h1>
    </>
  );
}
