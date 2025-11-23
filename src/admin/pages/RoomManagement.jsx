import React, { useEffect, useState } from 'react'
import { getAllRooms, deletedRooms } from '../../Api'
import UpdateRoomForm from "../components/UpdateRoomForm"
import RoomsTable from '../components/RoomsTable'
import { useNavigate } from 'react-router-dom'

const RoomManagement = () => {
    const [room, setRoom] = useState([])
    const [image, setImage] = useState("0")
    const [updateRoom, setUpdateRoom] = useState(null)
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
        if (room && room.image && room.image.length > 0) {
            setImage(room.image[0])
        }
    })

    useEffect(() => {
        fetchRoom()
    }, [])

    const handleUpdateSuccess = () => {
        setUpdateRoom(null)
        fetchRoom()
    }

    const handleDelete = async (id) => {
        try {
            await deletedRooms(id)
            fetchRoom()
            console.log("deleted succes")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='w-full'>
            <div>
                <p className='font-serif text-xl text-center p-5'>Rooms Management Page</p>
            </div>
            <RoomsTable room={room} onEdit={(room) => setUpdateRoom(room)} onDelete={handleDelete} />
            {updateRoom && <UpdateRoomForm room={updateRoom} onClose={() => setUpdateRoom(null)} onSuccess={handleUpdateSuccess} />}
            <div className='px-5 fixed right-0'>
                <button onClick={() => navigate('/admin/rooms/upload')} className='h-10 w-40 text-sm border rounded-xl hover:bg-black hover:text-white'>Upload New Room</button>
            </div>

        </div>
    )
}

export default RoomManagement 