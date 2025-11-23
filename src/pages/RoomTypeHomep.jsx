import React, { useEffect, useState } from 'react'
import { FaCity, FaCalendarCheck } from "react-icons/fa";
import { LuBedDouble, LuUtensils, LuWifi } from "react-icons/lu";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { TiWiFi } from "react-icons/ti";
import { getAllRooms } from '../Api';
import { useNavigate } from 'react-router-dom';

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
        <div className='h-screen p-10 bg-gray-900 flex flex-col justify-center items-center'>
            <div className='mb-10'>
                <p className='text-white text-3xl text-center'>Room and Suit Collections</p>
                <p className='text-white font-serif text-sm text-center mt-2  '>Find your dream type room whith collections here</p>
            </div>

            <Carousel className='w-auto'>
                <CarouselContent>
                    {rooms.map((room, index) => (
                        <CarouselItem key={index} className='grid grid-cols-2 bg-white'>
                            <div className='p-2 px-6 flex flex-col justify-around'>
                                <p className='text-lg h-10 text-[#FFD700]'>Start From : <span className='text-2xl'>${room.price}/Night</span></p>
                                <p className='text-3xl font-serif'>{room.name}</p>
                                <p className='text-lg font-light max-w-lg'>Enjoy simple comfort with complete amenities in our Standard Room. Designed with a modern and warm feel, this room is ideal for guests who prioritize convenience and comfort while relaxing.</p>
                                <div className='grid gap-2 grid-cols-2'>
                                    <div className='flex gap-1 items-center'>
                                        <LuBedDouble />
                                        <p>1 King Bed</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <FaCity />
                                        <p>Street View</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <LuUtensils />
                                        <p>Breakfast</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <TiWiFi />
                                        <p>WiFi</p>
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <button className='py-2 px-7 bg-gray-900 border text-white hover:bg-white hover:text-black transition duration-100 flex items-center gap-2'><FaCalendarCheck />Book Now</button>
                                    <button onClick={() => navigate(`/rooms/${room._id}`)} className='py-2 px-7 bg-yellow-300 border text-white hover:bg-white hover:text-black transition duration-100'>View Room →</button>
                                </div>
                            </div>
                            <div>
                                <img src={room.image[0]} alt='standardType' />
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
