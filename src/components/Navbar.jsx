import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PiTextAlignJustifyBold } from "react-icons/pi";
import SidebarMobile from './SidebarMobile'

const Navbar = () => {
    const [scrolled, setScrolled] = useState("false")
    const [openSidebar, setOpenSidebar] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50
            setScrolled(isScrolled)
        }

        window.addEventListener("scroll", handleScroll)
        return () => removeEventListener("scroll", handleScroll)
    }, [])

    const handleSidebar = async () => {
        setOpenSidebar(!openSidebar)
    }

    return (
        <div className={`flex justify-between items-center px-3 md:px-8 h-10 rounded-b-lg z-50 inset-0 fixed top-0 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white text-gray-900 shadow-md' : 'bg-transparant text-white'}`}>
            <div>
                <p onClick={() => navigate('/')} className='text-lg md:text-xl font-bold'><span className='text-xl md:text-3xl font-serif text-[#FDD700]'>Z</span>afotel</p>
            </div>
            <div className='hidden md:flex gap-4'>
                <p onClick={() => navigate('/rooms')}>Rooms</p>
                <p onClick={() => navigate('/about')}>About</p>
                <p onClick={() => navigate('/informations')}>Information</p>
                <p>Booking</p>
            </div>
            <div className='hidden md:flex'>
                <p onClick={() => navigate('/login')}>Sign in / </p>
                <p onClick={() => navigate('/register')}>Sign up</p>
            </div>
            <div className='md:hidden'>
                <PiTextAlignJustifyBold size={20} onClick={handleSidebar} />
            </div>

            {openSidebar && <SidebarMobile onClose={() => setOpenSidebar(null)} />}
        </div>
    )
}

export default Navbar