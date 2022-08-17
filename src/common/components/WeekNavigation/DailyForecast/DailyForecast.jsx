import DateDisplay from "../DateDisplay/DateDisplay.jsx";
import WeatherIcon from "../../WeatherIcon/WeatherIcon.jsx";
import { useSelector, useDispatch } from "react-redux";
import { changeDay } from "Features/selectedDaySlice";
import styles from "./DailyForecast.scss";
import { useTransition, animated } from "@react-spring/web";

function DailyForecast({ dailyForecastData, dayNum }) {
	const { temp, icon, datetime, conditions, humidity } = dailyForecastData;
	const dispatch = useDispatch();

	const selectedDayNum = useSelector((state) => state.selectedDay.number);
	const isDaySelected = dayNum === selectedDayNum;
	// const isDaySelected = false;

	const containerClassName = `${styles.container} ${isDaySelected ? styles.selected : ""}`;
	const dateClassName = `${styles.date} ${isDaySelected ? styles.selected : ""}`;

	const transition = useTransition(isDaySelected, {
		from: { opacity: 0, trail: 2000 },
		enter: { opacity: 1 },
		leave: { opacity: 0, immediate: true },
	});

	const handleClick = () => {
		dispatch(changeDay(dayNum));
		setTimeout(() => {
			// console.log("after: ", selectedDayNum);
		}, 1000);
	};

	return (
		<div className={containerClassName} onClick={handleClick}>
			<div className={styles.title}>
				<div className={dateClassName}>
					<DateDisplay datetime={datetime} showFullDate={isDaySelected} />
				</div>

				{/* {isDaySelected && (
					<div className={styles.conditions}>
						<p>{conditions}</p>
					</div>
				)} */}
				{transition(
					(style, item) =>
						item && (
							<animated.div className={styles.conditions} style={style}>
								<p>{conditions}</p>
							</animated.div>
						)
				)}
			</div>

			<div className={styles.content}>
				<div className={styles.iconWrapper}>
					<WeatherIcon iconName={icon} />
				</div>

				<div className={styles.indicators}>
					<div className={styles.temp}>
						<p>{Math.round(temp)}°</p>
					</div>

					{/* {transition(
						(style, item) =>
							item && (
								<animated.div className={styles.humidity} style={style}>
									<p>Humidity {Math.round(humidity)}%</p>
								</animated.div>
							)
					)} */}
				</div>
			</div>
		</div>
	);
}

export default DailyForecast;
