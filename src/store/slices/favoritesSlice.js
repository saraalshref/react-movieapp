import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            const existing = state.find(card => card.id === action.payload.id);
            if (!existing) {
                state.push(action.payload);
            }
        },
        removeFavorite: (state, action) => {
            return state.filter(card => card.id !== action.payload.id);
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
