import React, { useState } from 'react'
import { createInformation } from '../../Api'
import { useNavigate } from 'react-router-dom'


const InformationsUpload = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        title: "",
        content: ""
    })
    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState(null)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleImageChange = async (e) => {
        const file = e.target.files[0]
        setImage(file)
        setPreview(URL.createObjectURL(file))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        Object.entries(form).forEach(([key, value]) => {
            formData.append(key, value)
        })
        formData.append("image", image)

        try {
            await createInformation(formData)
            alert("Information Uploaded")
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='z-100 inset-0 fixed bg-black/40 flex justify-center items-center'>
            <div className='bg-white w-4/5 h-[85vh] rounded-xl p-5 '>
                <p className='text-center text-xl font-serif'>Upload Informations</p>
                <div className='flex flex-col space-y-3'>
                    <form onSubmit={handleSubmit}>
                        <label className='font-bold'>Title</label>
                        <input name='title' onChange={handleChange} palceholder='Information Title' className='border w-full h-10 rounded-xl px-2' />
                        <label className='font-bold'>Content</label>
                        <textarea type='text-area' name='content' onChange={handleChange} placeholder='Content' className='border min-h-[40vh] w-full rounded-xl px-2' />
                        <label className='font-bold'>Thumbnail</label>
                        <input type='file' accept='image/*' onChange={handleImageChange} className='border w-full h-10 rounded-xl px-2' />
                        {preview && <img src={preview} />}
                    </form>
                    <div className='flex gap-2 mt-5'>
                        <button onClick={() => navigate('/admin/informations')} className='w-1/2 h-10 bg-black text-white border rounded-xl hover:bg-white hover:text-black transition duration-100'>Cancel</button>
                        <button onClick={handleSubmit} type='submit' className='w-1/2 h-10 bg-black text-white border rounded-xl hover:bg-white hover:text-black transition duration-100'>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationsUpload