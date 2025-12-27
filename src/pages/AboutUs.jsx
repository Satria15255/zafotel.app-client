import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
    const navigate = useNavigate()

    return (
        <div className='h-auto bg-white p-3 md:p-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 place-items-center space-y-4'>
                <div className='flex'>
                    <p className='text-[180px] flex mb-10 justify-center text-gray-300'>[  <span className='text-6xl text-black flex items-center mt-10 justify-center font-bold font-sans'>
                        10
                        <div className='flex flex-col justify-center'>
                            <p className='text-sm font-bold'>Years Of</p>
                            <p className='text-sm font-bold'>Excellent </p>
                            <p className='text-sm font-bold'>Service </p>
                        </div></span>  ]
                    </p>
                </div>
                <div className='flex flex-col justify-center pl-2'>
                    <p className='mb-6 text-yellow-500 font-semibold'>ABOUT US</p>
                    <p className='text-3xl md:text-4xl lg:text-5xl max-w-xs font-serif'>Where Every Stay Feels Special.</p>
                </div>
                <div className='mt-5 md:mt-0 pl-2'>
                    <p className='font-serif text-[12px] md:text-xs'><span className='font-bold text-sm md:text-lg'>Zafotel</span> is a place where every guest comes as a visitor and leaves as family.
                        We believe that true comfort lies not only in a soft bed and a clean room, but in a warm atmosphere that makes you feel at home.
                        Enjoy the tranquility, friendly service, and modern amenities we provide to accompany your every journey.</p>

                    <p className='font-serif text-[12px] md:text-xs mt-6'>At Zafotel, we don't just provide a place to stay—we create a space where you can rest, smile, and feel at ease.</p>
                    <button onClick={() => navigate("/about")} className='py-2 px-9 border rounded-full bg-black text-white font-sans text-[10px] md:text-xs mt-5 hover:bg-white hover:text-black transition duration-100'> READ MORE ——▸</button>
                </div>
            </div>

        </div>
    )
}

export default AboutUs