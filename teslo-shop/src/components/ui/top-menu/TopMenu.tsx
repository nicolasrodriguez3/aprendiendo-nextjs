"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";
import { useCartStore } from "../../../store/cart/cart-store";

export const TopMenu = () => {
  const itemsInCart = useCartStore((store) => store.getTotalItems());
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className="flex justify-between items-center w-full px-5 py-2">
      {/* Logo */}
      <div>
        <Link href="/">
          <span
            className={`${titleFont.className} text-2xl font-bold cursor-pointer`}
          >
            Teslo
          </span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:flex gap-7">
        <Link href="/gender/men" className="text-lg hover:underline">
          Hombres
        </Link>
        <Link href="/gender/women" className="text-lg hover:underline">
          Mujeres
        </Link>
        <Link href="/gender/kid" className="text-lg hover:underline">
          Niños
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex gap-5 items-center">
        <Link href="/search">
          <IoSearchOutline size={25} className="cursor-pointer" />
        </Link>

        <Link href={(itemsInCart > 0 && loaded) ? "/cart" : "/empty"}>
          <div className="relative">
            {(loaded && itemsInCart > 0) && (
              <span className="absolute -top-2 -right-2 bg-blue-700 text-white rounded-full flex items-center justify-center text-sm px-2 font-bold fade-in">
                {itemsInCart}
              </span>
            )}
            <IoCartOutline size={25} className="cursor-pointer" />
          </div>
        </Link>

        <button
          className="p-2 rounded-md transition-all hover:bg-gray-100"
          type="button"
          onClick={() => openSideMenu()}
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
