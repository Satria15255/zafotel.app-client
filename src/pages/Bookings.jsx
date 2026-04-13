import React, { useEffect, useState } from 'react'
import { getUserBookings } from '../Api'
import BookingsCard from '../components/BookingsCard'
import Motion from "@/components/Motion"
import Loader from '../components/GlobalLoader'

const Bookings = () => {
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchBookings = async () => {
        try {
            setLoading(true)
            const res = await getUserBookings()
            setBookings(res.data)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBookings()
    }, [])

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                    <div className="h-auto">
                        <Motion variant="fadeIn">
                            <div className='w-full h-full bg-center bg-cover z-0' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
                                <div className='h-80 flex flex-col justify-center items-center bg-black/40 w-full p-9'>
                                    <p className='text-4xl md:text-6xl text-white border-b border-yellow-500 pb-2'>My Bookings</p>
                                    <p className='text-lg md:text-xl text-white'><span onClick={() => navigate("/")}>Home</span> / My Bookings</p>
                                </div>
                            </div>
                        </Motion>
                        <Motion>
                            <div className='w-full flex justify-center'>
                                <div className='p-2 md:w-4/5'>
                                    <BookingsCard bookings={bookings} />
                                </div>
                            </div>
                        </Motion>
                </div>
            )}
        </div>
    )
}

export default Bookings