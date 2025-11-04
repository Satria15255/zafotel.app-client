import React from 'react'
import { PiInstagramLogoDuotone, PiTwitterLogoDuotone, PiThreadsLogoDuotone } from "react-icons/pi";
import { SiTripadvisor, SiTripdotcom } from "react-icons/si";

const Footer = () => {
    return (
        <div className=' bg-gray-900 cursor-default'>
            <div className='h-60 grid grid-cols-4 px-5 place-items-center '>
                <div>
                    <p className='text-white  text-3xl font-bold font-sans'><span className='text-[#FFD700] font-serif text-4xl'>Z</span>afotel</p>
                    <p className='text-white text-sm font-light max-w-xs mt-2'>Zafotel is here for modern professionals and travelers who need unlimited comfort amidst the hustle and bustle of the city.</p>
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
                    <p className='hover:text-yellow-300 transition duration-100 flex items-center gap-1'><span><PiInstagramLogoDuotone size={20} /></span>Instagram</p>
                    <p className='hover:text-yellow-300 transition duration-100 flex items-center gap-1'><span><PiTwitterLogoDuotone size={20} /></span>Twitter</p>
                    <p className='hover:text-yellow-300 transition duration-100 flex items-center gap-1'><span><PiThreadsLogoDuotone size={20} /></span>Threads</p>
                    <p className='hover:text-yellow-300 transition duration-100 flex items-center gap-1'><span><SiTripadvisor size={20} /></span>Tripadvisor</p>
                    <p className='hover:text-yellow-300 transition duration-100 flex items-center gap-1'><span><SiTripdotcom size={20} /></span>Trip.com</p>
                </div>
            </div>
            <div className='border-t border-gray-500'>
                <p className='text-center text-sm text-white py-3'>Copyright© 2025 Zafaris.Co All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer