import { UnitsSwitcher } from "../UnitsSwitcher";
import { WeatherIcon } from "../WeatherIcon";
import { LocationSelector } from "../LocationSelector";
import { useSelector } from "react-redux";
import "./Overview.scss";

function Overview() {
	const forecastData = useSelector((state) => state.forecastData.data);
	const selectedDayNum = useSelector((state) => state.selectedDay.number);
	const unitGroup = useSelector((state) => state.unitGroup.value);

	const selectedDayData = forecastData.days[selectedDayNum];
	const { temp, humidity, windspeed, description, feelslike, icon } = selectedDayData;

	const speedUnits = unitGroup === "metric" ? "km/h" : "mi/h";

	return (
		<div styleName="container">
			<LocationSelector />

			<div styleName="mainInfo">
				<div styleName="weatherIconWrapper">
					<WeatherIcon iconName={icon} />
				</div>
				<div styleName="temp">
					<p>{Math.round(temp)}°</p>
				</div>
				<UnitsSwitcher />
			</div>

			<div styleName="description">
				<p>{description}</p>
			</div>

			<div styleName="additionalInfo">
				<div styleName="addInfoWrapper">
					<p>Feels like {Math.round(feelslike)}°</p>
				</div>
				<div styleName="addInfoWrapper">
					<p>
						Wind {Math.round(windspeed)} {speedUnits}
					</p>
				</div>
				<div styleName="addInfoWrapper">
					<p>Humidity {Math.round(humidity)}%</p>
				</div>
			</div>
		</div>
	);
}

export { Overview };
