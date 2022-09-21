import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchLocation = createAsyncThunk(
	"locationSlice/fetchLocation",
	async (_, { rejectWithValue }) => {
		const url = new URL(
			`/v1/?api_key=${process.env.LOC_API_KEY}`,
			"https://ipgeolocation.abstractapi.com"
		);

		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`HTTP error: The status is ${response.status}`);
			}

			const data = await response.json();
			return data.city;
		} catch (err) {
			return rejectWithValue({ name: err.name, message: err.message });
		}
	}
);

const locationSlice = createSlice({
	name: "location",
	initialState: {
		value: "London",
		status: "idle",
		error: {
			name: null,
			message: null,
		},
	},
	reducers: {
		changeLocation(state, action) {
			state.value = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLocation.pending, (state) => {
				state.status = "loading";
				state.error = {
					name: null,
					message: null,
				};
			})
			.addCase(fetchLocation.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.value = action.payload;
			})
			.addCase(fetchLocation.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export const locationReducer = locationSlice.reducer;
export const { changeLocation } = locationSlice.actions;
