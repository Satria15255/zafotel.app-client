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
        <div className='w-full'>
            <div className='relative'>
            <div className='w-full h-full bg-center bg-cover z-0' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
                <div className='h-80 flex flex-col justify-center items-center bg-black/20 w-full p-9'>
                        <p className='text-xl text-white'><span onClick={() => navigate("/")}>Home</span> / Rooms</p>
                    </div>
                </div>
                {/* <div className="absolute w-full flex-justify-center bottom-5">
                    <RoomFilter />
                </div> */}
            </div>
            <div className="my-12">
                <RoomsCard rooms={rooms} />
            </div>
        </div>

    )
}

export default Room