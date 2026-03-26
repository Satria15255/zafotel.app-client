import React from 'react'
import { PiUserCircleDuotone, PiStarFill, PiStarHalfFill } from "react-icons/pi";
import Motion from "@/components/Motion"

const testimonial = [
    {
        name: "Andi Saputra",
        text: "Very friendly service, clean rooms, and a very comfortable atmosphere. Recommended!",
        date: "1 years ago",
    },
    {
        name: "Rina Oktavia",
        text: "The hotel design is modern, the facilities are complete, and the breakfast is delicious!",
        date: "2 years ago",
    },
    {
        name: "Budi Hartono",
        text: "I really enjoyed my stay here. I will definitely come back again!",
        date: "4 years ago",
    },
    {
        name: "Lisa Adelia",
        text: "Strategic location, close to the city center, suitable for vacations and business.",
        date: "1 mounth ago",
    },
    {
        name: "Andi Saputra",
        text: "Very friendly service, clean rooms, and a very comfortable atmosphere. Recommended!",
        date: "1 years ago",
    },
    {
        name: "Rina Oktavia",
        text: "The hotel design is modern, the facilities are complete, and the breakfast is delicious!",
        date: "2 years ago",
    },
    {
        name: "Budi Hartono",
        text: "I really enjoyed my stay here. I will definitely come back again!",
        date: "4 years ago",
    },
    {
        name: "Lisa Adelia",
        text: "Strategic location, close to the city center, suitable for vacations and business.",
        date: "1 mounth ago",
    },
]

const Testimoni = () => {
    return (
        <div className='w-full bg-cover bg-center' style={{ backgroundImage: 'url(/assets/testimonial.jpg)' }} >
            <div className='h-auto lg:h-100 flex flex-col md:flex-row justify-around items-center p-5 py-6 bg-black/30' >
            <Motion>
                    <div>
                        <p className='text-xl md:text-2xl lg:text-4xl font-serif text-white'>Testimonial</p>
                        <p className='text-[10px] md:text-sm lg:text-sm max-w-sm font-sans text-white mt-5'>Your voice is our legacy. Discover why Zafotel continues to be a symbol of luxury and comfort for those who appreciate the finer things in life. Hear candid stories from guests who have experienced firsthand the warmth of our service and the grandeur of our atmosphere.</p>
                    </div>
            </Motion>
            <Motion delay={0.4}>
                    <div className='w-full max-w-2xl overflow-x-auto scrollbar-hide'>
                        <div className='flex gap-6 py-6'>
                            {testimonial.map((t, index) => (
                                <div key={index} className='min-w-[250px] md:min-w-[400px] max-w-lg h-40 md:h-60 flex flex-col items-center justify-between p-5 shadow-lg border border-gray-100 bg-white rounded-3xl'>
                                    <div className='flex flex-col items-center justify-between'>
                                        <PiUserCircleDuotone size={60} />
                                        <p className='text-[9px] md:text-sm'>{t.date}</p>
                                    </div>
                                    <div>
                                        <p className='text-[9px] text-center md:text-sm'>"{t.text}"</p>
                                    </div>
                                    <div className='flex flex-col items-center justify-between'>
                                        <p className='text-[9px] md:text-sm'>{t.name}</p>
                                        <div className='flex text-[10px] text-yellow-500'>
                                            <PiStarFill />
                                            <PiStarFill />
                                            <PiStarFill />
                                            <PiStarFill />
                                            <PiStarFill />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </Motion>
        </div>
        </div>
    )
}

export default Testimoni