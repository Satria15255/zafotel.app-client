import React from 'react'
import { FaBookOpen, FaRunning, FaSwimmer, FaCoffee, FaBusAlt } from "react-icons/fa";
import { MdAccessTime, MdAirportShuttle, MdMeetingRoom } from "react-icons/md";
import { PiBuildingApartmentLight, PiBusLight, PiCoffeeLight, PiFlowerLotusLight, PiPersonSimpleSwimLight } from "react-icons/pi";
import { GiLotus } from "react-icons/gi";


const HotelFacilities = () => {
    return (
        <div className='h-auto'>
            <p className='text-xl text-center text-[#FFD700] font-serif mt-12'>
                Facilities
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 place-items-center cursor-default'>
                <div className='w-80 h-30 md:h-60 gap-2 hover:text-[#FFD700] transition duration-100 flex justify-center items-center font-semibold'>
                    <PiPersonSimpleSwimLight size={60} className='text-yellow-300' />
                    <div className='flex flex-col'>
                        <p className='text-xs md:text-sm'>Swimming Pool</p>
                        <p className='text-xs md:text-sm max-w-[180px] mt-2 font-light'>Enjoy the pool in a calm and comfortable atmosphere.</p>
                    </div>
                </div>
                <div className='w-80 h-30 md:h-60 gap-2 hover:text-[#FFD700] transition duration-100 flex justify-center items-center font-semibold'>
                    <PiCoffeeLight size={60} className='text-yellow-300' />
                    <div className='flex flex-col'>
                        <p className='text-xs md:text-sm'>Cafe & Restaurant</p>
                        <p className='text-xs md:text-sm max-w-[180px] mt-2 font-light'>Serve the best flavors from our hand-picked chefs.</p>
                    </div>
                </div>
                <div className='w-80 h-30 md:h-60 gap-2 hover:text-[#FFD700] transition duration-100 flex justify-center items-center font-semibold'>
                    <PiFlowerLotusLight size={60} className='text-yellow-300' />
                    <div className='flex flex-col'>
                        <p className='text-xs md:text-sm'>SPA & Massage</p>
                        <p className='text-xs md:text-sm max-w-[180px]  mt-2 font-light'>Relax your body and mind with professional spa services.</p>
                    </div>
                </div>
                <div className='w-80 h-30 md:h-60 gap-2 hover:text-[#FFD700] transition duration-100 flex justify-center items-center font-semibold'>
                    <MdAccessTime size={60} className='text-yellow-300' />
                    <div className='flex flex-col'>
                        <p className='text-xs md:text-sm'>24 Hours Recipcionist</p>
                        <p className='text-xs md:text-sm max-w-[180px]  mt-2 font-light'>Our receptionist is ready to assist you whenever you need him.</p>
                    </div>
                </div>
                <div className='w-80 h-30 md:h-60 gap-2 flex hover:text-[#FFD700] transition duration-100 justify-center items-center font-semibold'>
                    <PiBusLight size={60} className='text-yellow-300' />
                    <div className='flex flex-col'>
                        <p className='text-xs md:text-sm'>Airport shuttle service</p>
                        <p className='text-xs md:text-sm max-w-[180px]  mt-2 font-light'>Convenient and timely airport pick-up and drop-off.</p>
                    </div>
                </div>
                <div className='w-80 h-30 md:h-60 gap-2 flex hover:text-[#FFD700] transition duration-100  justify-center items-center font-semibold'>
                    <PiBuildingApartmentLight size={60} className='text-yellow-300' />
                    <div className='flex flex-col'>
                        <p className='text-xs md:text-sm'>Function Room</p>
                        <p className='text-xs md:text-sm max-w-[180px]  mt-2 font-light'>multi-purpose room for meetings, events, or private gatherings.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HotelFacilities