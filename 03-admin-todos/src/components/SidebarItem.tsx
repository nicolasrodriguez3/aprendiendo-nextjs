"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
    path: string
    title: string
    icon: React.ReactNode
}

export const SidebarItem = ({
    path,
    title,
    icon
}: Props) => {
    const isActive = usePathname() === path

    return (
        <li>
            <Link href={path} className={`
                relative px-4 py-3 flex items-center space-x-4 rounded-xl bg-gradient-to-r 
                ${!isActive && "hover:from-sky-600/70 hover:to-cyan-400/70"}
                ${isActive && "text-white from-sky-600 to-cyan-400"}`
            }>
                {icon}
                <span className="-mr-1 font-medium">{title}</span>
            </Link>
        </li>
    )
}