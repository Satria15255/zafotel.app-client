import React from 'react'
import { PiCrownLight, PiDiamondsFourLight, PiLampLight, PiMapPinAreaLight } from "react-icons/pi";
import Motion from "@/components/Motion";

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
        <div className='relative z-100 bg-white w-full flex flex-col items-center md:flex-row h-auto md:h-70 py-6 gap-3 px-2 border-b border-[#FFD700] space-y-4'>
            <div className="flex flex-col md:flex-row  justify-around space-y-6 w-full">
                {superiority.map((s) => (
                    <Motion>
                        <div className='w-90 md:w-auto flex flex-row md:flex-col items-center gap-3 justify-center h-40'>
                            <div className='flex flex-row md:flex-col justify-center items-center gap-3 ml-10 md:ml-0'>
                                <span className='flex justify-center items-center text-3xl h-16 w-16 rounded-full border text-white bg-[#c69c6d]'>
                                    {s.icons}
                                </span>
                                <div className='flex flex-col md:items-center justify-center'>
                                    <p className='text-lg md:text-lg lg:text-lg md:text-center w-60 md:h-12 font-semibold mt-3'>{s.title}</p>
                                    <p className='text-sm md:text-sm lg:text-md md:text-center w-40 md:w-60 md:h-12 max-w-[200px] font-light'>{s.description}</p>
                                </div>
                            </div>
                        </div>
                    </Motion>
                ))}
            </div>
        </div>
    )
}

export default Superiority