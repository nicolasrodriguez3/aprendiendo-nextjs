"use client"
import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"
import { useEffect, useState } from "react"
import { IoHeartOutline } from 'react-icons/io5';

export const FavoritePokemons = () => {
    const favoritePokemons = useAppSelector((state) => Object.values(state.pokemons.favorites))
    // const [pokemons, setPokemons] = useState(favoritePokemons)

    // useEffect(() => {
    //     setPokemons(favoritePokemons)
    // }, [favoritePokemons])


    if (!favoritePokemons.length) {
        return <NoFavorites />
    }
    return (
        <PokemonGrid pokemons={favoritePokemons} />
    )
}

const NoFavorites = () => (
    <div className="flex flex-col gap-2 text-red-600 items-center justify-center">
        <IoHeartOutline size={50} />
        <p>No hay pokemones favoritos</p>
    </div>
)
