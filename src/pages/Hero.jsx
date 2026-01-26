import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()

    return (
        <div className='w-full flex items-center h-screen  lg:h-screen bg-center bg-cover z-0' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
            <div className='h-screen lg:h-screen flex flex-col justify-center lg:items-center bg-black/20 w-full p-4'>
                <p className='text-sm text-yellow-500'>Rest. Recharge. Rise.</p>
                <p className='text-white text-4xl md:text-5xl lg:text-6xl font-bold'>Stay in Comfort, Feel the Elegance</p>
                <p className='text-left lg:text-center text-white text-sm md:text-sm  max-w-xs md:max-w-lg mt-3'>Zafotel is here for modern professionals and travelers who need unlimited comfort amidst the hustle and bustle of the city.</p>
                <div className='mt-3'>
                    <button onClick={() => navigate("/rooms")} className='rounded-full text-white px-12 py-2 border bg-transparant hover:bg-yellow-500 transition duration-100 text-sm md:text-sm'>BOOKING NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Hero