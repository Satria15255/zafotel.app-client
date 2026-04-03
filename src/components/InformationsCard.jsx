import React from 'react'
import { useNavigate } from 'react-router-dom'

const InformationsCard = ({ informations }) => {
    const navigate = useNavigate()

    return (
        <div className='w-full h-auto'>
            <div className='w-100 h-auto  rounded-xs border border-gray-300 shadow-lg cursor-pointer'>
                <div className='flex flex-col justify-between'>
                    <img src={informations.image} className='w-100 h-50 object-cover object-center' />
                    <div className='p-4'>
                        <p className='text-xs lg:text-sm h-10 font-semibold'>{informations.title}</p>
                        <p className='text-[10px] lg:text-sm text-gray-500 py-4'>{new Date(informations.createdAt).toLocaleDateString()}</p>
                        <button onClick={() => navigate(`/informations/${informations._id}`)} className='border py-2 px-6 text-[10px] lg:text-xs bg-gray-900 text-white rounded-xs hover:bg-white hover:text-black transition duration-100'>Read More —▸</button>
                    </div>
                </div>
            </div>

            <div className='md:hidden'>
                <div className='w-100 h-auto py-2 border-b rounded-xs cursor-pointer'>
                    <div className='flex' onClick={() => navigate(`/informations/${informations._id}`)}>
                        <div className='w-2/5 h-1/5'>
                            <img src={informations.image} className='w-100 h-full object-cover object-center' />
                        </div>
                        <div className='flex flex-col justify-center px-4'>
                            <p className='text-sm lg:text-sm h-10 font-semibold'>{informations.title}</p>
                            <p className='text-[10px] lg:text-sm text-gray-500 py-4'>{new Date(informations.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationsCard