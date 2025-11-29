import React, { useEffect, useState } from 'react'
import { getAllInformations } from '@/Api'
import InformationsCard from '../components/InformationsCard'

const InformationsPage = () => {
    const [informations, setInformations] = useState([])

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
        <div>
            <div className='w-full h-full bg-center bg-cover z-0' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
                <div className='h-80 flex flex-col justify-center items-center bg-black/20 w-full p-9'>
                    <p className='text-xl text-white'>Home / Informations</p>
                </div>
            </div>
            <div className='p-8'>
                <InformationsCard informations={informations} />
            </div>
        </div>
    )
}

export default InformationsPage