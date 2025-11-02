import React from 'react'
import { FaCity, FaCalendarCheck } from "react-icons/fa";
import { LuBedDouble, LuUtensils, LuWifi } from "react-icons/lu";
import { TiWiFi } from "react-icons/ti";
import standardImg from '../assets/roomtype/standardtype_11zon.jpg'
import deluxeImg from '../assets/roomtype/deluxe.jpeg'
import executiveImg from '../assets/roomtype/executive.jpeg'
import presidentialImg from '../assets/roomtype/presidential.jpeg'


const RoomTypeHomep = () => {
    return (
        <div className='h-screen p-8 bg-gray-900 flex flex-col justify-center items-center'>
            <div className='mb-10'>
                <p className='text-white text-3xl text-center'>Room and Suit Collections</p>
                <p className='text-white font-serif text-sm text-center mt-2  '>Find your dream type room whith collections here</p>
            </div>
            <div className='grid grid-cols-2 bg-white cursor-pointer'>
                <div className='p-2 px-6 flex flex-col justify-around'>
                    <p className='text-lg h-10 text-[#FFD700]'>Start From : <span className='text-2xl'>$120/Night</span></p>
                    <p className='text-3xl font-serif'>Standard room</p>
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
                        <button className='py-2 px-7 bg-yellow-300 border text-white hover:bg-white hover:text-black transition duration-100'>View Room →</button>
                    </div>
                </div>
                <div>
                    <img src={standardImg} alt='standardType' />
                </div>
            </div>
        </div >
    )
}

{/* <div className='relative group w-[45vh] h-100 bg-cover bg-center' style={{ backgroundImage: `url(${standardImg})` }}>
                    <div className='h-100 p-8 flex flex-col justify-between bg-black/10 hover:bg-black/40 transition duration-100'>
                        <h2 className='text-white font-semibold text-lg max-w-xs'>Standard Room</h2>
                        <div>
                            <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-500 py-7 text-[9px] text-white'>Enjoy simple comfort with complete amenities in our Standard Room. Designed with a modern and warm feel, this room is ideal for guests who prioritize convenience and comfort while relaxing.</p>
                            <p className='text-xs text-white font-semibold'>CHECK ROOM</p>
                        </div>
                    </div>
                </div> */}
export default RoomTypeHomep
