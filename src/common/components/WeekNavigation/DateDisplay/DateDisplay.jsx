function DateDisplay({ datetime, showFullDate }) {
	const date = new Date(datetime);
	const formatOptions = { weekday: "long" };
	const weekday = new Intl.DateTimeFormat("en-US", formatOptions).format(date);
	const calendarDate = date.getDate();

	return (
		<div>
			{weekday}
			{showFullDate && " " + calendarDate}
		</div>
	);
}

export default DateDisplay;
