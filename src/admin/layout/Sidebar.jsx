import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PiCalendarCheckBold, PiDoorOpenBold, PiBookOpenTextBold, PiEnvelopeSimpleDuotone, PiSealCheckBold } from "react-icons/pi";

const Sidebar = () => {
    const navigate = useNavigate()

    return (
        <div className='w-80 bg-gray-900 h-screen'>
            <div className='p-4'>
                <p className='text-white text-2xl font-semibold'><span className='font-serif text-4xl text-[#FFD700]'>Z</span>afotel <span className='text-4xl font-serif'>L</span>uxury</p>
            </div>
            <div className='flex flex-col text-white text-md font-bold cursor-default'>
                <p onClick={() => navigate('/admin/rooms')} className='flex items-center gap-2 border-b border-gray-600 py-3 px-4 hover:text-[#FFD700] transition duration-100'><PiDoorOpenBold />Room</p>
                <p onClick={() => navigate('/admin/bookinghistory')} className='flex items-center gap-2 border-b border-gray-600 py-3 px-4 hover:text-[#FFD700] transition duration-100'><PiCalendarCheckBold />Booking</p>
                <p onClick={() => navigate('/admin/informations')} className='flex items-center gap-2 border-b border-gray-600 py-3 px-4 hover:text-[#FFD700] transition duration-100'><PiBookOpenTextBold />Information</p>
                <p onClick={() => navigate('/admin')} className='flex items-center gap-2 border-b border-gray-600 py-3 px-4 hover:text-[#FFD700] transition duration-100'><PiSealCheckBold />Facilities</p>
                <p onClick={() => navigate('/admin')} className='flex items-center gap-2 border-b border-gray-600 py-3 px-4 hover:text-[#FFD700] transition duration-100'><PiEnvelopeSimpleDuotone />Message</p>
            </div>
        </div>
    )
}

export default Sidebar