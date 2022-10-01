import { DailyForecast } from "../DailyForecast";
import { useReducer } from "react";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./WeeklyNavigationBar.scss";

function reducer(weekDays, action) {
	const firstDay = weekDays.at(0);
	const lastDay = weekDays.at(-1);

	switch (action) {
		case "setPrevWeek":
			return firstDay !== 0 ? weekDays.map((item) => item - weekDays.length) : weekDays;
		case "setNextWeek":
			return lastDay + weekDays.length <= 14
				? weekDays.map((item) => item + weekDays.length)
				: weekDays;
	}
}

function WeeklyNavigationBar() {
	const forecastData = useSelector((state) => state.forecastData.data);
	const [weekDays, dispatch] = useReducer(reducer, [0, 1, 2, 3, 4]);

	const dailyForecastList = weekDays.map((dayNum) => {
		const dailyForecastData = forecastData.days[dayNum];
		const dayId = dailyForecastData.datetime;

		return <DailyForecast dailyForecastData={dailyForecastData} dayNum={dayNum} key={dayId} />;
	});

	const isDisabledLeft = weekDays.at(0) !== 0 ? "" : " disabled";
	const isDisabledRight = weekDays.at(-1) + weekDays.length <= 14 ? "" : " disabled";

	return (
		<div styleName="wrapper">
			<button
				styleName={"swipeButton" + isDisabledLeft}
				onClick={() => dispatch("setPrevWeek")}>
				<FontAwesomeIcon icon={faCircleChevronLeft} />
			</button>
			{dailyForecastList}
			<button
				styleName={"swipeButton" + isDisabledRight}
				onClick={() => dispatch("setNextWeek")}>
				<FontAwesomeIcon icon={faCircleChevronRight} />
			</button>
		</div>
	);
}

export { WeeklyNavigationBar };
