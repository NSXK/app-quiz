"use client";

import AuthGuard from "@/guard/AuthGuard";

export default function GameLayout({ children }) {

    return (
        <AuthGuard>
            {children}
        </AuthGuard>
    )
}