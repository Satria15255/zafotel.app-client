import React from "react";
import { useNavigate } from "react-router-dom";
import Motion from "@/components/Motion";
import { IoMdStar } from "react-icons/io";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <Motion variant="fadeIn">
            <section className="relative w-full h-auto flex items-center lg:h-screen bg-center bg-cover z-0">
                {/*Hero Image Background*/}
                <div className="fixed w-full h-screen top-0 -z-10">
                    <img
                        className="w-full h-full object-cover object-center"
                        src="/assets/herobanner.webp"
                        alt="therina luxury"
                    />
                </div>

                {/*Hero Content*/}
                <header className="h-screen md:h-160 lg:h-screen flex flex-col justify-center items-center bg-black/50 w-full p-4">
                    <Motion>
                        <div className="flex space-x-3 text-lg text-[#c69c6d]">
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                    </Motion>
                    <Motion delay={0.2}>
                        <h1 className="text-white text-7xl md:text-6xl lg:text-7xl text-center font-ysabeau">
                            THERINA, FEEL THE ELEGANCE
                        </h1>
                    </Motion>
                    <Motion delay={0.4}>
                        <p className="text-center text-white text-sm md:text-sm  max-w-xs md:max-w-lg mt-3">
                            Therina is here for modern professionals and
                            travelers who need unlimited comfort amidst the
                            hustle and bustle of the city.
                        </p>
                    </Motion>
                    <Motion delay={0.6}>
                        <div className="mt-3">
                            <button
                                onClick={() => navigate("/rooms")}
                                className="rounded-full text-white px-12 py-2 border bg-transparant hover:bg-[#0C0C0C] hover:border-[#0C0C0C] transition duration-300 text-sm md:text-sm"
                            >
                                BOOKING NOW
                            </button>
                        </div>
                    </Motion>
                </header>
            </section>
        </Motion>
    );
};

export default Hero;
