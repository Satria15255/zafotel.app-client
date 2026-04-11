import React from 'react'
import { FaCalendarCheck } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import FacilityIcon from './FacilityIcon';
import Motion from "@/components/Motion";


const RoomsCard = ({ rooms, index }) => {
    const navigate = useNavigate()

    return (
        <Motion>
            <div className='w-full bg-gray-900'>
                <div className={`flex flex-col md:flex-row ${!index ? "md:flex-row-reverse" : ""}`}>
                    <div className='relative w-full md:w-1/2 h-full md:h-90'>
                        <img src={rooms.image[0]} alt='standardType' className='w-full h-full object-cover ' />
                    </div>
                    <div className='w-full md:w-1/2 text-white p-2 lg:p-14 flex flex-col justify-around '>
                        <div className='flex justify-between'>
                            <p className='text-lg lg:text-3xl font-serif'>{rooms.name}</p>
                            <p className='text-lg lg:text-2xl font-serif text-[#FDD700]'>${rooms.price} / Night</p>
                        </div>
                        <p className='text-[10px] text-gray-300 md:text-xs lg:text-sm py-2'>{rooms.description}</p>
                        <div className='grid text-gray-300 gap-2 grid-cols-2 mt-4'>
                            {rooms.details.amenities.slice(0, 4).map((amenities) => {
                                const key = amenities.toLowerCase().trim()
                                return (
                                    <div key={amenities} className='flex gap-1 items-center'>
                                        {FacilityIcon[key]}
                                        <p className='text-[10px] md:text-xs lg:text-sm'>{amenities}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='flex w-full gap-1 md:gap-4 mt-3'>
                            <button className='text-xs md:text-xs lg:text-sm py-2 md:py-2 w-1/2 md:px-7 bg-gray-900 border text-white hover:bg-white hover:text-black transition duration-100 flex items-center justify-center gap-2'><FaCalendarCheck />Book Now</button>
                            <button onClick={() => navigate(`/rooms/${rooms._id}`)} className='text-xs md:text-xs lg:text-sm py-2 md:py-2 w-1/2 md:px-7 bg-yellow-500 text-white hover:bg-white hover:text-black transition duration-100'>View Room→</button>
                        </div>
                    </div>
                </div>
            </div>
        </Motion>
    )
}

export default RoomsCard