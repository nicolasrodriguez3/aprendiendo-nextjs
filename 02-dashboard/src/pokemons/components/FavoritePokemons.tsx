"use client"
import { useState } from "react";
import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { IoHeartOutline } from "react-icons/io5";


export default function FavoritePokemons() {
    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons))
    const [pokemons, setPokemons] = useState(favoritePokemons)

    return (
        <>
            {pokemons.length
                ? <PokemonGrid pokemons={pokemons} />
                : <NoFavorites />}
        </>
    );
}


export const NoFavorites = () => {
    return (
        <div className="w-full text-red-600 flex flex-col items-center justify-center gap-2">
            <IoHeartOutline size={60} />
            <p>No hay favoritos</p>
        </div>
    )
}