"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { IoLogInOutline, IoLogOutOutline, IoShieldOutline } from "react-icons/io5"

const baseClass = "px-4 py-3 flex-1 flex items-center space-x-4 rounded-md text-gray-600 hover:text-gray-800 bg-gradient-to-r hover:from-gray-500/30 hover:to-gray-400/30 cursor-pointer"

export const LogoutButton = () => {
    const { status } = useSession()

    if (status === "loading") {
        return (
            <button className={baseClass}>
                <IoShieldOutline />
                <span>Cargando...</span>
            </button>
        )
    }

    if (status === "unauthenticated") {
        return (
            <button onClick={() => signIn()}
                className={baseClass}>
                <IoLogInOutline />
                <span>Ingresar</span>
            </button>
        )
    }

    return (
        <button onClick={() => signOut()}
            className={baseClass}>
            <IoLogOutOutline />
            <span>Cerrar sesión</span>
        </button>
    )
}