import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function useForecastData() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const unitGroup = useSelector((state) => state.unitGroup.value);
	const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Moscow?unitGroup=${unitGroup}&iconSet=icons2&key=${process.env.API_KEY}`;

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(API_URL);

				if (!response.ok) {
					throw new Error(`HTTP error: The status is ${response.status}`);
				}

				const actualData = await response.json();
				setData(actualData);
				setError(null);
			} catch (err) {
				setError(err.message);
				setData(null);
			} finally {
				setIsLoading(false);
			}
		};

		getData();
	}, [API_URL]);

	return [data, error, isLoading];
}

export default useForecastData;
