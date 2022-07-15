import { createSlice } from "@reduxjs/toolkit";

import apiCall from "../../hooks/apiCall";

const initialState = {
  isLoading: false,
  data: [],
  error: {},
};

const listSlice = createSlice({
  name: "pokelist",
  initialState,
  reducers: {
    fetchPokemonsStart(state) {
      state.isLoading = true;
    },
    fetchPokemonsError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchPokemonsComplete(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});

export const {
  fetchPokemonsStart,
  fetchPokemonsError,
  fetchPokemonsComplete
} = listSlice.actions;

export const fetchPokemons = (text) => async (dispatch) => {
  try {
    dispatch(fetchPokemonsStart());
    const response = await apiCall(`pokemon?limit=${text}`);
    dispatch(fetchPokemonsComplete(response?.results));
  } catch (error) {
    dispatch(fetchPokemonsError(error));
  }
};

export const isLoadingPokemons = (state) => state.listSlice.isLoading;
export const pokemonsData = (state) => state.listSlice.data;
export const pokemonsError = (state) => state.listSlice.error;

export default listSlice.reducer;
