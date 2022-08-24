import { Overview } from "../Overview";
import { WeeklyNavigationBar } from "../WeekNavigation";
import { fetchForecastData } from "Features/forecastDataSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.scss";

function App() {
	const dispatch = useDispatch();
	const unitGroup = useSelector((state) => state.unitGroup.value);
	const { data, status } = useSelector((state) => state.forecastData);

	useEffect(() => {
		dispatch(fetchForecastData(unitGroup));
	}, [unitGroup, dispatch]);

	return (
		<div styleName="app">
			{status !== "failed" && data !== null && (
				<div styleName="container">
					<Overview />
					<WeeklyNavigationBar />
				</div>
			)}
		</div>
	);
}

export { App };
