import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LocationError } from "./errors";

export const fetchForecastData = createAsyncThunk(
	"forecastData/fetchForecastData",
	async ({ unitGroup, location }, { rejectWithValue }) => {
		const url = new URL(
			`/VisualCrossingWebServices/rest/services/timeline/${location}`,
			"https://weather.visualcrossing.com"
		);

		const params = {
			unitGroup: unitGroup,
			iconSet: "icons2",
			key: process.env.WEATHER_API_KEY,
		};

		for (let prop in params) {
			url.searchParams.append(prop, params[prop]);
		}

		try {
			const response = await fetch(url);

			if (response.ok) {
				const data = await response.json();
				return data;
			}

			switch (response.status) {
				case 400: {
					const responseText = await response.text();

					if (responseText.startsWith("Invalid location found")) {
						throw new LocationError("Invalid location error");
					} else {
						throw new Error(`HTTP error: The status is ${response.status}`);
					}
				}
				default: {
					throw new Error(`HTTP error: The status is ${response.status}`);
				}
			}
		} catch (err) {
			return rejectWithValue({ name: err.name, message: err.message });
		}
	}
);

const forecastDataSlice = createSlice({
	name: "forecastData",
	initialState: {
		data: null,
		status: "idle",
		error: {
			name: null,
			message: null,
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchForecastData.pending, (state) => {
				state.status = "loading";
				state.error = {
					name: null,
					message: null,
				};
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
