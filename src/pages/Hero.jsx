import React from 'react'
import { useNavigate } from 'react-router-dom'
import Superiority from "./Superiority"
import Motion from '@/components/Motion'

const Hero = () => {
    const navigate = useNavigate()

    return (
        <Motion variant="fadeIn">
        <div className=' relative w-full flex items-center h-screen lg:h-screen bg-center bg-cover z-0' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
            <div className='h-screen lg:h-screen flex flex-col justify-center lg:items-center bg-black/60 w-full p-4'>
                    <Motion>
                <p className='text-sm text-yellow-500'>Rest. Recharge. Rise.</p>
                    </Motion>
                    <Motion delay={0.2}>
                <p className='text-white text-4xl md:text-5xl lg:text-6xl font-playfair'>Stay in Comfort, Feel the Elegance</p>
                    </Motion>
                    <Motion delay={0.4}>
                <p className='text-left lg:text-center text-white text-sm md:text-sm  max-w-xs md:max-w-lg mt-3'>Zafotel is here for modern professionals and travelers who need unlimited comfort amidst the hustle and bustle of the city.</p>
                    </Motion>
                    <Motion delay={0.6}>
                <div className='mt-3'>
                    <button onClick={() => navigate("/rooms")} className='rounded-full text-white px-12 py-2 border bg-transparant hover:bg-yellow-500 transition duration-100 text-sm md:text-sm'>BOOKING NOW</button>
                </div>
                    </Motion>
                </div>
        </div>
        </Motion>
    )
}

export default Hero