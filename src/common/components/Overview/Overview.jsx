import UnitsSwitcher from "../UnitsSwitcher/UnitsSwitcher.jsx";
import { useSelector } from "react-redux";
import { selectUnitGroup } from "../../../features/unitGroupSlice.js";
import styles from "./Overview.scss";

function Overview() {
	const unitGroup = useSelector(selectUnitGroup);
	const forecastData = useSelector((state) => state.forecastData.data);

	const currentDay = forecastData.days[0];
	const { temp, humidity, windspeed, conditions, feelslike, icon } = currentDay;

	const speedUnits = unitGroup === "metric" ? "km/h" : "mi/h";
	const FULL_ICON_URL = process.env.ICON_URL + `${icon}.svg`;

	return (
		<div className={styles.wrapper}>
			<div className={styles.location}>
				<p>{forecastData.address}</p>
			</div>
			<div className={styles.mainInfo}>
				<img src={FULL_ICON_URL} className={styles.icon}></img>
				<p className={styles.temp}>{Math.round(temp)}°</p>
				<UnitsSwitcher />
			</div>
			<div className={styles.conditions}>
				<p>{conditions}</p>
			</div>
			<div className={styles.addInfoWrapper}>
				<p className={styles.additionalInfo}>
					Feels like {Math.round(feelslike)}°
				</p>
				<p className={styles.additionalInfo}>
					Wind {Math.round(windspeed)} {speedUnits}
				</p>
				<p className={styles.additionalInfo}>Humidity {Math.round(humidity)}%</p>
			</div>
		</div>
	);
}

export default Overview;
