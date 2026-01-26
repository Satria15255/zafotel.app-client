import React from 'react'
import { FaCity, FaCalendarCheck } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import FacilityIcon from './FacilityIcon';


const RoomsCard = ({ rooms }) => {
    const navigate = useNavigate()

    return (
        <div className='w-full'>
                {rooms.map((room, index) => (
                    <div key={index} className=' bg-white p-2 md:p-8 shadow-lg'>
                        <div className='border grid grid-cols-1 lg:grid-cols-2 rounded-lg'>
                            <div className='w-full md:h-80 lg:h-auto'>
                                <img src={room.image[0]} alt='standardType' className='md:w-full md:h-full object-cover rounded-lg' />
                        </div>
                            <div className='py-5 p-2 md:px-6 flex flex-col justify-around'>
                            <p className='text-sm md:text-lg h-10 text-[#FFD700]'>Start From : <span className='text-lg md:text-2xl'>${room.price}/Night</span></p>
                            <p className='text-lg md:text-3xl font-serif'>{room.name}</p>
                                <p className='text-[10px] lg:max-w-lg md:text-sm lg:text-lg font-light py-2'>{room.description}</p>
                                <div className='grid gap-2 grid-cols-2 mt-4'>
                                {room.details.amenities.slice(0, 6).map((amenities) => {
                                    const key = amenities.toLowerCase().trim()
                                    return (
                                        <div key={amenities} className='flex gap-1 items-center'>
                                            {FacilityIcon[key]}
                                            <p className='text-[10px] md:text-xs lg:text-sm'>{amenities}</p>
                                        </div>
                                    )
                                })}
                            </div>
                                <div className='flex gap-4 mt-3'>
                                    <button className='text-[9px] md:text-xs lg:text-sm py-1 md:py-2 px-4 md:px-7 bg-gray-900 border text-white hover:bg-white hover:text-black transition duration-100 flex items-center gap-2'><FaCalendarCheck />Book Now</button>
                                    <button onClick={() => navigate(`/rooms/${room._id}`)} className='text-[9px] md:text-xs lg:text-sm py-1 md:py-2 px-4 md:px-7 bg-yellow-300 border text-white hover:bg-white hover:text-black transition duration-100'>View Room →</button>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

    )
}

export default RoomsCard