import React, { useEffect, useState } from 'react'
import { PiStarFill, PiStarHalfFill, PiBuildingApartmentLight, PiBusLight, PiCoffeeLight, PiFlowerLotusLight, PiPersonSimpleSwimLight } from "react-icons/pi";
import { MdAccessTime } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Superiority from './Superiority';
import Motion from "@/components/Motion"
import Loader from '../components/GlobalLoader'

const facilities = [
    {
        id: 1,
        icon: <PiPersonSimpleSwimLight />,
        title: "Swimming Pool",
        description: "Enjoy the pool in a calm and comfortable atmosphere."
    },
    {
        id: 2,
        icon: <PiCoffeeLight />,
        title: "Cafe & Restaurant",
        description: "Serve the best flavors from our hand-picked chefs."
    },
    {
        id: 3,
        icon: <PiFlowerLotusLight />,
        title: "SPA & Massage",
        description: "Relax your body and mind with professional spa services."
    },
    {
        id: 4,
        icon: <MdAccessTime />,
        title: "24 Hours Recipcionist",
        description: "Our receptionist is ready to assist you whenever you need him."
    },
    {
        id: 5,
        icon: <PiBusLight />,
        title: "Airport Shuttle Service",
        description: "Convenient and timely airport pick-up and drop-off."
    },
    {
        id: 6,
        icon: <PiBuildingApartmentLight />,
        title: "Function Room",
        description: "multi-purpose room for meetings, events, or private gatherings."
    }
]

const AboutUsPage = () => {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    if (loading) return <Loader />
    return (
        <div className='w-full h-auto'>
            <Motion variant="fadeIn">
                <div className='w-full h-full bg-center bg-cover z-0' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
                    <div className='h-80 flex flex-col justify-center items-center bg-black/40 w-full p-9'>
                        <p className='text-4xl md:text-6xl text-white border-b border-yellow-500 pb-2'>About Zafotel</p>
                        <p className='text-lg md:text-xl text-white'><span onClick={() => navigate("/")}>Home</span> / About</p>
                    </div>
                </div>
            </Motion>
            <Motion>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-3 place-items-center justify-around items-center space-y-4 mt-8 px-3 lg:px-6'>
                        <div className='flex justify-center gap-2 lg:gap-6 lg:pl-6'>
                            <img src="/assets/aboutus.jpg" alt="" className='w-40  md:w-30 rounded-sm h-55 md:h-65 lg:w-60 lg:h-100 mb-12 object-cover' />
                            <img src="/assets/aboutus2.jpg" alt="" className='w-40 md:w-30 rounded-sm h-55 md:h-65 lg:w-60 lg:h-100 mt-12 object-cover' />
                        </div>
                        <div className='flex items-center'>
                            <div className='text-[140px] md:text-[120px] lg:text-[250px] flex items-center justify-center text-gray-200'>[  <span className='text-8xl text-black flex items-center justify-center mt-10 md:mt-8 lg:mt-14 font-bold font-sans'>
                                10
                                <div className='flex flex-col justify-center '>
                                    <p className='text-xs lg:text-lg font-bold'>Years Of</p>
                                    <p className='text-xs lg:text-lg font-bold'>Excellent </p>
                                    <p className='text-xs lg:text-lg font-bold'>Service </p>
                                </div></span>  ]
                            </div>
                        </div>
                        <div>
                            <p className='mb-6 text-yellow-500 font-semibold'>ABOUT US</p>
                            <p className='text-3xl lg:text-5xl max-w-xs font-serif'>Where Every Stay Feels Special.</p>
                        </div>
                    </div>
                </div>
            </Motion>
            <div className='px-3 lg:px-0 mt-12'>
                <Motion>
                    <div className='px-6'>
                        <p className='text-lg md:text-xl text-yellow-500 font-serif mt-6'>WELCOME TO ZAFOTEL</p>
                        <p className='text-xl md:text-3xl font-semibold py-4'>Luxury Hotel in the Heart of the City</p>
                        <p className='font-serif text-[12px] md:text-sm lg:text-lg'><span className='font-bold text-sm md:text-lg'>Zafotel</span> is a place where every guest comes as a visitor and leaves as family.
                            We believe that true comfort lies not only in a soft bed and a clean room, but in a warm atmosphere that makes you feel at home.
                            Enjoy the tranquility, friendly service, and modern amenities we provide to accompany your every journey.</p>
                        <p className='font-serif text-[12px] md:text-sm lg:text-lg mt-6'>At Zafotel, we don't just provide a place to stay—we create a space where you can rest, smile, and feel at ease.</p>
                        <div className='flex text-yellow-300 text-lg md:text-2xl mt-6'>
                            <PiStarFill />
                            <PiStarFill />
                            <PiStarFill />
                            <PiStarFill />
                            <PiStarHalfFill />
                        </div>
                        <p className='text-sm md:text-lg mt-2 font-semibold'>4,9/5 </p>
                    </div>
                </Motion>
                <Motion>
                    <div className='w-full'>
                        <p className='text-lg text-center md:text-xl text-yellow-500 font-serif mt-12'>Why Chose Zafotel?</p>
                        <Superiority />
                    </div>
                </Motion>
                <Motion>
                    <div>
                        <p className='text-lg text-center md:text-xl text-yellow-500 px-6 font-serif mt-12'>Zafotel Faciities</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center cursor-default'>
                            {facilities.map((f) => (
                                           <Motion delay={0.4}>
                                               <div className='w-90 lg:w-110 h-50 gap-4 transition duration-100 flex justify-center items-center font-semibold '>
                                                   <span className="text-4xl lg:text-6xl p-4 text-white bg-[#c69c6d] border rounded-xl">{f.icon}</span>
                                                   <div className='flex flex-col'>
                                                       <p className='text-lg '>{f.title}</p>
                                                       <p className='text-sm max-w-[180px] mt-2 font-light'>{f.description}</p>
                                                   </div>
                                               </div>
                                           </Motion>
                                       ))}
                        </div>
                    </div>
                </Motion>
            </div>
        </div>
    )
}

export default AboutUsPage