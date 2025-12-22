import React from 'react'
import BookingsCard from './BookingsCard'

const BookingsList = ({ bookings }) => {
    return (
        <div className='max-h-[90vh]  overflow-y-auto'>
            <BookingsCard bookings={bookings} />
        </div>
    )
}

export default BookingsList