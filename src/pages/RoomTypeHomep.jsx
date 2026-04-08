import React, { useEffect, useRef, useState } from 'react'
import { FaCalendarCheck } from "react-icons/fa";
import { PiStarFill, PiStarHalfFill } from "react-icons/pi";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { getAllRooms } from '../Api';
import { useNavigate } from 'react-router-dom';
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
        <div className='relative h-auto lg:h-screen p-4 md:p-10 bg-black flex flex-col justify-center items-center'>
            <Motion>
                <div className='py-8 md:pb-10'>
                    <p className='text-white font-serif text-2xl lg:text-4xl text-center'>— Our Finest Rooms —</p>
                    <p className='text-[#FDD700] text-sm md:text-xs lg:text-sm text-center mt-2'>Find your dream type room with collections here</p>
            </div>
            </Motion>
            <Motion delay={0.4}>
                {/* Mobile Version */}
                <div className='md:hidden'>
                    <Carousel
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className='w-auto'>
                <CarouselContent>
                    {rooms.map((room, index) => (
                        <CarouselItem key={index} className='relative'>
                            <div className='w-full h-130 md:h-80 lg:h-auto'>
                                <img src={room.image[0]} alt='standardType' className='w-full h-full object-cover' />
                            </div>
                            <div className='absolute bg-black/40 inset-0 p-2 px-6 space-y-3 flex flex-col justify-between'>
                                <header>
                                    <p className="text-white text-lg font-bold"><span className='text-yellow-300'>${room.price}</span> / Night</p>
                                </header>
                                <footer className='text-white '>
                                    <p className='text-sm font-bold'>{room.name}</p>
                                    <p className='text-xs h-30 max-w-xs'>{room.description}</p>
                                    <div className='flex justify-end'>
                                        <div className='flex items-center text-yellow-300 text-sm'>
                                            <PiStarFill />
                                            <PiStarFill />
                                            <PiStarFill />
                                            <PiStarFill />
                                            <PiStarHalfFill />
                                            <p className='text-sm text-white ml-2'>4.8</p>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </CarouselItem>
                    ))}
                        </CarouselContent>
                    </Carousel>
                </div>

                {/* Desktop Version */}
                <div className="hidden md:flex">
                    {rooms.map((r) => (
                        <div key={r.id} className='relative mx-2' onClick={() => navigate(`/rooms/${r._id}`)}>
                            <div className='w-70 h-110 object-center hover:scale-110 transition duration-200'>
                                <img src={r.image[0]} alt={r.name} className='w-full h-full object-cover object-center' />
                            </div>
                            <div className='absolute flex flex-col justify-between inset-0 p-2 bg-black/30 group'>
                                <header className="opacity-0 group-hover:opacity-100 transition duration-300">
                                    <p className="text-white text-lg font-bold"><span className='text-yellow-300'>${r.price}</span> / Night</p>
                                </header>
                                <footer className='text-white opacity-0  translate-y-10 group-hover:opacity-100 group-hover:translate-y-0  transition-all  duration-300'>
                                    <p className='text-sm font-bold'>{r.name}</p>
                                    <p className='text-xs h-30'>{r.description}</p>
                                    <div className='flex justify-end'>
                                        <div className='flex items-center text-yellow-300 text-sm'>
                                            <PiStarFill />
                                            <PiStarFill />
                                            <PiStarFill />
                                            <PiStarFill />
                                            <PiStarHalfFill />
                                            <p className='text-sm text-white ml-2'>4.8</p>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    ))}
                </div>
            </Motion>
        </div >
    )
}

export default RoomTypeHomep
