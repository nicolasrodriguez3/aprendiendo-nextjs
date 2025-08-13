import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "../../pokemons/interfaces/simple-pokemons";

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

const getFavorites = (): PokemonsState => {
  // No es conveniente realizar esta validacion ya que no va a coincidir lo generado
  // en el servidor con lo generado en el cliente
  // if (typeof localStorage === undefined) return {};

  const favorites = localStorage.getItem("favorites-pokemons");
  return favorites ? JSON.parse(favorites) : {favorites: {}};
};

const initialState: PokemonsState = {
  // ...getFavorites(),
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }> ) {
      state.favorites = action.payload;
    },
  
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }

      localStorage.setItem("favorites-pokemons", JSON.stringify(state.favorites));
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
