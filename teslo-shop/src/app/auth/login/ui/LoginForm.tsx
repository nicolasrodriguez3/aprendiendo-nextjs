"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import {
  IoArrowForwardOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { authenticate } from "@/actions";

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  console.log({ errorMessage, formAction, isPending });
  return (
    <form action={formAction} className="flex flex-col">
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5 text-gray-950"
        type="email"
        name="email"
      />

      <label htmlFor="password">Contraseña</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5 text-gray-950"
        type="password"
        name="password"
      />

      <input type="hidden" name="redirectTo" value={callbackUrl} />
      <button
        type="submit"
        className="btn-primary flex gap-2 items-center justify-center cursor-pointer disabled:opacity-80 group"
        disabled={isPending}
      >
        Ingresar{" "}
        <IoArrowForwardOutline
          size={20}
          className="group-hover:animate-bounce-forward"
        />
      </button>

      {/* Error message */}
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <>
            <IoInformationCircleOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>

      {/* divisor line */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary text-center">
        Crear una nueva cuenta
      </Link>
    </form>
  );
};
