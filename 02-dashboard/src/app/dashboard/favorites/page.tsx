import FavoritePokemons from "@/pokemons/components/FavoritePokemons";

export const metadata = {
    title: "Pokemones Favoritos",
    descripcion: "Tus pokemones favoritos",
}

export default async function PokemonsPage() {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-4xl">Listado de Pokemons <span className="text-blue-600">Favoritos</span></span>
            <FavoritePokemons />
        </div>
    );
}