import React, { useState } from 'react'
import { updateRooms } from '../../Api'

const UpdateRoomForm = ({ room, onClose, onSuccess }) => {
    const [form, setForm] = useState({
        name: room.name,
        description: room.description,
        price: room.price,
        size: room.details.size,
        capacity: room.details.capacity,
        bedType: room.details.bedType,
        amenities: room.details.amenities,
        totalUnits: room.totalUnits,
        facilities: room.facilities,
        bookedUnits: room.bookedUnits
    })
    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState(room.image)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files)
        if (files.length > 4) {
            return
        }
        setImage(files)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", form.name)
        formData.append("description", form.description)
        formData.append("price", form.price)
        formData.append("size", form.size)
        formData.append("capacity", form.capacity)
        formData.append("bedType", form.bedType)
        formData.append("totalUnits", form.totalUnits)
        formData.append("amenities", form.amenities)
        formData.append("facilities", form.facilities)
        formData.append("bookedUnits", form.bookedUnits)
        if (image) {
            formData.append("image", image)
        }
        try {
            await updateRooms(room._id, formData)
            onSuccess()
            alert("Update success")
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className='z-100 inset-0 flex justify-center items-center fixed bg-black/40'>
            <div className='bg-white w-4/5 max-h-[90vh] overflow-y-scroll rounded-lg p-4'>
                <p className='text-xl text-center font-serif mt-3'>Update Room</p>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className='font-semibold mb-2'>Room Name</label>
                            <input value={form.name} name='name' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' />
                        </div>
                        <div>
                            <label className='font-semibold'>Price / Night</label>
                            <input value={form.price} name='price' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' />
                        </div>
                        <div>
                            <label className='font-semibold'>Descriptions</label>
                            <input value={form.description} name='description' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' />
                        </div>
                        <div>
                            <label className='font-semibold'>Units</label>
                            <input value={form.totalUnits} name='totalUnits' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' />
                        </div>
                        <div>
                            <label className='font-semibold'>Booked Units</label>
                            <input value={form.bookedUnits} name='bookedUnits' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' />
                        </div>
                        <div>
                            <label className='font-semibold'>Room Size</label>
                            <input value={form.size} name='size' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' />
                        </div>
                        <div>
                            <label className='font-semibold'>Bed Type</label>
                            <input value={form.bedType} name='bedType' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' />
                        </div>
                        <div>
                            <label className='font-semibold'>Capacity</label>
                            <input value={form.capacity} name='capacity' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' />
                        </div>
                        <div>
                            <label className='font-semibold'>Amenities</label>
                            <input value={form.amenities} name='amenities' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' />
                        </div>
                        <div>
                            <label className='font-semibold'>Facilities</label>
                            <input value={form.facilities} name='facilities' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' />
                        </div>
                        <div>
                            <label className='font-semibold'>Picture of the Room (Max 4 Picture)</label>
                            <div className='flex gap-2'>
                                {preview.map((img, index) => (
                                    <div key={index} className='mb-2'>
                                        <img src={img} className='w-50 h-30 rounded-xl' />
                                    </div>
                                ))}
                            </div>
                            <input type='file' accept="image/*" multiple onChange={handleImageChange} className='w-full border h-10 px-2 rounded-lg' />
                        </div>
                        <div className='flex gap-2 mt-6'>
                            <button type='submit' className='w-1/2 rounded-xl h-10 bg-gray-900 text-white hover:bg-white hover:text-black transition duration-100 border'>Update</button>
                            <button onClick={onClose} className='w-1/2 rounded-xl h-10 bg-gray-900 text-white hover:bg-white hover:text-black transition duration-100 border'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default UpdateRoomForm