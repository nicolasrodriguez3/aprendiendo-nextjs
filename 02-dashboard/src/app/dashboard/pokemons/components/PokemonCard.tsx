import type { SimplePokemon } from "@/pokemons"
import Image from "next/image"
import Link from "next/link"
import { IoHeartOutline } from "react-icons/io5"

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
    const { id, name } = pokemon

    return (
        <div className="max-w-sm w-60 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5 relative">
            <button className="text-red-600 hover:scale-110 active:scale-95 transition-transform duration-150 absolute top-2 right-2">
                <IoHeartOutline size={24} />
            </button>
            <Link href={`/dashboard/pokemons/${id}`} className="flex items-center justify-center w-full h-32 mb-2">
                <Image className="rounded-t-lg"
                    key={id}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width={100}
                    height={100}
                    alt={`Imagen del Pokemon ${name}`}
                    priority={false} />
            </Link>
            <div>
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">{name}</h5>
                </a>
                <Link href={`/dashboard/pokemon/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Ver info
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

