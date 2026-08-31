import React from "react";
import { LiaBathSolid } from "react-icons/lia";
import { MdSupportAgent, MdHotelClass } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import Motion from "@/components/Motion";

const superiority = [
    {
        id: 1,
        icons: <GrMapLocation />,
        title: "Strategic Location in the Heart Of City",
        description: "Close to the city center and popular destinations.",
    },
    {
        id: 2,
        icons: <MdSupportAgent />,
        title: "Friendly and Professional Service",
        description:
            "Our friendly and welcoming staff ensure a delightful stay every time.",
    },
    {
        id: 3,
        icons: <LiaBathSolid />,
        title: "Luxurious, Modern & Comfortable Design ",
        description:
            "Experience a luxurious, modern, and fully equipped space for comfort.",
    },
    {
        id: 4,
        icons: <IoPricetagsOutline />,
        title: "Best Prices & Full Amenities Available.",
        description:
            "From the swimming pool to the spa, everything is for your comfort.",
    },
];

const Superiority = () => {
    return (
        <section className="relative bg-white w-full flex flex-col items-center justify-center md:flex-row h-auto lg:h-70 xl:h-auto py-12 gap-3 px-2 border-b border-[#FFD700] space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4  justify-around space-y-6 w-full ">
                {superiority.map((s) => (
                    <Motion>
                        <div className="w-90 md:w-auto flex flex-row md:flex-col items-center gap-3 justify-center h-40 md:h-auto">
                            <div className="flex flex-row md:flex-col justify-center items-center gap-3 ml-10 md:ml-0">
                                <span className="flex justify-center items-center text-3xl md:text-2xl  lg:text-5xl p-4 rounded-full border border-[#c69c6d] text-[#c69c6d]">
                                    {s.icons}
                                </span>
                                <header className="flex flex-col  lg:gap-5 md:items-center justify-center">
                                    <h2 className="text-lg md:text-xs lg:text-lg xl:text-3xl md:text-center w-60 md:w-40 xl:w-80 md:h-12 xl:h-auto font-semibold mt-3">
                                        {s.title}
                                    </h2>
                                    <p className="text-sm md:text-xs lg:text-lg md:text-center w-40  lg:h-12 max-w-[200px] xl:max-w-2xl font-light">
                                        {s.description}
                                    </p>
                                </header>
                            </div>
                        </div>
                    </Motion>
                ))}
            </div>
        </section>
    );
};

export default Superiority;
