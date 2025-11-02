import React from 'react'

const Hero = () => {
    return (
        <div className='w-full h-full bg-center bg-cover z-0' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
            <div className='h-screen flex flex-col justify-center items-center bg-black/20 w-full p-9'>
                <p className='text-sm text-yellow-500'>Rest. Recharge. Rise.</p>
                <p className='text-white text-6xl font-bold'>Stay in Comfort, Feel the Elegance</p>
                <p className='text-white text-sm text-center max-w-md mt-3'>Zafotel is here for modern professionals and travelers who need unlimited comfort amidst the hustle and bustle of the city.</p>
                <div className='mt-3'>
                    <button className='rounded-full text-white px-12 py-2 border bg-transparant hover:bg-yellow-500 transition duration-100 text-sm'>BOOKING NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Hero