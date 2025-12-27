import React, { useEffect, useState } from 'react'
import { getBookingById } from "../Api"
import { useNavigate, useParams } from 'react-router-dom'

const SuccesBook = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [booking, setBooking] = useState(null)

    useEffect(() => {
        getBookingById(id)
            .then((res) => setBooking(res.data))
            .catch(() => navigate("/"))
    }, [id, navigate])

    if (!booking) return <p>loading booking details</p>

    return (
        <div >
            <div className='w-full h-60 md:h-full bg-cover bg-center' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
                <div className='bg-black/50 w-full h-60 flex flex-col justify-center items-center'>
                    <p className='text-xl lg:text-4xl font-serif text-white'>Booking Maked</p>
                    <p className='text-white text-xs lg:text-sm'>Home / {booking.room.name}</p>
                </div>
            </div>
            <div className="p-1 md:p-8">
                <div className="bg-white rounded-xl shadow p-6 space-y-4">
                    <p className="text-xl md:text-2xl font-bold text-green-600">
                        ✅ Booking Successful
                    </p>

                    <p className="text-gray-600">
                        Thank you, <strong>{booking.user.name}</strong>.
                        Your booking has been confirmed.
                    </p>

                    <hr />

                    <div className="flex gap-4">
                        <img src={booking.room.image[0]} alt={booking.room.name} className='w-full h-50 md:h-90 rounded-xl object-cover' />
                    </div>

                    <div className="bg-green-50 p-4 rounded">
                        <div>
                            <p className="font-semibold">{booking.room.name}</p>
                            <p className="text-sm md:text-lg flex justify-between">Check-in: <span>{new Date(booking.checkInDate).toLocaleDateString()}</span> </p>
                            <p className="text-sm md:text-lg flex justify-between">Check-out: <span>{new Date(booking.checkOutDate).toLocaleDateString()}</span></p>
                            <p className="text-sm md:text-lg flex justify-between">Units:<span> {booking.unitsBooked}</span></p>
                            <p className="text-sm md:text-lg flex justify-between">Total Nights: <span>{booking.totalNights} Night</span></p>
                            <p className="text-sm md:text-lg flex justify-between font-bold">
                                Total Price: <span>$ {booking.totalPrice.toLocaleString()}</span>
                            </p>
                        </div>
                        <p className="text-sm text-green-700">
                            Please arrive on time and show this booking confirmation at reception.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => navigate("/mybookings")}
                            className="w-1/2 py-2 text-sm md:text-lg bg-[#FDD700] text-white hover:bg-white border transition duration-100 rounded"
                        >
                            My Bookings
                        </button>
                        <button
                            onClick={() => navigate("/")}
                            className="w-1/2 py-2 text-sm md:text-lg border hover:bg-black hover:text-white transition duration-100 rounded"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccesBook