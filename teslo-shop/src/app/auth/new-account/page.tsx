import Link from "next/link";
import { titleFont } from "@/config/fonts";

export default function () {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Nueva cuenta</h1>

      <div className="flex flex-col">
        <label htmlFor="name">Nombre completo</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          id="name"
          type="text"
        />

        <label htmlFor="email">Correo electrónico</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          id="email"
          type="email"
        />

        <label htmlFor="password">Contraseña</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          id="password"
          type="password"
        />

        <button type="button" className="btn-primary mt-7">
          Registrarse
        </button>

        {/* divisor line */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <div>
          <span className="mr-2">¿Ya tenes una cuenta? </span>
          <Link href="/auth/login" className="btn-secondary text-center">
            Ingresar
          </Link>
        </div>
      </div>
    </div>
  );
}
