import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiTextAlignJustifyBold } from "react-icons/pi";
import { MdOutlineLogin } from "react-icons/md";
import { FaStudiovinari } from "react-icons/fa";
import SidebarMobile from "./SidebarMobile";
import Motion from "@/components/common/Motion";

const Navbar = ({ user, onToggleModals, onLogout }) => {
    const [scrolled, setScrolled] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 40;
            setScrolled(isScrolled);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSidebar = async () => {
        setOpenSidebar(!openSidebar);
    };

    const handleNavigate = (path) => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            alert(
                "Please log in or register first before carrying out activities.",
            );
            return;
        } else {
            navigate(path);
        }
    };
    return (
        <Motion variant="slideDown" type="load">
            <div
                className={`flex justify-between items-center px-3 md:px-8 h-15 md:h-20 z-50 inset-0 fixed top-0 transition duration-300 bg-transparant ease-in-out ${scrolled ? "bg-black text-white shadow-md" : "bg-transparant text-white"}`}
            >
                <div>
                    <p
                        onClick={() => navigate("/")}
                        className="text-lg md:text-xl font-serif cursor-pointer hidden md:block"
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
                    <p className="text-3xl md:hidden text-[#c69c6d]">⚜</p>
                </div>
                <div className="hidden lg:flex text-sm xl:text-md gap-6 cursor-pointer">
                    <p
                        className="hover:border-b border-yellow-500 transition duration-300 pb-1 w-auto flex items-center justify-center"
                        onClick={() => navigate("/")}
                    >
                        HOME
                    </p>
                    <p
                        className="hover:border-b border-yellow-500 transition duration-300 pb-1 w-auto flex items-center justify-center"
                        onClick={() => navigate("/rooms")}
                    >
                        ROOMS & SUITES
                    </p>
                    <p
                        className="hover:border-b border-yellow-500 transition duration-300 pb-1 w-auto flex items-center justify-center"
                        onClick={() => navigate("/about")}
                    >
                        EXPLORE THERINA
                    </p>
                    <p
                        className="hover:border-b border-yellow-500 transition duration-300 pb-1 w-auto flex items-center justify-center"
                        onClick={() => navigate("/news")}
                    >
                        NEWS & OFFERS
                    </p>
                    <p
                        className="hover:border-b border-yellow-500 transition duration-300 pb-1 w-auto flex items-center justify-center"
                        onClick={() => handleNavigate("/mybookings")}
                    >
                        BOOKING ROOM
                    </p>
                </div>
                {!user ? (
                    <div className="hidden lg:flex gap-3 items-center bg-[#c69c6d] text-white font-ysabeau py-2 px-4 cursor-pointer">
                        <p className="text-lg">
                            <MdOutlineLogin />
                        </p>
                        <p onClick={() => navigate("/login")}>SIGN IN</p>
                        <p>/</p>
                        <p onClick={() => navigate("/register")}>SIGN UP</p>
                    </div>
                ) : (
                    <div className="hidden lg:flex cursor-pointer">
                        <p onClick={onToggleModals}>Hello {user.name}</p>
                    </div>
                )}
                <div className="lg:hidden">
                    <PiTextAlignJustifyBold size={20} onClick={handleSidebar} />
                </div>
                {openSidebar && (
                    <SidebarMobile
                        onClose={() => setOpenSidebar(null)}
                        user={user}
                        onLogout={onLogout}
                    />
                )}
            </div>
        </Motion>
    );
};

export default Navbar;
