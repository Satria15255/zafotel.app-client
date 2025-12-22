import React from 'react'

const BookingsCard = ({ bookings }) => {
    return (
        <div className='space-y-5 px-20 my-10 '>
            {bookings.map((booking) => (
                <div key={booking._id} className='grid grid-cols-1 md:grid-cols-2 justify-between border rounded-xl'>
                    <div className='flex flex-col w-full'>
                        <img src={booking.room.image[0]} className='w-full h-auto rounded-xl' />
                    </div>
                    <div className='flex justify-between p-5'>
                        <div className='text-lg font-serif flex flex-col justify-around'>
                            <p className='text-sm md:text-xl font-semibold font-serif'>{booking.room.name}</p>
                            <p className='text-xs md:text-sm'>Names</p>
                            <p className='text-xs md:text-sm'>Check In</p>
                            <p className='text-xs md:text-sm'>Check Out</p>
                            <p className='text-xs md:text-sm'>Units Booked</p>
                            <p className='text-xs md:text-sm'>Total Days</p>
                            <p className='text-xs md:text-sm'>Total Price</p>
                            <p className='text-xs md:text-sm'>Status</p>
                        </div>
                        <div className='text-lg font-serif flex flex-col justify-around'>
                            <p className='text-sm md:text-lg font-serif  font-semibold'><span className='text-lg font-bold font-serif text-[#FFD700]'>${booking.room.price}</span> / Night</p>
                            <p className='text-xs md:text-sm'>: {booking.userName}</p>
                            <p className='text-xs md:text-sm'>: {new Date(booking.checkInDate).toLocaleDateString()}</p>
                            <p className='text-xs md:text-sm'>: {new Date(booking.checkOutDate).toLocaleDateString()}</p>
                            <p className='text-xs md:text-sm'>: {booking.unitsBooked}</p>
                            <p className='text-xs md:text-sm'>: {booking.totalNights}</p>
                            <p className='text-xs md:text-sm'>: ${booking.totalPrice}</p>
                            <p className='text-xs md:text-sm'>: {booking.status}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BookingsCard