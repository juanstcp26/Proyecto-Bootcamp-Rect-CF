import { createSlice } from "@reduxjs/toolkit";

import apiCall from "../../hooks/apiCall";

const initialState = {
  isLoading: false,
  error: {},
  data: {},
};

const detailSlice = createSlice({
  name: "pokedata",
  initialState,
  reducers: {
    fetchPokemonStart(state) {
      state.isLoading = true;
    },
    fetchPokemonError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchPokemonComplete(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});

export const { fetchPokemonStart, fetchPokemonComplete, fetchPokemonError } =
  detailSlice.actions;

export const fetchPokemonDetail = (name) => async (dispatch) => {
  try {
    dispatch(fetchPokemonStart());
    const response = await apiCall(`pokemon/${name}`);
    dispatch(fetchPokemonComplete(response));
  } catch (error) {
    dispatch(fetchPokemonError(error));
  }
};

export const isLoadingPokedata = (state) => state.detailSlice.isLoading;
export const pokedataData = (state) => state.detailSlice.data;
export const pokedataError = (state) => state.detailSlice.error;

export default detailSlice.reducer;
