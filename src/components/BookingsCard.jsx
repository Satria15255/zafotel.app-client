import React from 'react'
import { useNavigate } from 'react-router-dom'

const BookingsCard = ({ bookings }) => {
    const navigate = useNavigate()

    return (
        <div className='space-y-5 px-12 lg:px-10 my-10 '>
            {/* {bookings.map((booking) => (
                <div key={booking._id} className='grid grid-cols-1 md:grid-cols-2 justify-between border rounded-xl'>
                    <div className='flex flex-col w-full'>
                        <img src={booking.room.image[0]} className='w-full h-100 rounded-xl' />
                    </div>
                    <div className='flex flex-col justify-around p-5'>
                        <div className="flex justify-between h-70">
                            <div className='text-lg font-serif flex flex-col justify-around'>
                                <p className='text-sm md:text-xl font-semibold font-serif'>{booking.room.name}</p>
                                <p className='text-xs md:text-sm'>Names</p>
                                <p className='text-xs md:text-sm'>Check In</p>
                                <p className='text-xs md:text-sm'>Check Out</p>
                                <p className='text-xs md:text-sm'>Units Booked</p>
                                <p className='text-xs md:text-sm'>Total Days</p>
                                <p className='text-xs md:text-sm'>Total Price</p>
                                <p className='text-xs md:text-sm'>Booking Status</p>
                                <p className='text-xs md:text-sm'>Payment Method</p>
                                <p className='text-xs md:text-sm'>Payment Status</p>
                            </div>
                            <div className='text-lg font-serif flex flex-col justify-around'>
                                <p className='text-sm md:text-lg font-serif  font-semibold'><span className='text-lg font-bold font-serif text-[#FFD700]'>${booking.room.price}</span> / Night</p>
                                <p className='text-xs md:text-sm'>: {booking.userName}</p>
                                <p className='text-xs md:text-sm'>: {new Date(booking.checkInDate).toLocaleDateString()}</p>
                                <p className='text-xs md:text-sm'>: {new Date(booking.checkOutDate).toLocaleDateString()}</p>
                                <p className='text-xs md:text-sm'>: {booking.unitsBooked}</p>
                                <p className='text-xs md:text-sm'>: {booking.totalNights}</p>
                                <p className='text-xs md:text-sm'>: ${booking.totalPrice}</p>
                                <p className='text-xs md:text-sm'>: {booking.bookingStatus}</p>
                                <p className='text-xs md:text-sm'>: {booking.paymentMethod}</p>
                                <p className='text-xs md:text-sm'>: {booking.paymentStatus}</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => navigate("/mybookings")}
                                className="w-1/2 py-2 text-sm md:text-lg bg-[#FDD700] text-white hover:text-black hover:bg-white border transition duration-100 rounded"
                            >
                                Cancell
                            </button>
                            {booking?.paymentStatus === "Paid" ? (
                                <button
                                    onClick={() => navigate("/")}
                                    className="w-1/2 py-2 text-sm md:text-lg border hover:bg-black hover:text-white transition duration-100 rounded"
                                >
                                    View Receipt
                                </button>
                            ) : (
                                <button
                                    onClick={() => navigate(`/mybookings/booking-payment/${booking._id}`)}
                                    className="w-1/2 py-2 text-sm md:text-lg border hover:bg-black hover:text-white transition duration-100 rounded"
                                >
                                    Go to Payment
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))} */}
            {bookings.map((booking) => (
                <div key={booking.id}>
                    <div className='border flex justify-between items-center p-1'>
                        <div className='flex items-center gap-2'>
                            <img src={booking.room.image[0]} className='w-50 h-30 object-cover object-center rounded-sm' />
                            <div className='flex flex-col'>
                                <p className='font-bold text-lg'>{booking.room.name}</p>
                                <p className='text-sm'><span className='text-yellow-500'>${booking.room.price}</span> / Night</p>
                            </div>
                        </div>
                        <p className='text-xs md:text-sm w-20'>Check In: {new Date(booking.checkInDate).toLocaleDateString()}</p>
                        <p className='text-xs md:text-sm w-20'>Check Out: {new Date(booking.checkOutDate).toLocaleDateString()}</p>
                        <p className='w-20 flex flex-col'> Payment: <span>{booking.paymentStatus}</span></p>
                        <p className='w-20 flex flex-col'> Status: <span>{booking.bookingStatus}</span></p>
                        <p className='w-20 flex flex-col w-30'> Method: <span onClick={() => navigate(`/mybookings/booking-payment/${booking._id}`)}>{booking.paymentMethod}</span></p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BookingsCard