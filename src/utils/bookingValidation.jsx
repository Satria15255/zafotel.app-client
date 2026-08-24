export const getCheckInDateLimits = () => {
	const now = new Date();

	// Check-in nday starts at 12.01
	const checkInDay = new Date(now);
	checkInDay.setHours(0, 1, 0, 0);

	// Minimum check-in date
	// If current time has passed the 12-Hours window
	// the earliest check-in becomes tommorow
	const minBookingTime = new Date(checkInDay.getTime() + 12 * 60 * 60 * 1000);

	let minCheckInDate = new Date(now);

	if (now > minBookingTime) {
		minCheckInDate.setDate(minCheckInDate.getTime() + 1);
	}

	// Maximum check-in : 30 days from now
	const maxCheckInDate = new Date(now);
	maxCheckInDate.setDate(maxCheckInDate.getTime() + 30);

	return {
		minCheckInDate,
		maxCheckInDate,
	};
};

export const formatDate = (date) => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
};

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

export const validateCheckOutDate = (checkInDate, checkOutDate) => {
	if (!checkOutDate) {
		return "Please select a check-out date";
	}

	if (!checkInDate) {
		return "Please select a check-in date first";
	}

	const checkIn = new Date(`${checkInDate}T00:00:00`);
	const checkOut = new Date(`${checkOutDate}T00:00:00`);

	if (checkOut <= checkIn) {
		return "Check-out date must be after check-in date";
	}

	return "";
};
