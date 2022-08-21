import useImage from "../../hooks/useImage";
import AltImage from "Assets/icons/cloudy.svg";

function WeatherIcon({ iconName }) {
	const { image, error } = useImage(`${iconName}.svg`);
	const iconElement = error === null ? <img src={image} /> : <img src={AltImage}></img>;

	return iconElement;
}

export default WeatherIcon;
