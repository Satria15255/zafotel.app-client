import React, { useEffect, useState } from 'react'
import { getAllInformations } from '@/Api'
import { useNavigate } from 'react-router-dom'
import InformationsCard from '../components/InformationsCard'
import Motion from "@/components/Motion"

const InformationsPage = () => {
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
        <div>
            <Motion variant="fadeIn">
                <div className='w-full h-full bg-center bg-cover z-0' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
                    <div className='h-80 flex flex-col justify-center items-center bg-black/40 w-full p-9'>
                        <p className='text-6xl text-white border-b border-yellow-500 pb-2'>News </p>
                        <p className='text-xl text-white'><span onClick={() => navigate("/")}>Home</span> / Informations</p>
                    </div>
                </div>
            </Motion>
            <Motion>
                <div className='grid md:grid-cols-3 place-items-center gap-2 p-8'>
                    {informations.map((i, index) => (
                        <div key={index}>
                            <InformationsCard informations={i} />
                        </div>
                    ))}
                </div>
            </Motion>
        </div>
    )
}

export default InformationsPage