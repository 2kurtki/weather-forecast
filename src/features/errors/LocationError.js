class CustomError extends Error {
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

class LocationError extends CustomError {}

export { LocationError };
