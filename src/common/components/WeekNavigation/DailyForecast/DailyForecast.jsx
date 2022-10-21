import { DateDisplay } from "../DateDisplay";
import { WeatherIcon } from "../../WeatherIcon";
import { useSelector, useDispatch } from "react-redux";
import { changeDay } from "Features/selectedDaySlice";
import { useMediaQuery } from "react-responsive";
import "./DailyForecast.scss";

function DailyForecast({ dailyForecastData, dayNum }) {
	const { temp, icon, datetime, conditions, humidity } = dailyForecastData;
	const dispatch = useDispatch();

	const selectedDayNum = useSelector((state) => state.selectedDay.number);
	const isDaySelected = dayNum === selectedDayNum;

	const isTabletOrSmaller = useMediaQuery({ query: "(max-width: 680px)" });
	const dayStyleStatus = isDaySelected || isTabletOrSmaller ? " selected" : "";

	return (
		<div styleName={"container" + dayStyleStatus} onClick={() => dispatch(changeDay(dayNum))}>
			<div styleName="title">
				<div styleName={"date" + dayStyleStatus}>
					<DateDisplay
						datetime={datetime}
						showDateNumber={isDaySelected || isTabletOrSmaller}
					/>
				</div>

				<div styleName={"conditions" + dayStyleStatus}>
					<p>{conditions}</p>
				</div>
			</div>

			<div styleName="content">
				<div styleName="iconWrapper">
					<WeatherIcon iconName={icon} />
				</div>

				<div styleName="indicators">
					<div styleName="temp">
						<p>{Math.round(temp)}°</p>
					</div>

					<div styleName={"humidity" + dayStyleStatus}>
						<p>Humidity {Math.round(humidity)}%</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export { DailyForecast };
