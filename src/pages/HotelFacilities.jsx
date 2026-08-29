import React from "react";
import { MdAccessTime, MdPool } from "react-icons/md";
import {
    PiBuildingApartmentLight,
    PiBusLight,
    PiCoffeeLight,
    PiFlowerLotusLight,
    PiPersonSimpleSwimLight,
} from "react-icons/pi";
import { TbClock24 } from "react-icons/tb";
import Motion from "@/components/Motion";

const facilities = [
    {
        id: 1,
        icon: <MdPool />,
        title: "Swimming Pool",
        description: "Enjoy the pool in a calm and comfortable atmosphere.",
    },
    {
        id: 2,
        icon: <PiCoffeeLight />,
        title: "Cafe & Restaurant",
        description: "Serve the best flavors from our hand-picked chefs.",
    },
    {
        id: 3,
        icon: <PiFlowerLotusLight />,
        title: "SPA & Massage",
        description: "Relax your body and mind with professional spa services.",
    },
    {
        id: 4,
        icon: <TbClock24 />,
        title: "24 Hours Recipcionist",
        description:
            "Our receptionist is ready to assist you whenever you need.",
    },
    {
        id: 5,
        icon: <PiBusLight />,
        title: "Airport Shuttle Service",
        description: "Convenient and timely airport pick-up and drop-off.",
    },
    {
        id: 6,
        icon: <PiBuildingApartmentLight />,
        title: "Function Room",
        description:
            "multi-purpose room for meetings, events, or private gatherings.",
    },
];

const HotelFacilities = () => {
    return (
        <section className="relative h-auto pb-6 bg-[#FAFAFA]">
            <Motion>
                <header className="flex flex-col justify-center items-center py-10 space-y-2">
                    <p className="text-2xl lg:text-4xl font-serif">
                        — Exceptional Facilities —
                    </p>
                    <p className="text-sm lg:text-lg font-serif text-[#c69c6d]">
                        Crafted to elevate your experience
                    </p>
                </header>
            </Motion>
            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  cursor-default">
                {facilities.map((f) => (
                    <Motion delay={0.4}>
                        <div className="h-50  md:gap-4 transition duration-100 flex gap-4 justify-center items-center p-5 font-semibold ">
                            <span className="w-1/2 text-4xl lg:text-6xl p-4 text-white bg-[#c69c6d] w-20 h-20 flex justify-center  items-center font-light border rounded-xl">
                                {f.icon}
                            </span>
                            <div className="flex flex-col w-1/2">
                                <p className="text-lg xl:text-2xl">{f.title}</p>
                                <p className="text-sm xl:text-lg max-w-[180px] xl:w-auto mt-2 font-light">
                                    {f.description}
                                </p>
                            </div>
                        </div>
                    </Motion>
                ))}
            </main>
        </section>
    );
};

export default HotelFacilities;
