import React, { useEffect, useState } from 'react'
import NewsImage from '../assets/roomtype/deluxe.jpeg'
import { getAllInformtions } from '../Api';

const Information = () => {
    const [informations, setInformations] = useState([])

    const fetchInformations = async () => {
        try {
            const res = await getAllInformtions()
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
                <p className='text-2xl font-bold'>Explore Us</p>
                <p className='font-serif text-[#FFD700] font-light mt-2'>Find information related to Zafotel by visiting our blog</p>
            </div>
            <div className='w-full h-auto'>
                <div className='grid grid-cols-3 gap-5 place-items-center'>
                    {informations.map((info, index) => (
                        <div key={index} className='w-100 h-100 flex flex-col justify-between rounded-xs border border-gray-300 shadow-lg cursor-pointer'>
                            <div className='flex flex-col justify-between'>
                                <img src={NewsImage} className='w-100 h-60 object-cover object-center' />
                                <div className='p-4'>
                                    <p className='text-sm h-10 font-semibold'>{info.title}</p>
                                    <p className='text-sm text-gray-500 py-4'>{new Date(info.createdAt).toLocaleDateString()}</p>
                                    <button className='border py-2 px-6 text-xs bg-gray-900 text-white rounded-xs hover:bg-white hover:text-black transition duration-100'>Read More —▸</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <p className='text-center py-4 text-lg font-serif'>Explore Other</p>
            </div>
        </div>
    )
}

export default Information