import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-8 h-10 bg-transparant rounded-b-xl z-50 inset-0 fixed top-0'>
            <div>
                <p className='text-xl text-white font-bold'>Zafotel</p>
            </div>
            <div className='flex text-white gap-4'>
                <p>Rooms</p>
                <p>About</p>
                <p>Information</p>
                <p>Booking</p>
            </div>
            <div className='flex text-white'>
                <p>Sign / </p>
                <p>Sign up</p>

            </div>
        </div>
    )
}

export default Navbar