import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PiUserCircleDuotone } from "react-icons/pi";


const SidebarMobile = ({ user, onClose, onLogout }) => {
    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
        onClose()
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        onLogout()
        navigate('/')
        alert("Log Out success")
    }
    return (
        <div onClick={onClose} className='h-screen bg-black/50 w-full inset-0 z-100 fixed right-0 transition duration-100 ease-in-out'>
            <div className='h-screen text-black bg-white w-50 fixed right-0 flex flex-col'>
                <div className='flex justify-between items-center p-2 pt-4'>
                    <p onClick={() => handleNavigate('/')} className='text-lg md:text-xl font-bold'><span className='text-xl md:text-3xl font-serif text-[#FDD700]'>Z</span>afotel</p>
                    <p className='text-gray-500 text-lg flex items-center' onClick={onClose}>...</p>
                </div>
                {!user ? (
                    <div className='flex flex-col p-2'>
                        <p className='text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100' onClick={() => handleNavigate('/rooms')}>Rooms</p>
                        <p className='text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100' onClick={() => handleNavigate('/about')}>About</p>
                        <p className='text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100' onClick={() => handleNavigate('/informations')}>Information</p>
                        <p className='text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100' onClick={() => handleNavigate('/mybookings')}>Booking</p>
                        <p className='text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100' onClick={() => handleNavigate('/login')}>Login </p>
                        <p className='text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100' onClick={() => handleNavigate('/register')}>Register</p>
                    </div>
                ) : (
                    <div>
                        <div className='w-full py-2 flex items-center'>
                            <PiUserCircleDuotone size={50} />
                            <div>
                                <p className='text-sm font-semibold'>{user.name}</p>
                                <p className='text-[9px] text-gray-500'>{user.email}</p>
                            </div>
                        </div>
                            <div className='flex flex-col p-2'>
                                <p className='text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100' onClick={() => handleNavigate('/rooms')}>Rooms</p>
                                <p className='text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100' onClick={() => handleNavigate('/about')}>About</p>
                                <p className='text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100' onClick={() => handleNavigate('/informations')}>Information</p>
                                <p className='text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100' onClick={() => handleNavigate('/mybookings')}>Booking</p>
                                <p className='text-sm w-full border-b py-3 hover:text-[#FFD700] transition duration-100' onClick={handleLogout}>Log Out</p>
                            </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SidebarMobile