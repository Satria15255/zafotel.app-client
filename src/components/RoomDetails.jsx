import React, { useEffect, useState } from 'react'
import { getRoomById } from '../Api';
import { useParams } from 'react-router-dom'
import BookingForm from './BookingForm';

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
            <div className='w-full h-full bg-cover bg-center' style={{ backgroundImage: `url(${room.image[0]})` }}>
                <div className='bg-black/50 w-full h-80 flex flex-col justify-center items-center'>
                    <p className='text-4xl font-serif text-white'>Rooms Details</p>
                    <p className='text-white text-sm'>Home / {room.name}</p>
                </div>
            </div>
            <div className='flex justify-center gap-3 py-7'>
                <div className='space-y-3'>
                    {image.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index}`}
                            onClick={() => setMainImage(img)}
                            className={`w-50 h-30 object-cover rounded-xl cursor-pointer border
                            ${mainImage === img ? "border-blud-500" : "border-gray-300"}`}
                        />
                    ))}
                </div>
                <div>
                    <img
                        src={mainImage}
                        alt='Room preview'
                        className='w-240 h-130 object-cover rounded-xl pb-1'
                    />
                </div>
            </div>
            <div className='flex gap-5 px-21 pb-10'>
                <div className='flex flex-col flex-10'>
                    <div className='w-full h-50 flex flex-col justify-between border rounded-xl py-2 px-3 '>
                        <p className='flex justify-between items-center text-md'> <span className='font-serif text-2xl'>{room.name}</span>4.9 (671 Review)</p>
                        <p className='text-sm max-w-lg'>{room.description}</p>
                        <p className='text-lg '><span className='font-serif text-[#FFD700]'>${room.price}</span> / Night</p>
                        <div className='flex justify-between border-t pt-5'>
                            <p>Units : {room.totalUnits} Room</p>
                            <p>Booked : {room.bookedUnits} Room</p>
                            <p>Available : {room.availableUnits} Room</p>
                        </div>
                    </div>
                    <div className='py-6 space-y-3'>
                        <p className='text-xl font-serif'>Overview</p>
                        <p className='text-sm max-w-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi et illo vel totam saepe fugiat ipsum maxime optio omnis dolor rerum labore quaerat, voluptatibus quisquam possimus consectetur minima quis?</p>
                    </div>
                    <div className='space-y-3'>
                        <p className='text-xl font-serif'>Room Amenities</p>
                        <p className='text-sm max-w-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, sequi fuga nemo placeat unde eos corrupti harum fugit dolore, ullam explicabo.</p>
                        <div className='grid grid-cols-2'>
                            {room.details.amenities.map((amenity, index) => (
                                <div key={index}>
                                    <p>{amenity}</p>
                                </div>
                            ))}
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