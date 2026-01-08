import React, { useEffect, useState } from 'react'
import { getAllInformations } from '../Api';
import { useNavigate } from 'react-router-dom';

const Information = () => {
    const [informations, setInformations] = useState([])
    const navigate = useNavigate()

    const fetchInformations = async () => {
        try {
            const res = await getAllInformations()
            setInformations(res.data)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchInformations()
    }, [])

    return (
        <div className='h-auto pb-6'>
            <div className='text-center py-8'>
                <p className='text-xl md:text-2xl font-serif'>Explore Us</p>
                <p className='text-[10px] font-serif text-[#FFD700] font-light mt-2'>Find information related to Zafotel by visiting our blog</p>
            </div>
            <div className='w-full h-auto p-4'> 
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center'>
                    {informations.map((info, index) => (
                        <div key={index} className='w-60 h-auto lg:w-100 lg:h-100 flex flex-col justify-between rounded-xs border border-gray-300 shadow-lg cursor-pointer'>
                            <div className='flex flex-col justify-between'>
                                <img src={info.image} className='w-full h-60 object-cover object-center' />
                                <div className='p-4'>
                                    <p className='text-xs lg:text-sm h-10 font-semibold'>{info.title}</p>
                                    <p className='text-[10px] lg:text-sm text-gray-500 py-4'>{new Date(info.createdAt).toLocaleDateString()}</p>
                                    <button onClick={() => navigate(`/informations/${info._id}`)} className='border py-2 px-6 text-[10px] lg:text-xs bg-gray-900 text-white rounded-xs hover:bg-white hover:text-black transition duration-100'>Read More —▸</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <p onClick={() => navigate("/informations")} className='text-center py-4 text-xs md:text-sm lg:text-lg font-serif'>Explore Other</p>
            </div>
        </div>
    )
}

export default Information