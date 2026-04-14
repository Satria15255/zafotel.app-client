import React, { useEffect, useState } from 'react'
import { getUserBookings } from '../Api'
import BookingsCard from '../components/BookingsCard'
import Motion from "@/components/Motion"
import Loader from '../components/GlobalLoader'

const Bookings = () => {
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true)
    const [visible, setVisible] = useState(5)

    const fetchBookings = async () => {
        try {
            setLoading(true)
            const res = await getUserBookings()
            console.log(res.data)
            setTimeout(() => {
                setBookings([...res.data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
                setLoading(false)
            }, 400)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchBookings()
    }, [])

    const visibleBookings = bookings.slice(0, visible)

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
                                    <BookingsCard bookings={visibleBookings} />
                                </div>
                            </div>
                            <div className='w-full flex justify-center items-center mb-12'>
                                <button onClick={() => setVisible(prev => prev + 5)} className='text-lg lg:text-xl hover:underline transition duration-200 font-serif'>
                                    Load More
                                </button>
                            </div>
                        </Motion>
                </div>
            )}
        </div>
    )
}

export default Bookings