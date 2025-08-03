import Image from "next/image"
import { IoBrowsersOutline, IoCalculatorOutline, IoFootball, IoLogoReact } from "react-icons/io5"
import { SidebarMenuItem } from "./SidebarMenuItem"

const menuItems = [
    {
        path: "/dashboard/main",
        icon: <IoBrowsersOutline size={40} />,
        title: "Dashboard",
        subTitle: "Dashboard",
    },
    {
        path: "/dashboard/counter",
        icon: <IoCalculatorOutline size={40} />,
        title: "Contador",
        subTitle: "Estado local",
    },
    {
        path: "/dashboard/pokemons",
        icon: <IoFootball size={40} />,
        title: "Pokemons",
        subTitle: "Estáticos",
    }

]

export const Sidebar = () => {
    return (
        <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-96 left-0">
            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact size={40} className="mr-2" />
                    Dash<span className="text-blue-500">board</span>.</h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" alt=""
                            width={50}
                            height={50} />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Nico
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full">
                {
                    menuItems.map((item) => {
                        return (
                            <SidebarMenuItem key={item.path} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}