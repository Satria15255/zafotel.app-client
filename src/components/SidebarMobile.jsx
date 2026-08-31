import React from "react";
import { useNavigate } from "react-router-dom";
import { PiUserCircleDuotone } from "react-icons/pi";
import { BsDoorOpen } from "react-icons/bs";
import {
    TbMessageQuestion,
    TbNews,
    TbLogin2,
    TbLogout2,
    TbShoppingBagCheck,
} from "react-icons/tb";
import { toast } from "react-toastify";

const SidebarMobile = ({ user, onClose, onLogout }) => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        onClose();
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        onLogout();
        navigate("/");
        toast.success("Log Out success");
    };
    return (
        <section
            onClick={onClose}
            className="h-screen bg-black/50 w-full inset-0 z-100 fixed right-0 transition duration-100 ease-in-out"
        >
            <div className="h-screen text-black bg-white w-2/5 fixed right-0 flex flex-col font-ysabeau">
                <header className="flex justify-between items-center p-2 pt-4">
                    <p
                        onClick={() => navigate("/")}
                        className="text-xs md:text-xl font-serif cursor-pointer "
                    >
                        <span className="text-xl md:text-3xl font-serif text-[#c69c6d]">
                            T
                        </span>
                        HERINA
                        <span className="text-xl md:text-3xl font-serif text-[#c69c6d]">
                            H
                        </span>
                        AVEN⚜
                    </p>
                </header>

                <main>
                    {!user ? (
                        <div className="flex flex-col p-2">
                            <p
                                className="flex gap-2 items-center text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100"
                                onClick={() => handleNavigate("/rooms")}
                            >
                                <BsDoorOpen />
                                Rooms
                            </p>
                            <p
                                className="flex gap-2 items-center text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100"
                                onClick={() => handleNavigate("/about")}
                            >
                                <TbMessageQuestion />
                                About
                            </p>
                            <p
                                className="flex gap-2 items-center text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100"
                                onClick={() => handleNavigate("/news")}
                            >
                                <TbNews />
                                News
                            </p>
                            <p
                                className="flex gap-2 items-center text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100"
                                onClick={() => handleNavigate("/login")}
                            >
                                <TbLogin2 />
                                Login / Register
                            </p>
                        </div>
                    ) : (
                        <div>
                            <div className="w-full py-2 flex items-center">
                                <PiUserCircleDuotone size={50} />
                                <div>
                                    <p className="text-sm font-semibold">
                                        {user.name}
                                    </p>
                                    <p className="text-[9px] text-gray-500">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col p-2">
                                <p
                                    className="flex gap-2 items-center text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100"
                                    onClick={() => handleNavigate("/rooms")}
                                >
                                    <BsDoorOpen />
                                    Rooms
                                </p>
                                <p
                                    className="flex gap-2 items-center text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100"
                                    onClick={() => handleNavigate("/about")}
                                >
                                    <TbMessageQuestion />
                                    About
                                </p>
                                <p
                                    className="flex gap-2 items-center text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100"
                                    onClick={() => handleNavigate("/news")}
                                >
                                    <TbNews />
                                    News
                                </p>
                                <p
                                    className="flex gap-2 items-center text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100"
                                    onClick={() =>
                                        handleNavigate("/mybookings")
                                    }
                                >
                                    <TbShoppingBagCheck />
                                    Booking
                                </p>
                                <p
                                    className="flex gap-2 items-center text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100"
                                    onClick={handleLogout}
                                >
                                    <TbLogout2 />
                                    Log Out
                                </p>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </section>
    );
};

export default SidebarMobile;
