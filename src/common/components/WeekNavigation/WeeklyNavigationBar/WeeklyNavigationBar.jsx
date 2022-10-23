import { useReducer } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleChevronLeft,
	faCircleChevronRight,
	faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { DailyForecast } from "../DailyForecast";
import "./WeeklyNavigationBar.scss";
import { useLayoutEffect } from "react";

function reducer(swipePos, action) {
	switch (action.type) {
		case "setPrevWeek":
			return swipePos - 1;

		case "setNextWeek":
			return swipePos + 1;

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

	const disabledSwipeButton = (
		<button styleName="swipeButton disabled">
			<FontAwesomeIcon icon={faCircleXmark} />
		</button>
	);

	return (
		<div styleName="container">
			{swipePos === 0 ? (
				disabledSwipeButton
			) : (
				<button styleName="swipeButton" onClick={() => dispatch({ type: "setPrevWeek" })}>
					<FontAwesomeIcon icon={faCircleChevronLeft} />
				</button>
			)}
			<div styleName="dailyForecastList">
				{dailyForecastList.slice(dayRange * swipePos, dayRange * (swipePos + 1))}
			</div>
			{swipePos === maxSwipePos ? (
				disabledSwipeButton
			) : (
				<button styleName="swipeButton" onClick={() => dispatch({ type: "setNextWeek" })}>
					<FontAwesomeIcon icon={faCircleChevronRight} />
				</button>
			)}
		</div>
	);
}

export { WeeklyNavigationBar };
