import { useReducer } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { DailyForecast } from "../DailyForecast";
import "./WeeklyNavigationBar.scss";
import { useLayoutEffect } from "react";

function reducer(swipePos, action) {
	const maxSwipePos = action.maxSwipePos;

	switch (action.type) {
		case "setPrevWeek":
			return swipePos !== 0 ? swipePos - 1 : swipePos;
		case "setNextWeek":
			return swipePos !== maxSwipePos ? swipePos + 1 : swipePos;
		case "resetSwipePos":
			return 0;
	}
}

function WeeklyNavigationBar() {
	const forecastData = useSelector((state) => state.forecastData.data);
	const isLaptop = useMediaQuery({ query: "(min-width: 768px)" });

	const [swipePos, dispatch] = useReducer(reducer, 0);
	const dayRange = isLaptop ? 5 : 4;
	const maxSwipePos = Math.floor(forecastData.days.length / dayRange) - 1;

	const dailyForecastList = forecastData.days.map((data, dayNum) => {
		return <DailyForecast dailyForecastData={data} dayNum={dayNum} key={data.datetime} />;
	});

	useLayoutEffect(() => {
		if (swipePos > maxSwipePos) {
			dispatch({ type: "resetSwipePos" });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [maxSwipePos]);

	return (
		<div styleName="container">
			<button
				styleName={"swipeButton"}
				onClick={() => dispatch({ type: "setPrevWeek", maxSwipePos: maxSwipePos })}>
				<FontAwesomeIcon icon={faCircleChevronLeft} />
			</button>
			<div styleName="dailyForecastList">
				{dailyForecastList.slice(dayRange * swipePos, dayRange * (swipePos + 1))}
			</div>
			<button
				styleName={"swipeButton"}
				onClick={() => dispatch({ type: "setNextWeek", maxSwipePos: maxSwipePos })}>
				<FontAwesomeIcon icon={faCircleChevronRight} />
			</button>
		</div>
	);
}

export { WeeklyNavigationBar };
