import { useNavigate, useParams } from "react-router-dom";
import {
    getBookingById,
    createPayment,
    cancelBookings,
    paidBooking,
} from "@/Api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "@/components/common/GlobalLoader";
import CancelModals from "@/features/booking/components/CancelModal";
import Motion from "@/components/common/Motion";

const BookingPayment = () => {
    const [booking, setBooking] = useState([]);
    const [payment, setPayment] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modals, setModals] = useState(null);

    const { id } = useParams();
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const fetchBooking = async () => {
        try {
            setLoading(true);
            const res = await getBookingById(id);
            console.log(res.data);
            setBooking(res.data.booking);
            setPayment(res.data.payment);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchBooking();
    }, []);

    console.log(payment);
    const handlePayment = async (e) => {
        e.preventDefault();

        try {
            await paidBooking(payment._id);

            toast.success("Payment successfully");

            navigate("/mybookings");
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Payment failed");
        }
    };

    const handleCancel = async (id) => {
        try {
            await cancelBookings(id);

            setBooking((prev) =>
                prev.map((b) =>
                    b._id === id ? { ...b, status: "Canceled" } : b,
                ),
            );

            toast.success("Booking Canceled");
            navigate("/mybookings");
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed Cancel Booking");
            console.log(err);
        }
    };

    const handleModals = async () => {
        setModals(!modals);
    };

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <header
                        className="w-full h-full bg-center bg-cover z-0"
                        style={{
                            backgroundImage: "url(/assets/herobanner.webp)",
                        }}
                    >
                        <div className="h-80 flex flex-col justify-center items-center bg-black/20 w-full p-9">
                            <p className="text-4xl md:text-6xl text-white border-b border-yellow-500 pb-3">
                                Booking Payment
                            </p>
                            <p className="text-lg md:text-xl text-white">
                                <span onClick={() => navigate("/")}>Home</span>
                                <span onClick={() => navigate("/mybookings")}>
                                    / My Bookings
                                </span>{" "}
                                / Booking Payment
                            </p>
                        </div>
                    </header>
                    <main className="w-full flex justify-center py-8">
                        <div className="flex flex-col justify-center w-full md:w-4/5 xl:max-w-7xl p-3 space-y-4">
                            <div className=" justify-between border rounded-lg p-2">
                                <img
                                    src={booking?.room?.image[0]}
                                    className="w-full h-80 object-cover object-center rounded-xl p-2 pb-2"
                                />
                                <div className="flex justify-between border-t p-4">
                                    <p className="flex flex-col">
                                        Room Type :{" "}
                                        <span className="font-bold">
                                            {booking?.room?.name}
                                        </span>
                                    </p>
                                    <p className="flex flex-col">
                                        Price :{" "}
                                        <span className="text-[#c69c6d] font-bold">
                                            ${booking?.room?.price?.toFixed(2)}{" "}
                                            / Night
                                        </span>{" "}
                                    </p>
                                    <p className="flex flex-col justify-center ">
                                        Units Booked :{" "}
                                        <span className="font-bold">
                                            {booking.unitsBooked} Units
                                        </span>
                                    </p>
                                    <p className="flex flex-col justify-between">
                                        Booking Code :{" "}
                                        <span className="font-bold">
                                            {booking.bookingCode}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="w-full border rounded-xl  p-2">
                                <h2 className="font-bold text-xl">
                                    Booking Details :
                                </h2>
                                <p className="flex justify-between">
                                    Username : <span>{booking.userName}</span>
                                </p>
                                <p className="flex justify-between">
                                    Phone Number :{" "}
                                    <span>{booking.phoneNumber}</span>
                                </p>
                                <p className="flex justify-between">
                                    Room Name :{" "}
                                    <span>{booking?.room?.name}</span>
                                </p>
                                <p className="flex justify-between">
                                    Check In Date :{" "}
                                    <span>
                                        {new Date(
                                            booking.checkInDate,
                                        ).toLocaleDateString()}
                                    </span>
                                </p>
                                <p className="flex justify-between">
                                    Check Out Date :{" "}
                                    <span>
                                        {new Date(
                                            booking.checkOutDate,
                                        ).toLocaleDateString()}
                                    </span>
                                </p>
                                <p className="flex justify-between">
                                    Total Nights :{" "}
                                    <span>{booking.totalNights} Nights</span>
                                </p>
                                <p className="flex justify-between">
                                    Total Price :{" "}
                                    <span className="text-[#c69c6d]">
                                        ${booking?.totalPrice?.toFixed(2)}
                                    </span>
                                </p>
                                <p className="flex justify-between">
                                    Payment Method :{" "}
                                    <span>{booking.paymentMethod}</span>
                                </p>
                                <p className="flex justify-between">
                                    Payment Status :{" "}
                                    <span>{booking.paymentStatus}</span>
                                </p>
                            </div>
                            <div className="w-full ">
                                {booking.paymentStatus !== "Expired" ? (
                                    <button
                                        onClick={handlePayment}
                                        type="submit"
                                        className="w-full py-2 bg-[#c69c6d] hover:bg-gray-800 hover:text-white transition duration-100 text-white rounded"
                                    >
                                        Simulate Payment
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="w-full py-2 bg-gray-200 text-white rounded"
                                    >
                                        Paymen Expired
                                    </button>
                                )}

                                <div className="mt-2">
                                    {booking.paymentStatus === "Expired" ? (
                                        <button className="w-full py-2 bg-gray-200 text-white rounded">
                                            Cancel Booking
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleModals}
                                            className="w-full py-2 bg-[#c69c6d] hover:bg-gray-800 hover:text-white transition duration-100 text-white rounded"
                                        >
                                            Cancel Booking
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </main>
                    {modals && (
                        <CancelModals
                            onClose={() => setModals(null)}
                            handleCancel={handleCancel}
                            bookingId={booking._id}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default BookingPayment;
