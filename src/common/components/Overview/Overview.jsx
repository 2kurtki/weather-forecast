import { UnitsSwitcher } from "../UnitsSwitcher";
import { useSelector } from "react-redux";
import { WeatherIcon } from "../WeatherIcon";
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
			<div styleName="location">
				<p>{forecastData.address}</p>
			</div>

			<div styleName="mainInfo">
				<div styleName="iconWrapper">
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
