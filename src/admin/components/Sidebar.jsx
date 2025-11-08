import React from 'react'

const Sidebar = () => {
    return (
        <div className='w-80 bg-gray-900 h-screen'>
            <div className='p-4'>
                <p className='text-white text-2xl font-semibold'><span className='font-serif text-4xl text-[#FFD700]'>Z</span>afotel <span className='text-4xl font-serif'>L</span>uxury</p>
            </div>
            <div className='flex flex-col text-white text-md font-bold cursor-default'>
                <p className='border-b border-gray-600 py-3 px-4 hover:text-[#FFD700] transition duration-100'>Room</p>
                <p className='border-b border-gray-600 py-3 px-4 hover:text-[#FFD700] transition duration-100'>Booking</p>
                <p className='border-b border-gray-600 py-3 px-4 hover:text-[#FFD700] transition duration-100'>Information</p>
                <p className='border-b border-gray-600 py-3 px-4 hover:text-[#FFD700] transition duration-100'>Facilities</p>
                <p className='border-b border-gray-600 py-3 px-4 hover:text-[#FFD700] transition duration-100'>Message</p>
            </div>
        </div>
    )
}

export default Sidebar