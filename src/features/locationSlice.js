import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
	name: "location",
	initialState: {
		value: "Moscow",
	},
	reducers: {
		changeLocation(state, action) {
			state.value = action.payload;
		},
	},
});

export const locationReducer = locationSlice.reducer;
export const { changeLocation } = locationSlice.actions;
