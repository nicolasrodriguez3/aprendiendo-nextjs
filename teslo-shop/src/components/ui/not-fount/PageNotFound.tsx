import Image from "next/image"
import Link from "next/link"

import { titleFont } from "@/config/fonts"

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full min-h-screen justify-center items-center">
      <div className="text-center p-5">
        <h2 className={`${titleFont.className} text-3xl md:text-6xl font-bold`}>
          404
        </h2>
        <p>
          Whoops! Página no encontrada
        </p>
        <p className="mt-2 text-gray-500">
          Ir al <Link href="/" className="underline">inicio</Link>
        </p>
      </div>
      <div>
        <Image src="/imgs/starman_750x750.png" alt="Page not found" width={400} height={400} />
      </div>
    </div>
  )
}