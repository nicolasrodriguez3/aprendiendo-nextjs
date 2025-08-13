import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "../../pokemons/interfaces/simple-pokemons";

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const getInitialState = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites-pokemons") || "{}");
  return favorites
}

const initialState: PokemonsState = {
  ...getInitialState(),
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
        return;
      }

      state[id] = pokemon;
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
