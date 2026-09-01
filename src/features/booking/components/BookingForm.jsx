import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRoomAvailability } from "@/Api";
import {
    validateCheckInDate,
    validateCheckOutDate,
    getCheckInDateLimits,
    formatDate,
} from "@/utils/bookingValidation";

const BookingForm = ({ room }) => {
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [checkInDate, setCheckInDate] = useState("");
    const [checkInError, setCheckInError] = useState("");

    const [checkOutDate, setCheckOutDate] = useState("");
    const [checkOutError, setCheckOutError] = useState("");

    const [availability, setAvailability] = useState(null);
    const [availabilityLoading, setAvailabilityLoading] = useState(false);
    const [availabilityError, setAvailabilityError] = useState("");

    const [unitsBooked, setUnitsBooked] = useState(1);
    const { minCheckInDate, maxCheckInDate } = getCheckInDateLimits();
    const minCheckIn = formatDate(minCheckInDate);
    const maxCheckIn = formatDate(maxCheckInDate);

    const handleCheckInChange = (e) => {
        const value = e.target.value;

        setCheckInDate(value);

        const error = validateCheckInDate(value);
        setCheckInError(error);

        // Reset availability
        setAvailability(null);
        setAvailabilityError("");

        if (checkOutDate) {
            const checkOutError = validateCheckOutDate(value, checkOutDate);
            setCheckOutError(checkOutError);

            if (checkOutError) {
                setCheckOutDate("");
            }
        }
    };

    const handleCheckOutChange = (e) => {
        const value = e.target.value;

        setCheckOutDate(value);

        const error = validateCheckOutDate(checkInDate, value);
        setCheckOutError(error);

        // Reset Availability
        setAvailability(null);
        setAvailabilityError("");
    };

    const minCheckOut = checkInDate
        ? formatDate(
              new Date(
                  new Date(`${checkInDate}T00:00:00`).getTime() +
                      24 * 60 * 60 * 1000,
              ),
          )
        : "";

    useEffect(() => {
        if (!checkInDate || !checkOutDate || checkInError || checkOutError) {
            setAvailability(null);
            return;
        }

        const fetchAvailability = async () => {
            try {
                setAvailabilityLoading(true);
                setAvailabilityError("");

                const res = await getRoomAvailability(
                    room._id,
                    checkInDate,
                    checkOutDate,
                );

                setAvailability(res.data.availability);
            } catch (error) {
                console.error(error);

                setAvailability(null);
                setAvailabilityError(
                    error.response?.data?.message ||
                        "Failed to check room availability",
                );
            } finally {
                setAvailabilityLoading(false);
            }
        };

        fetchAvailability();
    }, [room._id, checkInDate, checkOutDate, checkInError, checkOutError]);

    // Pastikan unitsBooked tidak melebihi availability
    useEffect(() => {
        if (availability && unitsBooked > availability.availableUnits) {
            setUnitsBooked(
                availability.availableUnits > 0
                    ? availability.availableUnits
                    : 1,
            );
        }
    }, [availability, unitsBooked]);

    const handleUnitsChange = (e) => {
        const value = Number(e.target.value);

        if (value < 1) {
            setUnitsBooked(1);
            return;
        }

        if (availability && value > availability.availableUnits) {
            setUnitsBooked(availability.availableUnits);
            return;
        }

        setUnitsBooked(value);
    };

    const handleSubmit = () => {
        navigate("/bookings-review", {
            state: {
                roomId: room._id,
                userName,
                phoneNumber,
                checkInDate,
                checkOutDate,
                unitsBooked,
            },
        });
    };

    const checkin = new Date(checkInDate);
    const checkout = new Date(checkOutDate);

    const totalNights = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));

    const totalPrice = room.price * totalNights * unitsBooked;

    return (
        <div className="border rounded-xl w-full h-auto p-5">
            <p className="font-serif text-lg">Booking Form</p>
            <div className="space-y-6 mt-5">
                <div className="flex flex-col gap-3">
                    <label>Your Name</label>
                    <input
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full border h-10 rounded-lg px-3"
                        placeholder="Ex. Jerdn Onacrh"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <label>Phone Number</label>
                    <input
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full border h-10 rounded-lg px-3"
                        placeholder="Ex. +61 890 2375 3384"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <label>Check-in Date</label>
                    <input
                        value={checkInDate}
                        onChange={handleCheckInChange}
                        type="date"
                        min={minCheckIn}
                        max={maxCheckIn}
                        className="border h-10 rounded-lg px-3"
                    />
                    {checkInError && (
                        <p className="mt-2 text-sm text-red-500">
                            {checkInError}
                        </p>
                    )}
                </div>
                <div className="flex flex-col gap-3">
                    <label>Check-out Date</label>
                    <input
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        type="date"
                        min={minCheckOut}
                        className="border h-10 rounded-lg px-3"
                    />
                    {checkOutError && (
                        <p className="mt-2 text-sm text-red-500">
                            {checkOutError}
                        </p>
                    )}
                </div>
                <div className="flex flex-col gap-3">
                    <label>Units Booked</label>
                    <input
                        type="number"
                        min="1"
                        value={unitsBooked}
                        onChange={(e) => setUnitsBooked(Number(e.target.value))}
                        className="w-full border h-10 rounded-lg px-3"
                        placeholder="1 Units"
                    />
                    {/* Availability */}
                    {availabilityLoading && (
                        <p className="text-sm text-gray-500">
                            Checking room availability...
                        </p>
                    )}

                    {availabilityError && (
                        <p className="text-sm text-red-500">
                            {availabilityError}
                        </p>
                    )}

                    {availability && !availabilityLoading && (
                        <div className=" rounded-lg">
                            <p className="text-sm">
                                {availability.availableUnits > 0
                                    ? `${availability.availableUnits} rooms available`
                                    : "No rooms available for selected dates"}
                            </p>
                        </div>
                    )}
                </div>
                <div>
                    <button
                        onClick={handleSubmit}
                        className="w-full py-3 border rounded-xl bg-[#c69c6d] text-white hover:bg-[#0C0C0C] hover:text-white transition duration-100"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
