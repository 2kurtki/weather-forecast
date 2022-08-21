import { useState, useEffect } from "react";

function useImage(imageName) {
	const [image, setImage] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchImage = async () => {
			try {
				const response = await import(`Assets/icons/${imageName}`); // change relative path to suit your needs
				setImage(response.default);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		};

		fetchImage();
	}, [imageName]);

	return {
		image,
		isLoading,
		error,
	};
}

export default useImage;
