import { useSelector, useDispatch } from "react-redux";
import { changeLocation } from "Features/locationSlice";
import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./LocationSelector.scss";
import { useEffect } from "react";

function LocationSelector() {
	const { status, error } = useSelector((state) => state.forecastData);
	const location = useSelector((state) => state.location.value);

	const [isFormDisplayed, setIsFormDisplayed] = useState(false);
	const [isFormFocused, setIsFormFocused] = useState(false);

	const dispatch = useDispatch();
	const inputRef = useRef(null);

	const formStyleName = isFormFocused ? "form focused" : "form";

	useEffect(() => {
		if (status === "succeeded") {
			setIsFormDisplayed(false);
		}
	}, [status]);

	const handleSubmit = (event) => {
		dispatch(changeLocation(inputRef.current.value));
		event.preventDefault();
	};

	return (
		<div styleName="container">
			{isFormDisplayed ? (
				<form styleName={formStyleName} onSubmit={handleSubmit}>
					<input
						styleName="input"
						ref={inputRef}
						defaultValue={location}
						placeholder="Enter a location"
						type="text"
						onFocus={() => setIsFormFocused(true)}
						onBlur={() => setIsFormFocused(false)}
					/>
					<button styleName="searchButton">
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</form>
			) : (
				<>
					<div styleName="locationName">
						<p>{location}</p>
					</div>

					<div styleName="penIcon" onClick={() => setIsFormDisplayed(true)}>
						<FontAwesomeIcon icon={faPen} />
					</div>
				</>
			)}
			{error.name === "LocationError" && <div>This location doesnt exist!</div>}
		</div>
	);
}

export { LocationSelector };
