import React from 'react'
import { PiStarFill, PiStarHalfFill, PiCrownLight, PiDiamondsFourLight, PiLampLight, PiMapPinAreaLight, PiBuildingApartmentLight, PiBusLight, PiCoffeeLight, PiFlowerLotusLight, PiPersonSimpleSwimLight } from "react-icons/pi";
import { MdAccessTime } from "react-icons/md";


const AboutUsPage = () => {
    return (
        <div className='w-full h-auto'>
            <div className='w-full h-full bg-center bg-cover z-0' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
                <div className='h-80 flex flex-col justify-center items-center bg-black/20 w-full p-9'>
                    <p className='text-xl text-white'>Home / About</p>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 place-items-center space-y-4 mt-8 px-6'>
                    <div className='flex justify-center gap-2 md:gap-6'>
                        <img src="/assets/aboutus.jpg" alt="" className='w-35 h-45 md:w-[30vh] md:h-60 mt-12' />
                        <img src="/assets/aboutus.jpg" alt="" className='w-35 h-45 md:w-[30vh] md:h-60 mb-12' />
                    </div>
                    <div className='flex'>
                        <p className='text-[180px] flex items-center justify-center text-gray-300'>[  <span className='text-6xl text-black flex items-center justify-center mt-10 font-bold font-sans'>
                            10
                            <div className='flex flex-col justify-center '>
                                <p className='text-sm font-bold'>Years Of</p>
                                <p className='text-sm font-bold'>Excellent </p>
                                <p className='text-sm font-bold'>Service </p>
                            </div></span>  ]
                        </p>
                    </div>
                    <div>
                        <p className='mb-6 text-yellow-500 font-semibold'>ABOUT US</p>
                        <p className='text-3xl md:text-5xl max-w-xs font-serif'>Where Every Stay Feels Special.</p>
                    </div>
                </div>
            </div>
            <div className='px-10 mt-12'>
                <div>
                    <p className='text-lg md:text-xl text-yellow-500 font-serif mt-6'>WELCOME TO ZAFOTEL</p>
                    <p className='text-xl md:text-3xl font-semibold py-4'>Luxury Hotel in the Heart of the City</p>
                    <p className='font-serif text-[12px] md:text-lg'><span className='font-bold text-sm md:text-lg'>Zafotel</span> is a place where every guest comes as a visitor and leaves as family.
                        We believe that true comfort lies not only in a soft bed and a clean room, but in a warm atmosphere that makes you feel at home.
                        Enjoy the tranquility, friendly service, and modern amenities we provide to accompany your every journey.</p>
                    <p className='font-serif text-[12px] md:text-lg mt-6'>At Zafotel, we don't just provide a place to stay—we create a space where you can rest, smile, and feel at ease.</p>
                    <div className='flex text-yellow-300 text-lg md:text-2xl mt-6'>
                        <PiStarFill />
                        <PiStarFill />
                        <PiStarFill />
                        <PiStarFill />
                        <PiStarHalfFill />
                    </div>
                    <p className='text-sm md:text-lg mt-2 font-semibold'>4,9/5 </p>
                </div>
                <div className='w-full'>
                    <p className='text-lg md:text-xl text-yellow-500 font-serif mt-12'>WHY CHOSE ZAFOTEL?</p>
                    <div className='grid grid-cols-1 md:grid-cols-4 mt-12 px-6 pb-12 h-auto  border-b border-[#FFD700]  space-y-4'>
                        <div className='flex flex-col items-center justify-between w-70 h-40 '>
                            <div className='flex flex-col items-center'>
                                <PiMapPinAreaLight size={60} className='text-yellow-300' />
                                <p className='text-sm md:text-lg font-semibold mt-2'>Strategic Location</p>
                            </div>
                            <p className='text-sm h-6 text-center font-light'>Close to the city center and popular destinations.</p>
                        </div>
                        <div className='flex flex-col items-center justify-between w-70 h-40 '>
                            <div className='flex flex-col items-center'>
                                <PiDiamondsFourLight size={60} className='text-yellow-300' />
                                <p className='text-sm md:text-lg font-semibold mt-2'>Complete Amenities </p>
                            </div>
                            <p className='text-sm h-6 md:text-md text-center font-light'>From the swimming pool to the spa, everything is for your comfort.</p>
                        </div>
                        <div className='flex flex-col items-center justify-between w-70 h-40'>
                            <div className='flex flex-col items-center'>
                                <PiCrownLight size={60} className='text-yellow-300' />
                                <p className='text-sm md:text-lg font-semibold mt-2'>Friendly & Professional Service </p>
                            </div>
                            <p className='text-sm h-6 md:text-md text-center font-light'>Our friendly and welcoming staff ensure a delightful stay every time</p>
                        </div>
                        <div className='flex flex-col items-center justify-between w-70 h-40 '>
                            <div className='flex flex-col items-center'>
                                <PiLampLight size={60} className='text-yellow-300' />
                                <p className='text-sm md:text-lg font-semibold mt-2'>Modern & Comfortable Design </p>
                            </div>
                            <p className='text-sm h-6 md:text-md text-center font-light'>Experience a luxurious, modern, and fully equipped space for comfort</p>
                        </div>


                    </div>
                </div>
                <div>
                    <p className='text-lg md:text-xl text-yellow-500 font-serif mt-12'>ZAFOTEL FACILITIES</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 place-items-center cursor-default'>
                        <div className='w-80 h-30 md:h-60 gap-2 hover:text-[#FFD700] transition duration-100 flex justify-center items-center font-semibold'>
                            <PiPersonSimpleSwimLight size={60} className='text-yellow-300' />
                            <div className='flex flex-col'>
                                <p className='text-xs md:text-sm'>Swimming Pool</p>
                                <p className='text-xs md:text-sm max-w-[180px] mt-2 font-light'>Enjoy the pool in a calm and comfortable atmosphere.</p>
                            </div>
                        </div>
                        <div className='w-80 h-30 md:h-60 gap-2 hover:text-[#FFD700] transition duration-100 flex justify-center items-center font-semibold'>
                            <PiCoffeeLight size={60} className='text-yellow-300' />
                            <div className='flex flex-col'>
                                <p className='text-xs md:text-sm'>Cafe & Restaurant</p>
                                <p className='text-xs md:text-sm max-w-[180px] mt-2 font-light'>Serve the best flavors from our hand-picked chefs.</p>
                            </div>
                        </div>
                        <div className='w-80 h-30 md:h-60 gap-2 hover:text-[#FFD700] transition duration-100 flex justify-center items-center font-semibold'>
                            <PiFlowerLotusLight size={60} className='text-yellow-300' />
                            <div className='flex flex-col'>
                                <p className='text-xs md:text-sm'>SPA & Massage</p>
                                <p className='text-xs md:text-sm max-w-[180px]  mt-2 font-light'>Relax your body and mind with professional spa services.</p>
                            </div>
                        </div>
                        <div className='w-80 h-30 md:h-60 gap-2 hover:text-[#FFD700] transition duration-100 flex justify-center items-center font-semibold'>
                            <MdAccessTime size={60} className='text-yellow-300' />
                            <div className='flex flex-col'>
                                <p className='text-xs md:text-sm'>24 Hours Recipcionist</p>
                                <p className='text-xs md:text-sm max-w-[180px]  mt-2 font-light'>Our receptionist is ready to assist you whenever you need him.</p>
                            </div>
                        </div>
                        <div className='w-80 h-30 md:h-60 gap-2 flex hover:text-[#FFD700] transition duration-100 justify-center items-center font-semibold'>
                            <PiBusLight size={60} className='text-yellow-300' />
                            <div className='flex flex-col'>
                                <p className='text-xs md:text-sm'>Airport shuttle service</p>
                                <p className='text-xs md:text-sm max-w-[180px]  mt-2 font-light'>Convenient and timely airport pick-up and drop-off.</p>
                            </div>
                        </div>
                        <div className='w-80 h-30 md:h-60 gap-2 flex hover:text-[#FFD700] transition duration-100  justify-center items-center font-semibold'>
                            <PiBuildingApartmentLight size={60} className='text-yellow-300' />
                            <div className='flex flex-col'>
                                <p className='text-xs md:text-sm'>Function Room</p>
                                <p className='text-xs md:text-sm max-w-[180px]  mt-2 font-light'>multi-purpose room for meetings, events, or private gatherings.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsPage