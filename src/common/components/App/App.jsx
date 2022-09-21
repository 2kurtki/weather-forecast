import { Overview } from "../Overview";
import { WeeklyNavigationBar } from "../WeekNavigation";
import { fetchForecastData, fetchLocation } from "Features/";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.scss";

function App() {
	const dispatch = useDispatch();
	const forecastData = useSelector((state) => state.forecastData);
	const location = useSelector((state) => state.location);
	const unitGroup = useSelector((state) => state.unitGroup.value);

	useEffect(() => {
		dispatch(fetchLocation());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (location.status !== "idle" && location.status !== "loading") {
			dispatch(fetchForecastData({ unitGroup, location: location.value }));
		}
	}, [location, unitGroup, dispatch]);

	return (
		<div styleName="app">
			{forecastData.data !== null && (
				<div styleName="container">
					<Overview />
					<WeeklyNavigationBar />
				</div>
			)}
		</div>
	);
}

export { App };
