import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PiUserCircleDuotone } from "react-icons/pi";


const AccountModals = ({ user, closeModals, onLogout }) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        onLogout()
        navigate('/')
        alert("Log Out success")
    }
    console.log(user)
    return (
        <div onClick={closeModals} className='inset-0 z-100 bg-black/10 fixed cursor-default'>
            <div className='w-50 h-auto flex flex-col items-center bg-white mt-16 z-100 fixed right-5 rounded-xl'>
                <PiUserCircleDuotone size="60" className='mt-3' />
                <p onClick={closeModals} className='font-semibold py-2 w-full text-center text-xl'>{user.name}</p>
                <button onClick={handleLogout} className='font-semibold text-gray-500 py-2 border-t w-full'>Log Out</button>
            </div>
        </div>
    )
}

export default AccountModals