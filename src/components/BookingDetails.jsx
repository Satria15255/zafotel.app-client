import { getBookingById, cancelBookings } from "@/Api"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from 'react-toastify'
import Loader from './GlobalLoader'
import CancelModals from './CancelModals'

const BookingDetails = () => {
    const [booking, setBooking] = useState([])
    const [loading, setLoading] = useState(true)
    const [modals, setModals] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()

    const fetchBooking = async () => {
        try {
            setLoading(true)
            const res = await getBookingById(id)
            setBooking(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBooking()
    }, [])

    const handleCancel = async (id) => {
        const confirmCancel = window.confirm("Are u suer cancel this booking?")
        if (!confirmCancel) return

        try {
            await cancelBookings(id)

            setBooking((prev) =>
                prev.map((b) =>
                    b._id === id ? { ...b, status: "Canceled" } : b
                ))

            toast.success("Booking Canceled")
            navigate("/mybookings")
        } catch (error) {
            toast.error(err.response?.data?.message || "Failed Cancel Booking")
        }
    }

    const handleModals = async () => {
        setModals(!modals)
    }

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (

                <div >
                    <div className='w-full h-full bg-center bg-cover z-0' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
                        <div className='h-80 flex flex-col justify-center items-center bg-black/20 w-full p-9'>
                            <p className='text-4xl md:text-6xl text-white border-b border-yellow-500 pb-3'>Booking Details</p>
                                <p className='text-lg md:text-xl text-white'>
                                    <span onClick={() => navigate("/")}>Home</span>
                                    <span onClick={() => navigate("/mybookings")}>/ My Booking</span> / Booking Details</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center py-8">
                        <div className="flex flex-col justify-center w-full md:w-4/5 p-3 space-y-4">
                            <div className="flex justify-center w-full border rounded-xl h-40">
                                <p className="flex flex-col items-center justify-center text-xl">Booking Code : <span className="font-bold text-6xl">{booking.bookingCode}</span></p>
                            </div>
                            <div className=" justify-between border rounded-lg p-2">
                                <img src={booking?.room?.image[0]} className="w-full h-80 object-cover object-center rounded-xl p-2 pb-2" />
                                <div className="flex justify-between border-t p-4">
                                    <p className="flex flex-col">Room Type : <span className="font-bold">{booking?.room?.name}</span></p>
                                    <p className="flex flex-col">Price : <span className="text-[#FDD700] font-bold">${booking?.room?.price} / Night</span> </p>
                                    <p className="flex flex-col justify-center ">Units Booked : <span className="font-bold">{booking.unitsBooked} Units</span></p>
                                </div>
                            </div>
                            <div className="w-full border rounded-xl  p-2">
                                <p className="font-bold text-xl">Booking Details :</p>
                                <p className="flex justify-between">Username : <span>{booking.userName}</span></p>
                                <p className="flex justify-between">Phone Number : <span>{booking.phoneNumber}</span></p>
                                <p className="flex justify-between">Room Name : <span>{booking?.room?.name}</span></p>
                                <p className="flex justify-between">Check In Date : <span>{new Date(booking.checkInDate).toLocaleDateString()}</span></p>
                                <p className="flex justify-between">Check Out Date : <span>{new Date(booking.checkOutDate).toLocaleDateString()}</span></p>
                                <p className="flex justify-between">Total Nights : <span>{booking.totalNights} Nights</span></p>
                                <p className="flex justify-between">Total Price : <span>${booking.totalPrice}</span></p>
                                <p className="flex justify-between">Payment Method : <span>{booking.paymentMethod}</span></p>
                                <p className="flex justify-between">Payment Status : <span>{booking.paymentStatus}</span></p>
                            </div>
                            <div className="w-full border rounded-xl py-6 h-auto px-3">
                                <p className="font-bold text-xl">Informations :</p>

                                <ol className="list-decimal pl-5" >
                                    <li>Check in times <strong>{new Date(booking.checkInDate).toLocaleDateString()} at 2.00 P.M - 11.59 P.M</strong></li>
                                    <li>Check Out times <strong> {new Date(booking.checkOutDate).toLocaleDateString()} before 12.00 A.M</strong></li>
                                </ol>
                            </div>
                                {booking.bookingStatus === "Pending" && booking.bookingStatus === "Confirmed" ? (
                                    <button
                                        onClick={handleModals}
                                        className="w-full py-2 bg-[#c69c6d] text-white rounded"
                                    >
                                        Cancel Booking
                                    </button>
                                ) : (
                                    <button
                                        className="w-full py-2 bg-gray-200 text-white rounded"
                                    >
                                        Cancel Booking
                                    </button>
                                )}
                        </div>
                    </div>
                        {modals && <CancelModals onClose={() => setModals(null)} handleCancel={handleCancel} bookingId={booking._id} />}
                </div>
            )}
        </div >
    )
}

export default BookingDetails