import React, { useRef } from 'react'
import { PiUserCircleDuotone, PiStarFill, PiStarHalfFill } from "react-icons/pi";
import Motion from "@/components/Motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"


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
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )
    return (
        // <div className='h-120  bg-cover bg-center' style={{ backgroundImage: 'url(/assets/testimonial.jpg)' }} >
        //     <div className='w-full h-full flex items-center justify-center p-5 py-6 bg-black/40' >
        //         <Motion delay={0.4}>
        //             <Carousel
        //                 plugins={[plugin.current]}
        //                 onMouseEnter={plugin.current.stop}
        //                 onMouseLeave={plugin.current.reset}
        //                 className='w-full'>
        //                 <CarouselContent>
        //                     {testimonial.map((t, index) => (
        //                         <CarouselItem key={index} className='bg-transparant max-w-screen flex flex-col items-center justify-around space-y-3 p-5 rounded-3xl'>
        //                             <div>
        //                                 <p className='text-white text-center text-3xl max-w-lg'>"{t.text}"</p>
        //                             </div>
        //                             <p className='text-lg text-white'>{t.name}</p>
        //                             <div className='flex text-lg text-yellow-500'>
        //                                 <PiStarFill />
        //                                 <PiStarFill />
        //                                 <PiStarFill />
        //                                 <PiStarFill />
        //                                 <PiStarFill />
        //                             </div>
        //                         </CarouselItem>
        //                     ))}
        //                 </CarouselContent>
        //             </Carousel>
        //         </Motion>
        //     </div>
        // </div>
        <div className='h-auto bg-cover bg-center' style={{ backgroundImage: 'url(/assets/testimonial.jpg)' }}>
            <Motion delay={0.4}>
                <Carousel
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    className='bg-black/40'
                >
                    <CarouselContent>
                            {testimonial.map((t, index) => (
                                <CarouselItem key={index} className=' max-w-screen h-120 flex flex-col items-center justify-center space-y-3 p-5 '>
                                    <div>
                                        <p className='text-white text-center text-3xl max-w-lg'>"{t.text}"</p>
                                    </div>
                                    <p className='text-lg text-white'>{t.name}</p>
                                    <div className='flex text-lg text-yellow-500'>
                                        <PiStarFill />
                                        <PiStarFill />
                                        <PiStarFill />
                                        <PiStarFill />
                                        <PiStarFill />
                                    </div>
                                </CarouselItem>
                            ))}
                    </CarouselContent>
                </Carousel>
            </Motion>
        </div >
    )
}

export default Testimoni