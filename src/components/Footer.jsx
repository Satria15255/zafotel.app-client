import React from 'react'
import { PiInstagramLogoDuotone, PiTwitterLogoDuotone, PiThreadsLogoDuotone } from "react-icons/pi";
import { SiTripadvisor, SiTripdotcom } from "react-icons/si";

const Footer = () => {
    return (
        <div className=' bg-gray-900 cursor-default'>
            <div className='h-auto grid grid-cols-1 md:grid-cols-4 px-5 py-7 md:place-items-center space-y-4'>
                <div>
                    <p className='text-white text-xl md:text-3xl font-bold font-sans'><span className='text-[#FFD700] font-serif text-4xl'>Z</span>afotel</p>
                    <p className='text-white text-xs md:text-sm font-light max-w-xs mt-2'>Zafotel is here for modern professionals and travelers who need unlimited comfort amidst the hustle and bustle of the city.</p>
                </div>
                <div className='text-white text-sm space-y-2'>
                    <li className='hover:text-yellow-300 transition duration-100'>Rooms</li>
                    <li className='hover:text-yellow-300 transition duration-100'>About</li>
                    <li className='hover:text-yellow-300 transition duration-100'>Booking</li>
                    <li className='hover:text-yellow-300 transition duration-100'>Facilites</li>
                    <li className='hover:text-yellow-300 transition duration-100'>Contact</li>
                </div>
                <div className='text-white text-sm space-y-2'>
                    <li className='hover:text-yellow-300 transition duration-100'>How To Book</li>
                    <li className='hover:text-yellow-300 transition duration-100'>Privacy Policy</li>
                    <li className='hover:text-yellow-300 transition duration-100'>Terms of Service</li>
                    <li className='hover:text-yellow-300 transition duration-100'>FAQ</li>
                    <li className='hover:text-yellow-300 transition duration-100'>Support</li>
                </div>
                <div className='text-white text-sm space-y-2'>
                    <li className='hover:text-yellow-300 transition duration-100 flex items-center gap-1'><span><PiInstagramLogoDuotone size={20} /></span>Instagram</li>
                    <li className='hover:text-yellow-300 transition duration-100 flex items-center gap-1'><span><PiTwitterLogoDuotone size={20} /></span>Twitter</li>
                    <li className='hover:text-yellow-300 transition duration-100 flex items-center gap-1'><span><PiThreadsLogoDuotone size={20} /></span>Threads</li>
                    <li className='hover:text-yellow-300 transition duration-100 flex items-center gap-1'><span><SiTripadvisor size={20} /></span>Tripadvisor</li>
                    <li className='hover:text-yellow-300 transition duration-100 flex items-center gap-1'><span><SiTripdotcom size={20} /></span>Trip.com</li>
                </div>
            </div>
            <div className='border-t border-gray-500'>
                <p className='text-center text-[8px] md:text-sm text-white py-3'>Copyright© 2025 Zafaris.Co All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer