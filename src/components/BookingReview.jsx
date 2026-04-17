import React, { useEffect, useState, useMemo } from 'react'
import { getRoomById, createBookings } from '../Api';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import FacilityIcon from './FacilityIcon';
import Loader from './GlobalLoader'

const BookingReview = () => {
    const { state } = useLocation();
    const navigate = useNavigate()

    const [room, setRoom] = useState(null)
    const [paymentMethod, setPaymentMethod] = useState("Cash")

    useEffect(() => {
        getRoomById(state.roomId).then((res) => setRoom(res.data))
    }, [state.roomId])

    const totalNights = useMemo(() => {
        const checkin = new Date(state.checkInDate)
        const checkout = new Date(state.checkOutDate)
        return Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24))
    }, [state.checkInDate, state.checkOutDate])

    const totalPrice = useMemo(() => {
        if (!room) return 0
        return room.price * totalNights * Number(state.unitsBooked)
    }, [room, totalNights, state.unitsBooked])

    const handleConfirm = async (req, res) => {
        try {
            const res = await createBookings({
                roomId: state.roomId,
                userName: state.userName,
                phoneNumber: state.phoneNumber,
                checkInDate: state.checkInDate,
                checkOutDate: state.checkOutDate,
                unitsBooked: Number(state.unitsBooked),
                paymentMethod
            })

            navigate(`/booking-success/${res.data.booking._id}`)
        } catch (error) {
            toast.warning(err.response?.data?.message || "Booking Failed")
        }
    }

    if (!room) return <div><Loader /></div>

    return (
        <div >
            <div className='w-full h-80 md:h-full bg-cover bg-center' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
                <div className='bg-black/50 w-full h-80 flex flex-col justify-center items-center'>
                    <p className='text-xl md:text-6xl lg:text-4xl font-serif text-white border-b border-yellow-500 pb-2'>Booking Details</p>
                    <p className='text-white text-xs md:text-xl lg:text-sm'>Home / {room.name}</p>
                </div>
            </div>

            <div className='h-auto w-full p-4 md:p-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 border rounded-xl'>
                    <div className='w-full h-60 lg:h-80 p-2'>
                        <img src={room.image[0]} alt={room.name} className='w-full h-full rounded-lg md:rounded-l-xl object-cover' />
                    </div>
                    <div className='flex flex-col justify-around p-2'>
                        <div className='flex justify-between border-b border-yellow-500 py-2'>
                            <p className='text-xl lg:text-3xl font-serif '>{room.name}</p>
                            <p className='text-xl lg:text-3xl font-serif text-[#FDD700]'>${room.price}/Night</p>
                        </div>
                        <div className="grid grid-cols-2">
                            {room.details.amenities.slice(0, 6).map((amenities) => {
                                const key = amenities.toLowerCase().trim()
                                return (
                                    <div key={amenities} className='flex items-center gap-1 items-center'>
                                        {FacilityIcon[key]}
                                        <p className='text-xs md:text-sm lg:text-lg items-center py-3'>{amenities}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='space-y-3 mt-2 border rounded-lg px-6 py-2'>
                    <p className='text-xl font-serif mt-7 font-semibold'>Booking Details</p>
                    <p className='flex justify-between text-sm md:text-lg'>Your Name :<span>{state.userName}</span></p>
                    <p className='flex justify-between text-sm md:text-lg'>Phone Number :<span>{state.phoneNumber}</span></p>
                    <p className='flex justify-between text-sm md:text-lg'>Check-in Date :<span>{state.checkInDate}</span></p>
                    <p className='flex justify-between text-sm md:text-lg'>Check-Out Date :<span>{state.checkOutDate}</span></p>
                    <p className='flex justify-between text-sm md:text-lg'>Units Booked :<span>{Number(state.unitsBooked)} Units</span></p>
                    <p className='flex justify-between text-sm md:text-lg'>Total Payment :<span className='font-bold text-[#FDD700]'>${totalPrice}</span></p>
                    <div className='flex flex-col gap-2'>
                        <label className='text-sm md:text-lg'>Payment Method :</label>
                        <div className='flex flex-col pl-7 gap-2'>
                            <label className='flex items-center gap-2 text-sm md:text-lg'>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Cash"
                                    checked={paymentMethod === "Cash"}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                Cash
                            </label>
                            <label className='flex items-center gap-2 text-sm md:text-lg'>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Bank Transfer"
                                    checked={paymentMethod === "Bank Transfer"}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                Bank Transfer
                            </label>
                        </div>
                    </div>
                </div>
            <button onClick={handleConfirm} className='mt-12 w-full h-15 bg-[#FDD700] rounded-xl'>Book now</button>
            </div>
        </div>
    )
}

export default BookingReview