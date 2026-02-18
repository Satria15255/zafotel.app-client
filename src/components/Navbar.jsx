import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PiTextAlignJustifyBold } from "react-icons/pi";
import SidebarMobile from './SidebarMobile'
import Motion from "@/components/Motion"

const Navbar = ({ user, onToggleModals, onLogout }) => {
    const [scrolled, setScrolled] = useState(false)
    const [openSidebar, setOpenSidebar] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 40
            setScrolled(isScrolled)
        }

        handleScroll()
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleSidebar = async () => {
        setOpenSidebar(!openSidebar)
    }

    const handleNavigate = (path) => {
        const token = localStorage.getItem("token")
        if (!token) {
            navigate('/login')
            alert("Please log in or register first before carrying out activities.")
            return
        } else {
            navigate(path)
        }
    }
    return (
        <Motion variant="slideDown" type="load">
        <div className={`flex justify-between items-center px-3 md:px-8 h-10 md:h-15 rounded-b-lg z-50 inset-0 fixed top-0 transition-all duration-500 bg-transparant ease-in-out ${scrolled ? 'bg-white text-gray-900 shadow-md' : 'bg-transparant text-white'}`}>
            <div>
                <p onClick={() => navigate('/')} className='text-lg md:text-xl font-bold cursor-pointer'><span className='text-xl md:text-3xl font-serif text-[#FDD700]'>Z</span>afotel</p>
            </div>
            <div className='hidden md:flex gap-4 cursor-pointer'>
                <p onClick={() => navigate('/rooms')}>Rooms</p>
                <p onClick={() => navigate('/about')}>About</p>
                <p onClick={() => navigate('/informations')}>Information</p>
                <p onClick={() => handleNavigate('/mybookings')}>Booking</p>
            </div>
            {!user ? (
                <div className='hidden md:flex cursor-pointer'>
                    <p onClick={() => navigate('/login')}>Sign in / </p>
                    <p onClick={() => navigate('/register')}>Sign up</p>
                </div>
            ) : (
                <div className='hidden md:flex cursor-pointer'>
                    <p onClick={onToggleModals}>Hello {user.name}</p>
                </div>
            )}
            <div className='md:hidden'>
                <PiTextAlignJustifyBold size={20} onClick={handleSidebar} />
                </div>
            {openSidebar && <SidebarMobile onClose={() => setOpenSidebar(null)} user={user} onLogout={onLogout} />}
        </div>
        </Motion>
    )
}

export default Navbar