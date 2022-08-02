function WeatherIcon({ iconName }) {
	const FULL_ICON_URL = process.env.ICON_URL + `${iconName}.svg`;

	return <img src={FULL_ICON_URL} />;
}

export default WeatherIcon;
