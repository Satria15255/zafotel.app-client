import React, { useState } from 'react'
import { createRooms } from '../../Api'
import { useNavigate } from 'react-router-dom'


const UploadRoomForm = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        price: "",
        description: "",
        size: "",
        bedType: "",
        capacity: "",
        amenities: "",
        facilities: "",
        totalUnits: "",
    })
    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState([])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files)

        const previewUrls = files.map((file) => ({
            file,
            preview: URL.createObjectURL(file)
        }))
        setPreview(previewUrls)
        setImage(files)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        Object.entries(form).forEach(([key, value]) => {
            formData.append(key, value)
        })
        image.forEach((img) => formData.append("image", img))

        try {
            await createRooms(formData)
            alert("Upload Room succesfull")
            console.log(form)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='z-100 inset-0 flex justify-center items-center bg-black/40 fixed'>
            <div className='bg-white w-4/5 max-h-[90vh] overflow-y-auto rounded-xl p-4 '>
                <p className='text-center text-xl font-serif '>Upload New Room</p>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className='font-semibold mb-2'>Room Name</label>
                            <input name='name' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' placeholder='Ex. Luxury Room' />
                        </div>
                        <div>
                            <label className='font-semibold mb-2'>Price / Night</label>
                            <input name='price' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' placeholder='Ex. $100' />
                        </div>
                        <div>
                            <label className='font-semibold mb-2'>Descriptions </label>
                            <input name='description' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' placeholder='Ex. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores voluptatibus consequatur dolorem?' />
                        </div>
                        <div>
                            <label className='font-semibold mb-2'>Units</label>
                            <input name='totalUnits' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' placeholder='Ex. 10' />
                        </div>
                        <div>
                            <label className='font-semibold mb-2'>Size</label>
                            <input name='size' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' placeholder='Ex. 15' />
                        </div>
                        <div>
                            <label className='font-semibold mb-2'>Bed Type</label>
                            <input name='bedType' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' placeholder='Ex. Singel / Double' />
                        </div>
                        <div>
                            <label className='font-semibold mb-2'>Capacity</label>
                            <input name='capacity' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' placeholder='Ex. 1/2' />
                        </div>
                        <div>
                            <label className='font-semibold mb-2'>Amenities</label>
                            <input name='amenities' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' placeholder='Ex. TV, AC, Balkon, Bathup' />
                        </div>
                        <div>
                            <label className='font-semibold mb-2'>Facilities</label>
                            <input name='facilities' onChange={handleChange} className='w-full border h-10 px-2 rounded-lg' placeholder='Ex. Gym, Breakfast, Airport Shuffle' />
                        </div>
                        <div>
                            <label className='font-semibold mb-2'>Picture of the Room ( 4 Picture )</label>
                            <div className='flex gap-2 mb-2'>
                                {preview.map((img, index) => (
                                    <div key={index}>
                                        <img src={img.preview} className='w-50 h-30 rounded-xl' />
                                    </div>
                                ))}
                            </div>
                            <input type='file' accept="image/*" multiple onChange={handleImageChange} className='w-full border h-10 px-2 rounded-lg' placeholder='Ex. Luxury Room' />
                        </div>
                        <div className='flex gap-2'>
                            <button onClick={() => navigate('/admin/rooms')} className='mt-3 h-10 w-20 rounded-xl bg-gray-900 text-white border hover:bg-white hover:text-black transition duration-100'>Cancel</button>
                            <button type='submit' className='mt-3 h-10 w-20 rounded-xl bg-gray-900 text-white border hover:bg-white hover:text-black transition duration-100'>Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default UploadRoomForm