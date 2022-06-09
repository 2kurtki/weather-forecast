import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchForecastData = createAsyncThunk(
	"forecastData/fetchForecastData",
	async (unitGroup, { rejectWithValue }) => {
		const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Moscow?unitGroup=${unitGroup}&iconSet=icons2&key=${process.env.API_KEY}`;

		try {
			const response = await fetch(API_URL);

			if (!response.ok) {
				throw new Error(`HTTP error: The status is ${response.status}`);
			}

			const data = await response.json();
			return data;
		} catch (err) {
			return rejectWithValue(err.message);
		}
	}
);

const forecastDataSlice = createSlice({
	name: "forecastData",
	initialState: {
		data: null,
		status: "idle",
		error: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchForecastData.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchForecastData.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchForecastData.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export default forecastDataSlice.reducer;
