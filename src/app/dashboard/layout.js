"use client";


// Llamado a nuestro contexto que maneja el estado de nuestro inicio de sesión
import { useAuthContext } from "@/context/AuthContext";

// Importamos nuestra cabecera
import Navbar from "@/components/Navbar";
import AuthGuard from "@/guard/AuthGuard";

export default function DashboardLayout({ children }) {

    // Esto no crea una variable como tal sino que extrae de nuestro useAuthContext el "user"
    const { user } = useAuthContext();

    return (
        <AuthGuard>
            <Navbar user={user} />
            {children}
        </AuthGuard>
    )
}