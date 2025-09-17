"use client";
import clsx from "clsx";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { useUIStore } from "@/store";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {isSideMenuOpen && (
        <>
          {/* Background blur */}
          <button
            type="button"
            onClick={() => closeSideMenu()}
            className="fade-in fixed inset-0 w-screen h-screen z-10 backdrop-blur-xs bg-black/30"
          />
        </>
      )}

      {/* Side menu */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen dark:bg-gray-950 bg-white z-20 shadow-2xl transform transition-all duration-300 ease-in-out",
          { "translate-x-full": !isSideMenuOpen },
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute right-5 top-5 cursor-pointer"
          onClick={() => closeSideMenu()}
        />

        {/* Search */}
        <div className="relative mt-14">
          <IoSearchOutline
            size={20}
            className="absolute top-2 left-2 dark:text-black"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-50 dark:bg-gray-200 dark:text-black rounded-xs pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menu */}
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-sm transition-all gap-3 text-lg"
        >
          <IoPersonOutline size={30} />
          <span>Perfil</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-sm transition-all gap-3 text-lg"
        >
          <IoTicketOutline size={30} />
          <span>Órdenes</span>
        </Link>

        <Link
          href="/auth/login"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-sm transition-all gap-3 text-lg"
        >
          <IoLogInOutline size={30} />
          <span>Ingresar</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-sm transition-all gap-3 text-lg"
        >
          <IoLogOutOutline size={30} />
          <span>Cerrar sesión</span>
        </Link>

        {/* Separator */}
        <div className="w-full h-px bg-gray-200 my-10" />

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-sm transition-all gap-3 text-lg"
        >
          <IoShirtOutline size={30} />
          <span>Productos</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-sm transition-all gap-3 text-lg"
        >
          <IoTicketOutline size={30} />
          <span>Órdenes</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-sm transition-all gap-3 text-lg"
        >
          <IoPeopleOutline size={30} />
          <span>Usuarios</span>
        </Link>
      </nav>
    </div>
  );
};
