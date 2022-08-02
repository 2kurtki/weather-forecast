import UnitsSwitcher from "../UnitsSwitcher/UnitsSwitcher.jsx";
import { useSelector } from "react-redux";
import { selectUnitGroup } from "../../../features/unitGroupSlice.js";
import styles from "./Overview.scss";
import WeatherIcon from "../WeatherIcon/WeatherIcon.jsx";

function Overview() {
	const unitGroup = useSelector(selectUnitGroup);
	const forecastData = useSelector((state) => state.forecastData.data);
	const selectedDayNum = useSelector((state) => state.selectedDay.number);

	const selectedDayData = forecastData.days[selectedDayNum];
	const { temp, humidity, windspeed, description, feelslike, icon } = selectedDayData;

	const speedUnits = unitGroup === "metric" ? "km/h" : "mi/h";

	return (
		<div className={styles.container}>
			<div className={styles.location}>
				<p>{forecastData.address}</p>
			</div>

			<div className={styles.mainInfo}>
				<div className={styles.iconWrapper}>
					<WeatherIcon iconName={icon} />
				</div>
				<div className={styles.temp}>
					<p>{Math.round(temp)}°</p>
				</div>
				<UnitsSwitcher />
			</div>

			<div className={styles.description}>
				<p>{description}</p>
			</div>

			<div className={styles.additionalInfo}>
				<div className={styles.addInfoWrapper}>
					<p>Feels like {Math.round(feelslike)}°</p>
				</div>
				<div className={styles.addInfoWrapper}>
					<p>
						Wind {Math.round(windspeed)} {speedUnits}
					</p>
				</div>
				<div className={styles.addInfoWrapper}>
					<p>Humidity {Math.round(humidity)}%</p>
				</div>
			</div>
		</div>
	);
}

export default Overview;
