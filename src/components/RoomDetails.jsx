import React, { useEffect, useState } from 'react'
import { getRoomById } from '../Api';
import { useParams } from 'react-router-dom'
import BookingForm from './BookingForm';
import FacilityIcon from './FacilityIcon';

const RoomDetails = () => {
    const [room, setRoom] = useState(null)
    const { id } = useParams()
    const [mainImage, setMainImage] = useState("")
    const image = room?.image || []

    const fetchRoomDetail = async () => {
        try {
            const res = await getRoomById(id)
            setRoom(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (id) fetchRoomDetail()
    }, [])

    useEffect(() => {
        if (room && room.image && room.image.length > 0) {
            setMainImage(room.image[0])
        }
    }, [room])

    if (!room) return <div>Loading...</div>

    return (
        <div>
            <div className='w-full h-full bg-cover bg-center' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
                <div className='bg-black/50 w-full h-80 flex flex-col justify-center items-center'>
                    <p className='text-4xl font-serif text-white'>Rooms Details</p>
                    <p className='text-white text-sm'>Home / {room.name}</p>
                </div>
            </div>
            <div className='flex w-full justify-center py-7'>
                <div>
                    <img
                        src={room.image[0]}
                        alt='Room preview'
                        className='w-300 h-100 object-cover rounded-xl pb-1'
                    />
                </div>
            </div>
            <div className='flex gap-5 px-21 pb-10'>
                <div className='flex flex-col flex-10'>
                    <div className='w-full h-auto flex flex-col justify-between border rounded-xl py-2 px-3 '>
                        <div className='flex flex-col justify-center '>
                            <p className='flex justify-between items-center text-md'> <span className='font-serif text-2xl'>{room.name}</span>4.9 (671 Review)</p>
                            <p className='text-lg mt-5 '><span className='font-serif text-[#FFD700]'>${room.price}</span> / Night</p>
                        </div>
                        <div className='flex justify-between border-t pt-5 mt-5'>
                            <p>Units : {room.totalUnits} Room</p>
                            <p>Booked : {room.bookedUnits} Room</p>
                            <p>Available : {room.availableUnits} Room</p>
                        </div>
                    </div>
                    <div className='py-6 space-y-3'>
                        <p className='text-xl font-serif'>Overview</p>
                        <p className='text-sm max-w-lg'>{room.description}</p>
                    </div>
                    <div className='space-y-3'>
                        <p className='text-xl font-serif'>Room Amenities</p>
                        <p className='text-sm max-w-lg'>Some of the room facilities that you get exclusively include:</p>
                        <div className='grid grid-cols-2'>
                            {room.details.amenities.map((amenities) => {
                                const key = amenities.toLowerCase().trim()
                                return (
                                    <div key={amenities} className='flex items-center gap-1 items-center'>
                                        {FacilityIcon[key]}
                                        <p className='text-xs md:text-lg flex items-center py-3'>{amenities}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='flex flex-5'>
                    <BookingForm room={room} />
                </div>
            </div>
        </div>
    )
}

export default RoomDetails