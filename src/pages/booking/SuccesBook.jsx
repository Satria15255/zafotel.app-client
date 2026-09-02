import React, { useEffect, useState } from "react";
import { getBookingById } from "@/Api";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "@/components/common/GlobalLoader";

const SuccesBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [booking, setBooking] = useState(null);

    const fetchBooking = async () => {
        try {
            const res = await getBookingById(id);
            setBooking(res.data.booking);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchBooking();
    }, []);

    if (!booking)
        return (
            <>
                <Loader />
            </>
        );

    return (
        <div>
            <header
                className="w-full h-80 md:h-full bg-cover bg-center"
                style={{ backgroundImage: "url(/assets/herobanner.webp)" }}
            >
                <div className="bg-black/50 w-full h-80 flex flex-col justify-center items-center">
                    <p className="text-xl md:text-6xl lg:text-4xl font-serif text-white border-b border-yellow-500 pb-2">
                        Booking Maked
                    </p>
                    <p className="text-white text-xs md:text-xl lg:text-sm">
                        Home / {booking?.room?.name}
                    </p>
                </div>
            </header>
            <main className="p-1 md:p-8  flex justify-center">
                <div className="bg-white rounded-xl shadow p-6 space-y-4 w-full xl:max-w-7xl">
                    <p className="text-xl md:text-2xl font-bold text-green-600">
                        ✅ Booking Successful
                    </p>

                    <p className="text-gray-600">
                        Thank you, <strong>{booking?.user?.name}</strong>. Your
                        booking has been confirmed.
                    </p>

                    <hr />

                    <div className="flex gap-4">
                        <img
                            src={booking?.room?.image[0]}
                            alt={booking?.room?.name}
                            className="w-full h-50 md:h-90 rounded-xl object-cover"
                        />
                    </div>

                    <div className="bg-green-50 p-4 rounded">
                        <div>
                            <p className="font-semibold">
                                {booking?.room?.name}
                            </p>
                            <p className="text-sm md:text-lg flex justify-between">
                                Check-in:{" "}
                                <span>
                                    {new Date(
                                        booking?.checkInDate,
                                    ).toLocaleDateString()}
                                </span>{" "}
                            </p>
                            <p className="text-sm md:text-lg flex justify-between">
                                Check-out:{" "}
                                <span>
                                    {new Date(
                                        booking?.checkOutDate,
                                    ).toLocaleDateString()}
                                </span>
                            </p>
                            <p className="text-sm md:text-lg flex justify-between">
                                Units:<span> {booking?.unitsBooked}</span>
                            </p>
                            <p className="text-sm md:text-lg flex justify-between">
                                Total Nights:{" "}
                                <span>{booking?.totalNights} Night</span>
                            </p>
                            <p className="text-sm md:text-lg flex justify-between">
                                Booking Status:{" "}
                                <span>{booking?.bookingStatus}</span>
                            </p>
                            <p className="text-sm md:text-lg flex justify-between">
                                Payment Method:{" "}
                                <span>{booking?.paymentMethod}</span>
                            </p>
                            <p className="text-sm md:text-lg flex justify-between">
                                Payment Status:{" "}
                                <span>{booking?.paymentStatus}</span>
                            </p>
                            <p className="text-sm md:text-lg flex justify-between font-bold">
                                Total Price:{" "}
                                <span className="text-[#c69c6d]">
                                    $ {booking?.totalPrice?.toLocaleString()}
                                </span>
                            </p>
                        </div>
                        {booking?.paymentMethod === "Bank Transfer" ? (
                            <div>
                                <p className="text-sm text-green-700">
                                    Complete the booking process by paying on
                                    the payment page, or via the MyBookings page
                                    to view your order history.
                                </p>
                                <p>
                                    <span className="text-red font-bold ">
                                        NOTE :{" "}
                                    </span>
                                    Complete your booking within 1 hour before
                                    your payment expires.
                                </p>
                            </div>
                        ) : (
                            <p className="text-sm text-green-700">
                                Please arrive on time and show this booking
                                confirmation at reception.
                            </p>
                        )}
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => navigate("/mybookings")}
                            className="w-1/2 py-2 text-sm md:text-lg  hover:bg-black hover:text-white hover:bg-[#0C0C0C] hover:text-white border transition duration-100 rounded"
                        >
                            My Bookings
                        </button>
                        {booking?.paymentMethod === "Bank Transfer" ? (
                            <button
                                onClick={() =>
                                    navigate(
                                        `/mybookings/booking-payment/${booking._id}`,
                                    )
                                }
                                className="w-1/2 py-2 text-sm md:text-lg border bg-[#c69c6d] text-white hover:text-white hover:bg-[#0C0C0C]  transition duration-100 rounded"
                            >
                                Pay Now
                            </button>
                        ) : (
                            <button
                                onClick={() => navigate(`/`)}
                                className="w-1/2 py-2 text-sm md:text-lg border bg-[#c69c6d] text-white hover:text-white hover:bg-[#0C0C0C]  transition duration-100 rounded"
                            >
                                Back To Home
                            </button>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SuccesBook;
