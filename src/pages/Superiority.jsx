import React from 'react'
import { PiCrownLight, PiDiamondsFourLight, PiLampLight, PiMapPinAreaLight } from "react-icons/pi";

const Superiority = () => {
    return (
        <div className='grid grid-cols-4 mt-12 pb-12 h-60 border-b border-[#FFD700] place-items-center'>
            <div className='flex flex-col items-center'>
                <PiMapPinAreaLight size={50} className='text-yellow-300' />
                <p className='text-lg font-semibold mt-2'>Strategic Location</p>
                <p className='text-md text-center max-w-xs font-light'>Close to the city center and popular destinations.</p>
            </div>
            <div className='flex flex-col items-center'>
                <PiCrownLight size={50} className='text-yellow-300' />
                <p className='text-lg font-semibold mt-2'>Friendly & Professional Service </p>
                <p className='text-md text-center max-w-xs font-light'>Our friendly and welcoming staff ensure a delightful stay every time</p>
            </div>
            <div className='flex flex-col items-center'>
                <PiLampLight size={50} className='text-yellow-300' />
                <p className='text-lg font-semibold mt-2'>Modern & Comfortable Design </p>
                <p className='text-md text-center max-w-xs font-light'>Experience a luxurious, modern, and fully equipped space for comfort</p>
            </div>
            <div className='flex flex-col items-center'>
                <PiDiamondsFourLight size={50} className='text-yellow-300' />
                <p className='text-lg font-semibold mt-2'>Complete Amenities </p>
                <p className='text-md text-center max-w-xs font-light'>From the swimming pool to the spa, everything is for your comfort.</p>
            </div>
        </div>
    )
}

export default Superiority