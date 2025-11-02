import React from 'react'
import { PiStarFill, PiStarHalfFill } from "react-icons/pi";

const Welcome = () => {
    return (
        <div className='h-screen grid grid-cols-2 p-8 px-10 border border-yellow-400'>
            <div className='flex gap-6'>
                <img src="/assets/aboutus.jpg" alt="" className='w-[45vh] h-100 mt-12' />
                <img src="/assets/aboutus.jpg" alt="" className='w-[45vh] h-100 mb-12' />
            </div>
            <div className='ml-6'>
                <p className='text-xl text-yellow-500 font-serif mt-6'>WELCOME TO ZAFOTEL</p>
                <p className='text-5xl font-semibold max-w-md py-4'>Luxury Hotel in the Heart of the City</p>
                <p className='text-lg pb-4'>Zafotel is a place where every guest comes as a visitor and leaves as family.
                    We believe that true comfort lies not only in a soft bed and a clean room, but in a warm atmosphere that makes you feel at home.
                    Enjoy the tranquility, friendly service, and modern amenities we provide to accompany your every journey.</p>
                <div className='flex text-yellow-300 text-2xl'>
                    <PiStarFill />
                    <PiStarFill />
                    <PiStarFill />
                    <PiStarFill />
                    <PiStarHalfFill />
                </div>
                <p className='text-lg mt-2 font-semibold'>4,9/5 </p>
                <button className='bg-yellow-300 mt-4 font-serif py-3 hover:bg-[#FFD700] bg-yellow-200 transition duration:100 text-sm px-8'>RESERVATION NOW</button>
            </div>
        </div>
    )
}

export default Welcome