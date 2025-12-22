import React, { useEffect, useState } from 'react'
import { getAllBookings } from '../../Api'
import BookingsList from '../components/BookingsList'

const BookingsManagement = () => {
    const [bookings, setBookings] = useState([])

    const fetchBookings = async () => {
        try {
            const res = await getAllBookings()
            setBookings(res.data)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchBookings()
    }, [])

    return (
        <div className='w-full'>
            <p className='text-center font-serif text-xl py-4'>Bookings History :</p>
            <BookingsList bookings={bookings} />
        </div>
    )
}

export default BookingsManagement