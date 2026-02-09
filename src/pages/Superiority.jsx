import React from 'react'
import { PiCrownLight, PiDiamondsFourLight, PiLampLight, PiMapPinAreaLight } from "react-icons/pi";

const superiority = [
    {
        id: 1,
        icons: <PiMapPinAreaLight />,
        title: "Strategic Location",
        description: "Close to the city center and popular destinations."
    },
    {
        id: 2,
        icons: <PiCrownLight />,
        title: "Friendly & Professional Service",
        description: "Our friendly and welcoming staff ensure a delightful stay every time."
    },
    {
        id: 3,
        icons: <PiLampLight />,
        title: "Modern & Comfortable Design ",
        description: "Experience a luxurious, modern, and fully equipped space for comfort."
    },
    {
        id: 4,
        icons: <PiDiamondsFourLight />,
        title: "Complete Amenities",
        description: "From the swimming pool to the spa, everything is for your comfort."
    }
]

const Superiority = () => {
    return (
        <div className='z-100 bg-white w-full flex flex-col md:flex-row h-auto md:h-60 py-6 gap-3 px-2 border border-[#FFD700] space-y-4'>
            <div className="flex flex-col items-center justify-around space-y-6 w-full">
            {superiority.map((s) => (
                <div className='flex flex-col items-center justify-center h-40'>
                    <span className='text-5xl h-16 text-yellow-500'>
                            {s.icons}
                        </span>
                    <p className='text-lg md:text-sm lg:text-lg text-center h-12 font-semibold '>{s.title}</p>
                    <p className='text-sm md:text-xs lg:text-md text-center h-12 max-w-[200px] font-light'>{s.description}</p>
            </div>
            ))}
            </div>
        </div>
    )
}

export default Superiority