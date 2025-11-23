import React from 'react'

const RoomsTable = ({ room, onEdit, onDelete }) => {
    return (
        <div className='w-full overflow-x-hidden z-0 h-[80vh] overflow-y-auto'>
            <div className='grid grid-cols-7 place-items-center border-b'>
                <p>Pictures</p>
                <p>Room Name</p>
                <p>Price / Night</p>
                <p>Units</p>
                <p>Booked</p>
                <p>Available</p>
                <p>Action</p>
            </div>
            {room.map((room, index) => (
                <div key={index} className='grid grid-cols-7 place-items-center justify-between items-center py-4'>
                    <img src={room.image[0]} className='w-30 h-20 rounded-lg' />
                    <p>{room.name}</p>
                    <p>{room.price}</p>
                    <p className=''>{room.totalUnits}</p>
                    <p className=''>{room.bookedUnits}</p>
                    <p>{room.availableUnits}</p>
                    <div className='flex px-3'>
                        <button onClick={() => onEdit(room)} className='py-2 w-17 border rounded-xl bg-black text-white hover:bg-white hover:text-black transition duration-100'>Edit</button>
                        <button onClick={() => onDelete(room._id)} className='py-2 w-17 border rounded-xl bg-red-500 text-white hover:bg-white hover:text-black transition duration-100'>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RoomsTable