import "./DateDisplay.scss";

function DateDisplay({ datetime, showDateNumber }) {
	const date = new Date(datetime);
	const formatOptions = { weekday: "long" };
	const weekday = new Intl.DateTimeFormat("en-US", formatOptions).format(date);
	const calendarDate = date.getDate();

	const dateStyleStatus = showDateNumber ? " active" : "";

	return (
		<div styleName="container">
			<p>{weekday}</p>
			{/* <p styleName="dateNumber selected">{" " + calendarDate}</p> */}
			<p styleName={"dateNumber" + dateStyleStatus}>{" " + calendarDate}</p>
		</div>
	);
}

export default DateDisplay;
