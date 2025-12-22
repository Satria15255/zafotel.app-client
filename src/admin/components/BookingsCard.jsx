import React from 'react'

const BookingsCard = ({ bookings }) => {
    return (
        <div className='space-y-5 w-full p-5'>
            {bookings.map((booking) => (
                <div key={booking._id} className='grid grid-cols-2 border rounded-xl'>
                    <div className='flex flex-col w-full'>
                        <img src={booking.room.image[0]} className='w-full h-auto rounded-xl' />
                    </div>
                    <div className='flex justify-between p-5'>
                        <div className='text-lg font-serif flex flex-col justify-around'>
                            <p className='text-xl font-semibold font-serif'>{booking.room.name}</p>
                            <p>Names</p>
                            <p>Email</p>
                            <p>Name Account</p>
                            <p>Check In</p>
                            <p>Check Out</p>
                            <p>Units Booked</p>
                            <p>Total Days</p>
                            <p>Total Price</p>
                            <p>Status</p>
                            <p>Booked At</p>
                        </div>
                        <div className='text-lg font-serif flex flex-col justify-around'>
                            <p className='text-lg font-serif  font-semibold'><span className='text-lg font-bold font-serif text-[#FFD700]'>${booking.room.price}</span> / Night</p>
                            <p>: {booking.userName}</p>
                            <p>: {booking.user.email}</p>
                            <p>: {booking.user.name}</p>
                            <p>: {new Date(booking.checkInDate).toLocaleDateString()}</p>
                            <p>: {new Date(booking.checkOutDate).toLocaleDateString()}</p>
                            <p>: {booking.unitsBooked}</p>
                            <p>: {booking.totalNights}</p>
                            <p>: ${booking.totalPrice}</p>
                            <p>: {booking.status}</p>
                            <p>: {new Date(booking.createdAt).toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BookingsCard