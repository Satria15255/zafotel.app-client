import React from 'react'
import { useNavigate } from 'react-router-dom'

const InformationsCard = ({ informations }) => {
    const navigate = useNavigate()

    return (
        <div>
            <div className='w-full h-auto'>
                <div className='grid grid-cols-1 gap-5 place-items-center'>
                    {informations.map((info, index) => (
                        <div key={index} className='w-80 md:w-60 lg:w-100 h-auto flex flex-col justify-between rounded-xs border border-gray-300 shadow-lg cursor-pointer'>
                            <div className='flex flex-col justify-between'>
                                <img src={info.image} className='w-full h-50 md:h-auto object-cover object-center' />
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
        </div>
    )
}

export default InformationsCard