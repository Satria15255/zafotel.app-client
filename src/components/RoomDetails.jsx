import React, { useEffect, useState } from 'react'
import { getRoomById } from '../Api';
import { useParams, useNavigate } from 'react-router-dom'
import BookingForm from './BookingForm';
import FacilityIcon from './FacilityIcon';
import Motion from "@/components/Motion";

const RoomDetails = () => {
    const [room, setRoom] = useState(null)
    const { id } = useParams()
    const [mainImage, setMainImage] = useState("")
    const image = room?.image || []
    const navigate = useNavigate()

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
            <Motion variant="fadeIn">
            <div className='w-full h-60 md:h-full bg-cover bg-center ' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
                <div className='bg-black/50 w-full h-60 flex flex-col cursor-pointer justify-center items-center'>
                    <p className='text-xl md:text-4xl font-serif text-white'>Rooms Details</p>
                    <p className='text-white text-xs md:text-sm'><span onClick={() => navigate("/")}>Home</span> / {room.name}</p>
                </div>
            </div>
            </Motion>
            <Motion delay={0.4}>
            <div className='flex w-full justify-center py-7 px-2'>
                    <img
                        src={room.image[0]}
                        alt='Room preview'
                    className='w-full md:w-300 h-auto md:h-100 object-cover rounded-xl pb-1'
                />
            </div>
            </Motion>
            <div className='flex flex-col md:flex-row gap-5 px-2 md:px-21 pb-10'>
                <div className='flex flex-col flex-10'>
                    <Motion delay={0.8}>
                    <div className='w-full h-auto flex flex-col justify-between border rounded-xl py-2 px-3 '>
                        <div className='flex flex-col justify-center '>
                            <p className='flex justify-between items-center text-sm md:text-md'> <span className='font-serif text-lg md:text-2xl'>{room.name}</span>4.9 (671 Review)</p>
                            <p className='text-lg mt-5 '><span className='font-serif text-[#FFD700]'>${room.price}</span> / Night</p>
                        </div>
                        <div className='flex justify-between border-t pt-5 mt-5'>
                            <p className="text-sm md:text-lg">Units : {room.totalUnits} Room</p>
                            <p className="text-sm md:text-lg">Booked : {room.bookedUnits} Room</p>
                            <p className="text-sm md:text-lg">Available : {room.availableUnits} Room</p>
                        </div>
                    </div>
                    </Motion>
                    <Motion>
                    <div className='py-6 space-y-3'>
                        <p className='text-xl font-serif'>Overview</p>
                        <p className='text-sm max-w-lg'>{room.description}</p>
                    </div>
                    </Motion>
                    <Motion>
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
                    </Motion>
                </div>
                <Motion>
                <div className='flex flex-5'>
                    <BookingForm room={room} />
                </div>
                </Motion>
            </div>
        </div>
    )
}

export default RoomDetails