import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "../../pokemons/interfaces/simple-pokemons";

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const getFavorites = (): PokemonsState => {
    const favorites = localStorage.getItem("favorites-pokemons");
    return favorites ? JSON.parse(favorites) : {};
  };
  

const initialState: PokemonsState = {
    ...getFavorites(),
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (state[id]) {
        delete state[id];
      } else {
        state[id] = pokemon;
      }

      localStorage.setItem("favorites-pokemons", JSON.stringify(state));

    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
