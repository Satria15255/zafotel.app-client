import React from "react";
import { useNavigate } from "react-router-dom";

const BookingsCard = ({ bookings }) => {
    const navigate = useNavigate();

    return (
        <div className="space-y-5 px-3 lg:px-10 my-10 ">
            {bookings.map((booking) => (
                <div key={booking.id}>
                    <div className="border flex flex-col md:flex-row justify-between lg:justify-center items-center p-3">
                        <div className="w-full md:w-3/5 flex flex-col md:flex-row md:items-center gap-2">
                            <img
                                src={booking.room.image[0]}
                                className="w-100 md:w-full h-50 md:h-40 lg:h-50 object-cover object-center rounded-sm"
                            />
                            <div className="flex md:hidden flex-row justify-between md:flex-col pb-2 px-2 border-b">
                                <p className="font-bold text-lg">
                                    {booking.room.name}
                                </p>
                                <p className="text-sm">
                                    <span className="text-yellow-500">
                                        ${booking.room.price}
                                    </span>{" "}
                                    / Night
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-2">
                            <div className="hidden md:flex flex-row justify-between py-4  border-b">
                                <p className="font-bold text-lg lg:text-2xl">
                                    {booking.room.name}
                                </p>
                                <p className="text-lg lg:text-2xl">
                                    <span className="text-yellow-500">
                                        ${booking.room.price}
                                    </span>{" "}
                                    / Night
                                </p>
                            </div>
                            <div className="grid grid-cols-3  text-sm space-y-3">
                                <p className="text-xs md:text-sm lg:text-lg w-20 md:w-25">
                                    Check In:{" "}
                                    {new Date(
                                        booking.checkInDate,
                                    ).toLocaleDateString()}
                                </p>
                                <p className="text-xs md:text-sm lg:text-lg w-20 md:w-25">
                                    Check Out:{" "}
                                    {new Date(
                                        booking.checkOutDate,
                                    ).toLocaleDateString()}
                                </p>
                                <p className="text-xs md:text-sm lg:text-lg w-20 md:w-25 flex flex-col">
                                    {" "}
                                    Payment:{" "}
                                    <span>{booking.paymentStatus}</span>
                                </p>
                                <p className="text-xs md:text-sm lg:text-lg w-20 md:w-25 flex flex-col">
                                    {" "}
                                    Status: <span>{booking.bookingStatus}</span>
                                </p>
                                <p className="text-xs md:text-sm lg:text-lg w-20 md:w-40 flex flex-col ">
                                    {" "}
                                    Method: <span>{booking.paymentMethod}</span>
                                </p>
                                {booking.paymentMethod === "Bank Transfer" &&
                                booking.paymentStatus === "Unpaid" ? (
                                    <button
                                        onClick={() =>
                                            navigate(
                                                `/mybookings/booking-payment/${booking._id}`,
                                            )
                                        }
                                        className="w-full h-10 lg:h-15 text-xs lg:text-lg border border-[#D6B585] hover:bg-black hover:text-white transition duration-100 rounded-sm"
                                    >
                                        Pay Now —▸
                                    </button>
                                ) : (
                                    <button
                                        onClick={() =>
                                            navigate(
                                                `/mybookings/booking-detail/${booking._id}`,
                                            )
                                        }
                                        className="w-full h-10 lg:h-15 text-xs lg:text-lg border border-[#D6B585] hover:bg-black hover:text-white transition duration-100 rounded-sm"
                                    >
                                        Details —▸
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookingsCard;
