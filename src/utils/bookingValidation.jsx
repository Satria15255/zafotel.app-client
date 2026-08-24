export const validateCheckInDate = (checkInDate) => {
	if (!checkInDate) {
		return "Please select a check-in date";
	}
	const now = new Date();

	// Date Selected by User
	const checkIn = new Date(`${checkInDate}T00:00:00`);

	// Checkin date starts at 00.01
	const startOfCheckinDay = new Date(checkIn);
	startOfCheckinDay.setHours(0, 1, 0, 0);

	// Booking must be made at least 12 hours before check-in day
	const minBookingTime = new Date(
		startOfCheckinDay.getTime() - 12 * 60 * 60 * 1000,
	);

	if (now > minBookingTime) {
		return "Check-in date is too close, Please book at least 12 Hours before check-in.";
	}

	// Maximum Booking : 30 Days
	const maxBookingTime = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

	if (checkIn > maxBookingTime) {
		return "Check-in date cannot be more than 30 Days from today";
	}

	return "";
};
