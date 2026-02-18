import React, { useEffect, useRef, useState } from 'react'
import { FaCalendarCheck } from "react-icons/fa";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { getAllRooms } from '../Api';
import { useNavigate } from 'react-router-dom';
import FacilityIcon from '../components/FacilityIcon';
import Autoplay from "embla-carousel-autoplay"
import Motion from "@/components/Motion";

const RoomTypeHomep = () => {
    const [rooms, setRooms] = useState([])
    const [mainImage, setMainImage] = useState("")
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )
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
        <div className='h-auto lg:h-screen p-10 bg-gray-900 flex flex-col justify-center items-center'>
            <Motion>
            <div className='mb-5 md:mb-10'>
                <p className='text-white font-serif text-xl md:text-2xl lg:text-3xl text-center'>Room and Suit Collections</p>
                <p className='text-[#FFD700] text-[10px] md:text-xs lg:text-sm text-center mt-2  '>Find your dream type room with collections here</p>
            </div>
            </Motion>

            <Motion delay={0.4}>
            <Carousel
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className='w-auto'>
                <CarouselContent>
                    {rooms.map((room, index) => (
                        <CarouselItem key={index} className='grid grid-cols-1 lg:grid-cols-2 bg-white'>
                            <div className='w-full h-50 md:h-80 lg:h-auto'>
                                <img src={room.image[0]} alt='standardType' className='w-full h-full object-cover' />
                            </div>
                            <div className='p-2 px-6 space-y-3 flex flex-col justify-around'>
                                <p className='text-sm md:text-lg h-10 text-[#FFD700]'>Start From : <span className='text-lg md:text-2xl'>${room.price}/Night</span></p>
                                <p className='text-xl md:text-3xl font-serif'>{room.name}</p>
                                <p className='hidden md:flex text-xs md:text-sm lg:text-lg font-light lg:max-w-lg'>{room.description}</p>
                                <div className='grid gap-2 grid-cols-2'>
                                    {room.details.amenities.slice(0, 4).map((amenities) => {
                                        const key = amenities.toLowerCase().trim()
                                        return (
                                            <div key={amenities} className='flex items-center gap-1 items-center'>
                                                {FacilityIcon[key]}
                                                <p className='text-[10px] md:text-xs lg:text-sm'>{amenities}</p>
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
            </Motion>
        </div >
    )
}

export default RoomTypeHomep
