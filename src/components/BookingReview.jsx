import React, { useEffect, useState } from 'react'
import { getRoomById, createBookings } from '../Api';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingReview = () => {
    const { state } = useLocation();
    const navigate = useNavigate()

    const [room, setRoom] = useState(null)
    const [paymentMethod, setPaymentMethod] = useState("pay-on-location")

    useEffect(() => {
        getRoomById(state.roomId).then((res) => setRoom(res.data))
    }, [])

    const handleConfirm = async (req, res) => {
        try {
            const res = await createBookings({
                userName: state.userName,
                phoneNumber: state.phoneNumber,
                checkInDate: state.checkInDate,
                checkOutDate: state.checkOutDate,
                unitsBooked: state.unitsBooked
            })

            navigate(`/bookings-success/${res.data.bookings._id}`)
        } catch (error) {
            alert(err.response?.data?.message || "Booking Failed")
        }
    }

    if (!room) return <div>Loading...</div>

    return (
        <div className='h-auto w-full p-10'>
            <div>
                <div>
                    <p>{room.name}</p>
                </div>
                <p className='text-xl font-serif mt-7 font-semibold'>Booking Details</p>
                <div className='space-y-3 mt-2'>
                    <p className='flex justify-between'><span>Your Name :</span>{state.userName}</p>
                    <p className='flex justify-between'><span>Phone Number :</span>{state.phoneNumber}</p>
                    <p className='flex justify-between'><span>Check-in Date :</span>{state.checkInDate}</p>
                    <p className='flex justify-between'><span>Check-Out Date :</span>{state.checkOutDate}</p>
                    <p className='flex justify-between'><span>Units Booked :</span>{state.unitsBooked} Units</p>
                    <p><span>Total Payment :</span>{room.totalPrice}</p>
                    <div className='flex flex-col'>
                        <label>Payment Method :</label>
                        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                            <option value='pay-on-location'>Pay on location</option>
                            <option value='transfer'>transfer</option>
                        </select>
                    </div>
                </div>
            </div>
            <button onClick={handleConfirm} className='mt-12 w-full h-15 bg-[#FDD700] rounded-xl'>Book now</button>
        </div>
    )
}

export default BookingReview