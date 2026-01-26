import React from 'react'
import { MdAccessTime } from "react-icons/md";
import { PiBuildingApartmentLight, PiBusLight, PiCoffeeLight, PiFlowerLotusLight, PiPersonSimpleSwimLight } from "react-icons/pi";


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

const HotelFacilities = () => {
    return (
        <div className='h-auto'>
            <p className='text-xl text-center text-[#FFD700] font-serif mt-12 mb-7'>
                Facilities
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 place-items-center cursor-default'>
                {facilities.map((f) => (
                    <div className='w-auto lg:w-80 h-30 md:h-60 gap-2 hover:text-[#FFD700] transition duration-100 flex justify-center items-center font-semibold'>
                        <span className="text-6xl text-yellow-500">{f.icon}</span> 
                    <div className='flex flex-col'>
                            <p className='text-sm lg:text-sm'>{f.title}</p>
                            <p className='text-sm lg:text-sm max-w-[180px] mt-2 font-light'>{f.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default HotelFacilities