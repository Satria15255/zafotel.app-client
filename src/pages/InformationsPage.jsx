import React, { useEffect, useState } from 'react'
import { getAllInformations } from '@/Api'
import { useNavigate } from 'react-router-dom'
import InformationsCard from '../components/InformationsCard'
import Loader from '../components/GlobalLoader'
import Motion from "@/components/Motion"

const InformationsPage = () => {
    const [informations, setInformations] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const fetchInformations = async () => {
        try {
            setLoading(true)
            const res = await getAllInformations()
            setInformations(res.data)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchInformations()
    }, [])

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div>
                        <Motion variant="fadeIn">
                            <div className='w-full h-full bg-center bg-cover z-0' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
                                <div className='h-80 flex flex-col justify-center items-center bg-black/40 w-full p-9'>
                                    <p className='text-4xl md:text-6xl text-white border-b border-yellow-500 pb-2'>News </p>
                                    <p className='text-lg md:text-xl text-white'><span onClick={() => navigate("/")}>Home</span> / Informations</p>
                                </div>
                            </div>
                        </Motion>
                        <Motion>
                            <div className='grid md:grid-cols-3 place-items-center gap-4 md:p-3 lg:p-8'>
                                {informations.map((i, index) => (
                                    <div key={index}>
                                        <InformationsCard informations={i} />
                                    </div>
                                ))}
                            </div>
                        </Motion>
                </div>
            )}
        </div>
    )
}

export default InformationsPage