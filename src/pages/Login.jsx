import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from "../Api"
import { toast } from "react-toastify"

const Login = ({ setUser }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await login({ email, password })
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            setUser(res.data.user)
            toast.success("Login Successful")
            navigate("/")
        } catch (err) {
            toast.warning(err.response?.data?.message || "Something went wrong")
            console.log(err)
        }
    }

    return (
        <div className='h-screen flex flex-col items-center justify-center bg-cover bg-center' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
            <div className='w-4/5 md:w-120 h-auto  border rounded-xl p-5 z-50 inset-0 bg-transparent backdrop-blur'>
                <p onClick={() => navigate('/')} className='text-white text-left mb-2 cursor-pointer'>X</p>
                <div className='flex justify-center items-center'>
                    <p className='text-white font-serif text-lg md:text-xl'>Login</p>
                </div>
                <div className='flex flex-col w-full h-auto text-white'>
                    <form onSubmit={handleSubmit} className='flex flex-col w-full space-y-1 md:space-y-3 text-sm'>
                        <label>Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Ex. jerdnonarch@gmail.com' className='w-full border h-10 rounded-xl px-2 text-white' />
                        <label>Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Ex. 12345678' className='w-full border h-10 rounded-xl px-2' />
                        <button type="submit" className='bg-yellow-400 hover:bg-gray-900 hover:text-white transition duration-100 font-serif py-2 rounded-xl mt-5 cursor-pointer'>Login</button>
                    </form>
                    <button onClick={() => navigate("/register")} className='text-center mt-3 text-sm cursor-pointer'>Don't have account?</button>
                </div>
            </div>
        </div>
    )
}

export default Login