import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchForecastData = createAsyncThunk(
	"forecastData/fetchForecastData",
	async (unitGroup, { rejectWithValue }) => {
		const url = new URL(
			"/VisualCrossingWebServices/rest/services/timeline/Moscow",
			"https://weather.visualcrossing.com"
		);

		const params = {
			unitGroup: unitGroup,
			iconSet: "icons2",
			key: process.env.API_KEY,
		};

		for (let prop in params) {
			url.searchParams.append(prop, params[prop]);
		}

		try {
			const response = await fetch(url);

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

export const forecastDataReducer = forecastDataSlice.reducer;
