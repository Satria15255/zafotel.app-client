import React, { useState } from 'react'
import { updateInformations } from '../../Api'

const UpdateInformationsForm = ({ informations, onClose, onSuccess }) => {
    const [form, setForm] = useState({
        title: informations.title,
        content: informations.content
    })
    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState(informations.image)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setImage(file)
        setPreview(URL.createObjectURL(file))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", form.title)
        formData.append("content", form.content)
        if (image) {
            formData.append("image", image)
        }
        try {
            await updateInformations(informations._id, formData)
            onSuccess()
            alert("Update Success")
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <div className='z-100 inset-0 bg-black/40 fixed flex items-center justify-center'>
            <div className='bg-white w-4/5 h-4/5 p-5 rounded-xl'>
                <p className='text-xl text-center font-serif'>Update Information</p>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <label className='font-bold '>Title</label>
                    <input value={form.title} name='title' onChange={handleChange} className='border px-2 rounded-xl w-full' />
                    <label className='font-bold mt-2'>Content</label>
                    <textarea value={form.content} name='content' onChange={handleChange} className='border px-2 rounded-xl w-full min-h-[50]' />
                    <label className='font-bold mt-2'>Thumbnail</label>
                    <input type='file' accept='image/*' onChange={handleImageChange} className='border px-2 rounded-xl w-full' />
                    {preview && <img src={preview} className='w-50 h-30 rounded-xl mt-2' />}
                </form>
                <div className='flex gap-2 mt-6'>
                    <button onClick={onClose} className='w-1/2 rounded-xl h-10 bg-gray-900 text-white hover:bg-white hover:text-black transition duration-100 border'>Cancel</button>
                    <button onClick={handleSubmit} type='submit' className='w-1/2 rounded-xl h-10 bg-gray-900 text-white hover:bg-white hover:text-black transition duration-100 border'>Update</button>
                </div>
            </div>
        </div>

    )
}

export default UpdateInformationsForm