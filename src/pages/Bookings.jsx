import React, { useEffect, useState } from 'react'
import { getUserBookings } from '../Api'
import BookingsCard from '../components/BookingsCard'
import Motion from "@/components/Motion"

const Bookings = () => {
    const [bookings, setBookings] = useState([])

    const fetchBookings = async () => {
        try {
            const res = await getUserBookings()
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
        <div className="h-auto">
            <Motion variant="fadeIn">
            <div className='w-full h-full bg-center bg-cover z-0' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
                <div className='h-80 flex flex-col justify-center items-center bg-black/20 w-full p-9'>
                        <p className='text-xl text-white'><span onClick={() => navigate("/")}>Home</span> / My Bookings</p>
                </div>
            </div>
            </Motion>
            <Motion>
            <BookingsCard bookings={bookings} />
            </Motion>
        </div>
    )
}

export default Bookings