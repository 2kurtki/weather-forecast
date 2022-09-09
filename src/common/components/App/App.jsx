import { Overview } from "../Overview";
import { WeeklyNavigationBar } from "../WeekNavigation";
import { fetchForecastData } from "Features/forecastDataSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.scss";

function App() {
	const dispatch = useDispatch();
	const unitGroup = useSelector((state) => state.unitGroup.value);
	const location = useSelector((state) => state.location.value);
	const { data } = useSelector((state) => state.forecastData);

	useEffect(() => {
		dispatch(fetchForecastData({ unitGroup, location }));
	}, [unitGroup, location, dispatch]);

	return (
		<div styleName="app">
			{data !== null && (
				<div styleName="container">
					<Overview />
					<WeeklyNavigationBar />
				</div>
			)}
		</div>
	);
}

export { App };
