import React, { useEffect, useState } from 'react'
import RoomsCard from '../components/RoomsCard'
import RoomFilter from '../components/RoomFilter'
import { getAllRooms } from '@/Api'
import { useNavigate } from 'react-router-dom'

const Room = () => {
    const [rooms, setRoom] = useState([])
    const navigate = useNavigate()

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
        <div className='w-full bg-gray-900'>
            <div className='relative'>
            <div className='w-full h-full bg-center bg-cover z-0' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
                    <div className='h-80 flex flex-col justify-center items-center bg-black/40 w-full p-9'>
                        <p className='text-6xl text-white border-b border-yellow-500 pb-2'>Our Rooms</p>
                        <p className='text-xl text-white'><span onClick={() => navigate("/")}>Home</span> / Rooms</p>
                    </div>
                </div>

            </div>
            <div className="">
                {rooms.map((room, index) => (
                    <RoomsCard rooms={room} index={index % 2 === 0} />
                ))}
            </div>
        </div>

    )
}

export default Room