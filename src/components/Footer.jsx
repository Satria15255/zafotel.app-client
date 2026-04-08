import React from 'react'
import { PiInstagramLogoDuotone, PiTwitterLogoDuotone, PiThreadsLogoDuotone } from "react-icons/pi";
import { SiTripadvisor, SiTripdotcom } from "react-icons/si";

const Footer = () => {
    return (
        <div className='relative bg-black cursor-default'>
            <div className='h-120 md:h-70 grid grid-cols-1 md:grid-cols-3 place-items-center '>
                <div className='flex flex-col justify-center items-center text-white text-lg'>
                    <p>Address</p>
                    <p>
                        742 Evergreen Terrace
                    </p>
                    <p>
                        Brooklyn, NY 11201
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3'>
                    <p className='text-white text-xl md:text-2xl lg:text-4xl font-serif'><span className='text-[#FFD700] font-serif text-5xl'>Z</span>AFOTEL ⚜</p>
                    <p className='text-white text-sm text-xs lg:text-sm font-light max-w-xs  text-center'>Zafotel is here for modern professionals and travelers who need unlimited comfort amidst the hustle and bustle of the city.</p>
                    <div className=' flex justify-center text-white text-sm lg:text-sm space-x-4 '>
                        <p className='hover:text-yellow-300 transition duration-100 flex items-center gap-1'><span><PiInstagramLogoDuotone size={20} /></span></p>
                        <p className='hover:text-yellow-300 transition duration-100 flex items-center gap-1'><span><PiTwitterLogoDuotone size={20} /></span></p>
                        <p className='hover:text-yellow-300 transition duration-100 flex items-center gap-1'><span><PiThreadsLogoDuotone size={20} /></span></p>
                        <p className='hover:text-yellow-300 transition duration-100 flex items-center gap-1'><span><SiTripadvisor size={20} /></span></p>
                        <p className='hover:text-yellow-300 transition duration-100 flex items-center gap-1'><span><SiTripdotcom size={20} /></span></p>
                    </div>
                </div>
                <div className='text-white flex flex-col justify-center items-center text-lg '>
                    <p>Contact Us</p>
                    <p>
                        T. +929 333 9296
                    </p>
                    <p>
                        M. contact@zafotel.com
                    </p>
                </div>
            </div>
            <div className='border-t border-gray-500'>
                <p className='text-center text-[8px] md:text-xs lg:text-sm text-white py-3'>Copyright© 2025 zafotel.com All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer