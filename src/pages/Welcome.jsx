import React from "react";
import { PiStarFill, PiStarHalfFill } from "react-icons/pi";
import { IoMdStar } from "react-icons/io";

import { useNavigate } from "react-router-dom";
import Motion from "@/components/Motion";

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <section className="relative bg-white h-auto md:h-auto grid gird-cols-1 md:grid-cols-2 px-2 py-11 md:p-8 md:px-10 border border-yellow-400">
            <Motion>
                <div className="flex justify-center gap-2 lg:gap-6">
                    <img
                        src="/assets/aboutus.webp"
                        alt=""
                        className="w-45   h-75 md:w-45 md:h-65 lg:w-[45vh] lg:h-100 xl:h-150 mb-12 object-cover"
                    />
                    <img
                        src="/assets/aboutus2.webp"
                        alt=""
                        className="w-45   h-75 md:w-45 md:h-65 lg:w-[45vh] lg:h-100 xl:h-150 mt-12 object-cover"
                    />
                </div>
            </Motion>
            <div className="ml-6 flex flex-col justify-center ">
                <Motion>
                    <p className="text-lg lg:text-xl text-[#c69c6d] font-serif mt-6">
                        WELCOME TO THERINA
                    </p>
                    <p className="text-xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold max-w-lg py-4">
                        Luxury Hotel in the <br /> Heart of the City
                    </p>
                </Motion>
                <Motion delay={0.4}>
                    <p className="text-xs md:text-sm lg:text-lg pb-4">
                        THERINA is a place where every guest comes as a visitor
                        and leaves as family. We believe that true comfort lies
                        not only in a soft bed and a clean room, but in a warm
                        atmosphere that makes you feel at home. Enjoy the
                        tranquility, friendly service, and modern amenities we
                        provide to accompany your every journey.
                    </p>
                    <div className="flex text-[#c69c6d] text-lg md:text-2xl">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                    </div>
                </Motion>
                <Motion delay={0.8}>
                    <p className="text-sm md:text-lg mt-2 font-semibold">
                        4,9/5{" "}
                    </p>
                    <button
                        onClick={() => navigate("/rooms")}
                        className="bg-[#c69c6d] mt-4 font-ysabeau py-4 hover:bg-[#0C0C0C] hover:text-white transition duration:100 text-[10px] md:text-sm px-12"
                    >
                        RESERVATION NOW
                    </button>
                </Motion>
            </div>
        </section>
    );
};

export default Welcome;
