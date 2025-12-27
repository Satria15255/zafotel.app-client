import React from 'react'
import { PiStarFill, PiStarHalfFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate()

    return (
        <div className='h-auto md:h-auto grid gird-cols-1 md:grid-cols-2 p-2 md:p-8 md:px-10 border border-yellow-400'>
            <div className='flex justify-center gap-2 md:gap-6'>
                <img src="/assets/aboutus.jpg" alt="" className='w-35 h-45 md:w-45 md:h-65 lg:w-[45vh] lg:h-100 mb-12 object-cover' />
                <img src="/assets/aboutus.jpg" alt="" className='w-35 h-45 md:w-45 md:h-65 lg:w-[45vh] lg:h-100 mt-12 object-cover' />
            </div>
            <div className='ml-6'>
                <p className='text-lg lg:text-xl text-yellow-500 font-serif mt-6'>WELCOME TO ZAFOTEL</p>
                <p className='text-xl md:text-3xl lg:text-5xl font-semibold max-w-md py-4'>Luxury Hotel in the Heart of the City</p>
                <p className='text-xs mdtext-sm lg:text-lg pb-4'>Zafotel is a place where every guest comes as a visitor and leaves as family.
                    We believe that true comfort lies not only in a soft bed and a clean room, but in a warm atmosphere that makes you feel at home.
                    Enjoy the tranquility, friendly service, and modern amenities we provide to accompany your every journey.</p>
                <div className='flex text-yellow-300 text-lg md:text-2xl'>
                    <PiStarFill />
                    <PiStarFill />
                    <PiStarFill />
                    <PiStarFill />
                    <PiStarHalfFill />
                </div>
                <p className='text-sm md:text-lg mt-2 font-semibold'>4,9/5 </p>
                <button onClick={() => navigate("/rooms")} className='bg-yellow-300 mt-4 font-serif py-3 hover:bg-[#FFD700] bg-yellow-200 transition duration:100 text-[10px] md:text-sm px-8'>RESERVATION NOW</button>
            </div>
        </div>
    )
}

export default Welcome