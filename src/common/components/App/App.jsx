import Overview from "../Overview/Overview.jsx";
import WeeklySummaryBar from "../WeekNavigation/WeeklyNavigationBar/WeeklySummaryBar.jsx";
import "./App.scss";
import { fetchForecastData } from "Features/forecastDataSlice.js";
import { selectUnitGroup } from "Features/unitGroupSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
	const dispatch = useDispatch();
	const unitGroup = useSelector(selectUnitGroup);
	const { data, status } = useSelector((state) => state.forecastData);

	useEffect(() => {
		dispatch(fetchForecastData(unitGroup));
	}, [unitGroup, dispatch]);

	return (
		<div styleName="app">
			{status !== "failed" && data !== null && (
				<div styleName="container">
					<Overview />
					<WeeklySummaryBar />
				</div>
			)}
		</div>
	);
}

export default App;
