import React, { useEffect, useState } from 'react'
import RoomsCard from '../components/RoomsCard'
import { getAllRooms } from '@/Api'

const Room = () => {
    const [rooms, setRoom] = useState([])

    const fetchRoom = async () => {
        try {
            const res = await getAllRooms()
            setRoom(res.data)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchRoom()
    }, [])
    return (
        <div>
            <div className='w-full h-full bg-center bg-cover z-0' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
                <div className='h-80 flex flex-col justify-center items-center bg-black/20 w-full p-9'>
                    <p className='text-xl text-white'>Home / Rooms</p>
                </div>
            </div>
            <div>
                <RoomsCard rooms={rooms} />
            </div>
        </div>

    )
}

export default Room