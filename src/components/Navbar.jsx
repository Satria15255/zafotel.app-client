import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState("false")

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50
            setScrolled(isScrolled)
        }

        window.addEventListener("scroll", handleScroll)
        return () => removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className={`flex justify-between items-center p-8 h-10 rounded-b-xl z-50 inset-0 fixed top-0 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white text-gray-900 shadow-md' : 'bg-transparant text-white'}`}>
            <div>
                <p className='text-xl font-bold'>Zafotel</p>
            </div>
            <div className='flex gap-4'>
                <p>Rooms</p>
                <p>About</p>
                <p>Information</p>
                <p>Booking</p>
            </div>
            <div className='flex'>
                <p>Sign / </p>
                <p>Sign up</p>

            </div>
        </div>
    )
}

export default Navbar