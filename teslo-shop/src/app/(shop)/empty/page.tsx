import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function () {
  return (
    <div className="flex justify-center items-center gap-4 h-[800px]">
      <IoCartOutline size={60} />

      <div className="flex flex-col items-center">
        <h1>Tu carrito está vacío</h1>
        <Link href="/" className="text-blue-500 mt-2 text-3xl">
          Ir a comprar
        </Link>
      </div>
    </div>
  );
}
