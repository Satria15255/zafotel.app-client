import React, { useEffect, useState } from 'react'
import { FaCity, FaCalendarCheck } from "react-icons/fa";
import { LuBedDouble, LuUtensils, LuWifi } from "react-icons/lu";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { TiWiFi } from "react-icons/ti";
import { getAllRooms } from '../Api';
import { useNavigate } from 'react-router-dom';
import FacilityIcon from '../components/FacilityIcon';

const RoomTypeHomep = () => {
    const [rooms, setRooms] = useState([])
    const [mainImage, setMainImage] = useState("")
    const navigate = useNavigate()

    const fetchRooms = async () => {
        try {
            const res = await getAllRooms()
            setRooms(res.data)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (rooms && rooms.image && rooms.image.length > 0) {
            setMainImage(rooms.image[0])
        }
    })

    useEffect(() => {
        fetchRooms()
    }, [])


    return (
        <div className='h-auto md:h-screen p-10 bg-gray-900 flex flex-col justify-center items-center'>
            <div className='mb-5 md:mb-10'>
                <p className='text-white font-serif text-xl md:text-3xl text-center'>Room and Suit Collections</p>
                <p className='text-[#FFD700] text-[10px] md:text-sm text-center mt-2  '>Find your dream type room with collections here</p>
            </div>

            <Carousel className='w-auto'>
                <CarouselContent>
                    {rooms.map((room, index) => (
                        <CarouselItem key={index} className='grid grid-cols-1 md:grid-cols-2 bg-white'>
                            <div>
                                <img src={room.image[0]} alt='standardType' />
                            </div>
                            <div className='p-2 px-6 space-y-3 flex flex-col justify-around'>
                                <p className='text-sm md:text-lg h-10 text-[#FFD700]'>Start From : <span className='text-lg md:text-2xl'>${room.price}/Night</span></p>
                                <p className='text-xl md:text-3xl font-serif'>{room.name}</p>
                                <p className='text-xs md:text-lg font-light max-w-lg'>Enjoy simple comfort with complete amenities in our Standard Room. Designed with a modern and warm feel, this room is ideal for guests who prioritize convenience and comfort while relaxing.</p>
                                <div className='grid gap-2 grid-cols-2'>
                                    {room.details.amenities.slice(0, 4).map((amenities) => {
                                        const key = amenities.toLowerCase().trim()
                                        return (
                                            <div key={amenities} className='flex items-center gap-1 items-center'>
                                                {FacilityIcon[key]}
                                                <p className='text-[10px] md:text-sm'>{amenities}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='flex gap-4'>
                                    <button className='text-[8px] md:text-sm py-1 md:py-2 px-4 md:px-7 bg-gray-900 border text-white hover:bg-white hover:text-black transition duration-100 flex items-center gap-2'><FaCalendarCheck />Book Now</button>
                                    <button onClick={() => navigate(`/rooms/${room._id}`)} className='text-[8px] md:text-sm py-1 md:py-2 px-4 md:px-7 bg-yellow-300 border text-white hover:bg-white hover:text-black transition duration-100'>View Room →</button>
                                </div>
                            </div>

                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='ml-6' />
                <CarouselNext className='mr-6 ' />
            </Carousel>
        </div >
    )
}

export default RoomTypeHomep
