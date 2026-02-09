import React, { useEffect, useState } from 'react'
import { getAllInformations } from '../Api';
import { useNavigate } from 'react-router-dom';
import InformationsCard from "../components/InformationsCard"

const Information = () => {
    const [informations, setInformations] = useState([])
    const navigate = useNavigate()

    const fetchInformations = async () => {
        try {
            const res = await getAllInformations()
            setInformations(res.data.slice(0, 3))
            console.log(res.data.slice(0, 3))
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
                <p className='text-xl md:text-4xl font-serif'>Explore Us</p>
                <p className='text-[10px] lg:text-xl font-serif text-[#FFD700] font-light mt-2'>Find information related to Zafotel by visiting our blog</p>
            </div>
            <div className='w-full h-auto p-4'> 
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center'>
                    <InformationsCard informations={informations} />
                </div>
            </div>
            <div>
                <p onClick={() => navigate("/informations")} className='text-center py-4 text-xs md:text-sm lg:text-lg font-serif'>Explore Other</p>
            </div>
        </div>
    )
}

export default Information