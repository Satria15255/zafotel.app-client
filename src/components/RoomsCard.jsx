import React from 'react'
import { FaCity, FaCalendarCheck } from "react-icons/fa";
import { LuBedDouble, LuUtensils, LuWifi } from "react-icons/lu";
import { TiWiFi } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';


const RoomsCard = ({ rooms }) => {
    const navigate = useNavigate()

    return (
        <div className='w-auto'>
            <div>
                {rooms.map((room, index) => (
                    <div key={index} className='grid grid-cols-2 bg-white p-8 '>
                        <div>
                            <img src={room.image[0]} alt='standardType' />
                        </div>
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

                    </div>
                ))}
            </div>

        </div>
    )
}

export default RoomsCard