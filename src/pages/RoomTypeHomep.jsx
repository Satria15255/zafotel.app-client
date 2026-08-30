import React, { useEffect, useRef, useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiStarFill, PiStarHalfFill } from "react-icons/pi";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { getAllRooms } from "../Api";
import { useNavigate } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import Motion from "@/components/Motion";
import FacilityIcon from "../components/FacilityIcon";

const RoomTypeHomep = () => {
    const [rooms, setRooms] = useState([]);
    const [mainImage, setMainImage] = useState("");
    const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
    const navigate = useNavigate();

    const fetchRooms = async () => {
        try {
            const res = await getAllRooms();
            setRooms(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (rooms && rooms.image && rooms.image.length > 0) {
            setMainImage(rooms.image[0]);
        }
    });

    useEffect(() => {
        fetchRooms();
    }, []);

    return (
        <section className="relative h-auto py-12 p-4 md:p-10 bg-[#FFFFF0] border border-yellow-400 flex flex-col justify-center items-center">
            <Motion>
                <header className="pb-10">
                    <p className="text-black font-serif text-2xl lg:text-4xl text-center">
                        — Our Finest Rooms —
                    </p>
                    <p className="text-[#c69c6d] text-sm md:text-xs lg:text-sm text-center mt-2">
                        Find your dream type room with collections here
                    </p>
                </header>
            </Motion>

            <main>
                <Motion delay={0.4}>
                    {/* Mobile Version */}
                    <div className="hidden">
                        <Carousel
                            plugins={[plugin.current]}
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                            className="w-auto"
                        >
                            <CarouselContent>
                                {rooms.map((room, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="relative"
                                        onClick={() =>
                                            navigate(`/rooms/${room._id}`)
                                        }
                                    >
                                        <div className="w-full h-130 md:h-80 lg:h-auto">
                                            <img
                                                src={room.image[0]}
                                                alt="standardType"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute bg-black/40 inset-0 p-2 px-6 space-y-3 flex flex-col justify-between">
                                            <header>
                                                <p className="text-white text-lg font-bold">
                                                    <span className="text-yellow-300">
                                                        ${room.price}
                                                    </span>{" "}
                                                    / Night
                                                </p>
                                            </header>
                                            <footer className="text-white ">
                                                <p className="text-sm font-bold">
                                                    {room.name}
                                                </p>
                                                <p className="text-xs h-30 max-w-xs">
                                                    {room.description}
                                                </p>
                                                <div className="flex justify-end">
                                                    <div className="flex items-center text-yellow-300 text-sm">
                                                        <PiStarFill />
                                                        <PiStarFill />
                                                        <PiStarFill />
                                                        <PiStarFill />
                                                        <PiStarHalfFill />
                                                        <p className="text-sm text-white ml-2">
                                                            4.8
                                                        </p>
                                                    </div>
                                                </div>
                                            </footer>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>

                    {/* Desktop Version */}
                    <div className="xl:max-w-8xl">
                        <Carousel
                            plugins={[plugin.current]}
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                            className="w-auto"
                        >
                            <CarouselContent>
                                {rooms.map((room, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="relative"
                                        onClick={() =>
                                            navigate(`/rooms/${room._id}`)
                                        }
                                        className="grid grid-cols-1 md:grid-cols-2 "
                                    >
                                        <div className="w-full h-50 md:h-auto xl:h-120">
                                            <img
                                                src={room.image[0]}
                                                alt={room.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="bg-[#FAFAFA] w-full p-2 border border-gray-100 md:px-6 space-y-3 text-[#0C0C0C] font-ysabeau flex flex-col justify-around">
                                            <header className="flex flex-col gap-3">
                                                <p className="text-sm lg:text-xl xl:text-xl">
                                                    from:
                                                    <span className="font-playfair text-xl lg:text-3xl font-semibold">
                                                        ${room.price}
                                                    </span>
                                                    / Night
                                                </p>

                                                <p className="text-3xl xl:text-5xl font-semibold">
                                                    {room.name}
                                                </p>
                                            </header>
                                            <main>
                                                <p className="hidden lg:flex text-sm xl:text-lg h-30 ">
                                                    {room.description}
                                                </p>
                                                <div className="grid grid-cols-2 gap-1">
                                                    {room.details.amenities
                                                        .slice(0, 6)
                                                        .map((amenities) => {
                                                            const key =
                                                                amenities
                                                                    .toLowerCase()
                                                                    .trim();
                                                            return (
                                                                <div
                                                                    key={
                                                                        amenities
                                                                    }
                                                                    className="flex gap-1  h-5 md:h-8 items-center text-[#c69c6d]"
                                                                >
                                                                    {
                                                                        FacilityIcon[
                                                                            key
                                                                        ]
                                                                    }
                                                                    <p className="text-[10px] md:text-xs lg:text-sm xl:text-lg text-[#0C0C0C]">
                                                                        {
                                                                            amenities
                                                                        }
                                                                    </p>
                                                                </div>
                                                            );
                                                        })}
                                                </div>
                                            </main>
                                            <footer className="flex gap-2  text-sm md:text-xs lg:text-xl">
                                                <button className="flex gap-2 items-center justify-center w-1/2 xl:w-1/3 py-2 bg-[#c69c6d] hover:bg-[#0C0C0C] transition duration-200 text-white">
                                                    <FaCalendarCheck /> BOOK NOW
                                                </button>
                                                <button className="flex gap-2 items-center justify-center w-1/2 xl:w-1/3 py-2 bg-[#FAFAFA] hover:bg-[#0C0C0C] transition duration-200 hover:text-white text-[#0C0C0C] border border-[#c69c6d] hover:border-[#0C0C0C]">
                                                    VIEW ROOM
                                                    <IoIosArrowRoundForward />
                                                </button>
                                            </footer>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </Motion>
            </main>
        </section>
    );
};

export default RoomTypeHomep;
