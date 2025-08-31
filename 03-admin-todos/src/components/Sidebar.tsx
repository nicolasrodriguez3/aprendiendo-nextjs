import Link from 'next/link';
import Image from "next/image";
import { IoBasketOutline, IoCalendarOutline, IoCheckboxOutline, IoListOutline, IoNutritionOutline, IoPersonOutline } from "react-icons/io5"
import { CiLogout } from "react-icons/ci";

import { SidebarItem } from './SidebarItem';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

import logo from "@/../public/images/logo.webp"

const sidebarItems = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <IoCalendarOutline size={30} />
    },
    {
        title: "Rest Todos",
        path: "/dashboard/rest-todos",
        icon: <IoCheckboxOutline size={30} />

    },
    {
        title: "Server Actions",
        path: "/dashboard/server-todos",
        icon: <IoListOutline size={30} />

    },
    {
        title: "Cookies",
        path: "/dashboard/cookies",
        icon: <IoNutritionOutline size={30} />
    },
    {
        title: "Productos",
        path: "/dashboard/products",
        icon: <IoBasketOutline size={30} />
    },
    {
        title: "Mi perfil",
        path: "/dashboard/profile",
        icon: <IoPersonOutline size={30} />
    },
]

export const Sidebar = async () => {
    const session = await auth()
    if (!session?.user) {
        redirect("api/auth/signin")
    }

    const { name, image } = session?.user

    return (
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="-mx-6 px-6 py-4">
                    <Link href="#" title="home" className="flex items-center gap-2 text-xl">
                        <Image src={logo} className="w-16" alt="tailus logo" width={64} height={64} />
                        Logo
                    </Link>
                </div>
                <div className="mt-4 text-center">
                    {image &&
                        <Image
                            src={image}
                            width={120}
                            height={120}
                            alt="User avatar"
                            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                            priority
                        />}
                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{name}</h5>
                    <span className="hidden text-gray-400 lg:block">Admin</span>
                </div>

                <ul className="space-y-2 tracking-wide mt-8 overflow-y-auto min-h-32 flex-1">
                    {
                        sidebarItems.map(item => (
                            <SidebarItem key={item.title} {...item} />
                        )
                        )
                    }
                </ul>
            </div>

            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                    <CiLogout />
                    <span className="group-hover:text-gray-700">Logout</span>
                </button>
            </div>
        </aside>
    )
}