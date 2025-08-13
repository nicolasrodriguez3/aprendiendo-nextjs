"use client"
import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"
import { useState } from "react"
import { IoHeartOutline } from 'react-icons/io5';

export const FavoritePokemons = () => {
    const favoritePokemons = useAppSelector((state) => Object.values(state.pokemons))
    const [pokemons, setPokemons] = useState(favoritePokemons)

    if (!favoritePokemons.length) {
        return <NoFavorites />
    }
    return (
        <PokemonGrid pokemons={pokemons} />
    )
}

const NoFavorites = () => (
    <div className="flex flex-col gap-2 text-red-600 items-center justify-center">
        <IoHeartOutline size={50} />
        <p>No hay pokemones favoritos</p>
    </div>
)
