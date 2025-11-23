import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BookingForm = ({ room }) => {
    const navigate = useNavigate()

    const [userName, setUserName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [checkInDate, setCheckInDate] = useState("")
    const [checkOutDate, setCheckOutDate] = useState("")
    const [unitsBooked, setUnitsBooked] = useState(1)

    const handleSubmit = () => {
        navigate("/bookings-review", {
            state: {
                roomId: room._id,
                userName,
                phoneNumber,
                checkInDate,
                checkOutDate,
                unitsBooked,
                totalNight,
                totalPrice
            }
        })
    }

    return (
        <div className='border rounded-xl w-full h-screen p-5'>
            <p className='font-serif text-lg'>Booking Form</p>
            <div className='space-y-6 mt-5'>
                <div className='flex flex-col gap-3'>
                    <label>Your Name</label>
                    <input value={userName} onChange={(e) => setUserName(e.target.value)} className='w-full border h-10 rounded-lg px-3' placeholder='Ex. Jerdn Onacrh' />
                </div>
                <div className='flex flex-col gap-3'>
                    <label>Phone Number</label>
                    <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='w-full border h-10 rounded-lg px-3' placeholder='Ex. +61 890 2375 3384' />
                </div>
                <div className='flex flex-col gap-3'>
                    <label>Chek-in Date</label>
                    <input value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} type='date' className='border h-10 rounded-lg px-3' />
                </div>
                <div className='flex flex-col gap-3'>
                    <label>Chek-out Date</label>
                    <input value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} type='date' className='border h-10 rounded-lg px-3' />
                </div>
                <div className='flex flex-col gap-3'>
                    <label>Units Booked</label>
                    <input type='number' min='1' value={unitsBooked} onChange={(e) => setUnitsBooked(e.target.value)} className='w-full border h-10 rounded-lg px-3' placeholder='1 Units' />
                </div>
                <div>
                    <button onClick={handleSubmit} className='w-full py-3 border rounded-xl bg-yellow-400 text-white hover:bg-white hover:text-black transition duration-100'>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default BookingForm