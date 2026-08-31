import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import FacilityIcon from "./FacilityIcon";
import Motion from "@/components/Motion";

const RoomsCard = ({ rooms, index }) => {
    const navigate = useNavigate();

    return (
        <Motion>
            <section className="w-full bg-[#FAFAFA] border border-gray-200 md:h-60 lg:h-90 xl:h-auto">
                <div
                    className={`flex flex-col md:flex-row ${!index ? "md:flex-row-reverse" : ""}`}
                >
                    <div className="w-full md:w-1/2 h-50 md:h-60 lg:h-90 xl:h-110">
                        <img
                            src={rooms.image[0]}
                            alt="standardType"
                            className="w-full h-full object-cover "
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-[#0C0C0C] p-2 lg:p-5 xl:p-14 flex flex-col font-ysabeau justify-around space-y-5">
                        <div className="flex justify-between items-center">
                            <p className="text-lg lg:text-3xl font-serif">
                                {rooms.name}
                            </p>
                            <p className="text-sm lg:text-xl xl:text-xl">
                                from:
                                <span className="font-playfair text-xl lg:text-3xl font-semibold">
                                    ${rooms.price}
                                </span>
                                / Night
                            </p>
                        </div>
                        <div className="hidden lg:flex h-20">
                            <p className="text-[10px] text-[#0C0C0C] md:text-xs lg:text-sm ">
                                {rooms.description}
                            </p>
                        </div>
                        <div className="grid  gap-2 grid-cols-2 ">
                            {rooms.details.amenities
                                .slice(0, 6)
                                .map((amenities) => {
                                    const key = amenities.toLowerCase().trim();
                                    return (
                                        <div
                                            key={amenities}
                                            className="flex gap-1 md:text-lg h-5 md:h-8 items-center text-[#c69c6d]"
                                        >
                                            {FacilityIcon[key]}
                                            <p className="text-[10px] md:text-xs lg:text-sm xl:text-lg text-[#0C0C0C]">
                                                {amenities}
                                            </p>
                                        </div>
                                    );
                                })}
                        </div>
                        <div className="flex w-full gap-1 md:gap-4 ">
                            <button className="text-xs md:text-xs lg:text-sm py-2 md:py-2 w-1/2 md:px-7 flex items-center justify-center gap-2 bg-[#c69c6d] hover:bg-[#0C0C0C] transition duration-200 text-white">
                                <FaCalendarCheck />
                                BOOK NOW
                            </button>
                            <button
                                onClick={() => navigate(`/rooms/${rooms._id}`)}
                                className="text-xs md:text-xs lg:text-sm py-2 md:py-2 w-1/2 md:px-7 flex gap-2 items-center justify-center bg-[#FAFAFA] hover:bg-[#0C0C0C] transition duration-200 hover:text-white text-[#0C0C0C] border border-[#c69c6d] hover:border-[#0C0C0C]"
                            >
                                VIEW ROOM
                                <IoIosArrowRoundForward />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Motion>
    );
};

export default RoomsCard;
