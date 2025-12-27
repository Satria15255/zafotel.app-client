import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../Api'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await register({ name, email, password })
            alert("Registration Successful")
            navigate("/login")
        } catch (err) {
            alert(err.response?.data?.message || "Something went wrong")
        }
    }

    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <div className='w-4/5 md:w-120 h-auto  border rounded-xl p-5 z-50 inset-0 bg-white'>
                <p onClick={() => navigate('/')} className='text-gray-500 text-left mb-2'>X</p>
                <div className='flex justify-center items-center'>
                    <p className='font-serif text-lg md:text-xl'>Register</p>
                </div>
                <div className='flex flex-col w-full h-auto'>
                    <form onSubmit={handleSubmit} className='flex flex-col w-full space-y-1 md:space-y-3 text-sm md:text-lg'>
                        <label>Username</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Ex. Jerdn Onarch' className='w-full border h-10 rounded-xl px-2' />
                        <label>Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Ex. jerdnonarch@gmail.com' className='w-full border h-10 rounded-xl px-2' />
                        <label>Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Ex. 12345678' className='w-full border h-10 rounded-xl px-2' />
                        <button type="submit" className='bg-yellow-400 hover:bg-gray-900 hover:text-white transition duration-100 font-serif py-2 rounded-xl mt-5'>Register</button>
                    </form>
                    <button onClick={() => navigate("/login")} className='text-center mt-3 text-sm'>Have any account?</button>
                </div>
            </div>
        </div>
    )
}

export default Register