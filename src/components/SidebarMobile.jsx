import React from 'react'
import { useNavigate } from 'react-router-dom';

const SidebarMobile = ({ onClose }) => {
    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
        onClose()
    }
    return (
        <div onClick={onClose} className='h-screen bg-black/50 w-full inset-0 z-100 fixed right-0 transition duration-100 ease-in-out'>
            <div className='h-screen text-black bg-white w-50 fixed right-0 flex flex-col'>
                <div className='flex justify-between items-center p-2 pt-4'>
                    <p onClick={() => handleNavigate('/')} className='text-lg md:text-xl font-bold'><span className='text-xl md:text-3xl font-serif text-[#FDD700]'>Z</span>afotel</p>
                    <p className='text-gray-500 text-lg flex items-center' onClick={onClose}>...</p>
                </div>
                <div className='flex flex-col p-2'>
                    <p className='text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100' onClick={() => handleNavigate('/rooms')}>Rooms</p>
                    <p className='text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100'>About</p>
                    <p className='text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100' onClick={() => handleNavigate('/informations')}>Information</p>
                    <p className='text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100'>Booking</p>
                    <p className='text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100' onClick={() => handleNavigate('/login')}>Sign in / </p>
                    <p className='text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100' onClick={() => handleNavigate('/register')}>Sign up</p>
                </div>
            </div>
        </div>
    )
}

export default SidebarMobile