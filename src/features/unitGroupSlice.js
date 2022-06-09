import { createSlice } from "@reduxjs/toolkit";

const unitGroupSlice = createSlice({
	name: "unitGroup",
	initialState: {
		value: "metric",
	},
	reducers: {
		changeUnits(state, action) {
			state.value = action.payload;
		},
	},
});

export const { changeUnits } = unitGroupSlice.actions;
export const selectUnitGroup = (state) => state.unitGroup.value;
export default unitGroupSlice.reducer;
