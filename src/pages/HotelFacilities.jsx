import React from 'react'
import { MdAccessTime } from "react-icons/md";
import { PiBuildingApartmentLight, PiBusLight, PiCoffeeLight, PiFlowerLotusLight, PiPersonSimpleSwimLight } from "react-icons/pi";
import Motion from "@/components/Motion";

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
        <div className='relative h-auto pb-6 bg-[#FFFFF0]'>
            <Motion>
                <div className="flex flex-col justify-center items-center py-10 space-y-2">
                    <p className='text-2xl lg:text-4xl font-serif'>— Exceptional Facilities —</p>
                    <p className="text-sm lg:text-lg font-serif text-[#c69c6d]">Crafted to elevate your experience</p>
                </div>
            </Motion>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 place-items-center cursor-default'>
                {facilities.map((f) => (
                    <Motion delay={0.4}>
                        <div className=' w-90 md:w-110 h-50 gap-4 transition duration-100 flex justify-center items-center font-semibold '>
                            <span className="text-6xl p-4 text-white bg-[#c69c6d] border rounded-xl">{f.icon}</span>
                            <div className='flex flex-col'>
                                <p className='text-lg '>{f.title}</p>
                                <p className='text-sm max-w-[180px] mt-2 font-light'>{f.description}</p>
                            </div>
                        </div>
                    </Motion>
                ))}
            </div>
        </div>
    )
}

export default HotelFacilities