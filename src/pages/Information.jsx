import React, { useEffect, useState } from 'react'
import { getAllInformations } from '../Api';
import { useNavigate } from 'react-router-dom';
import InformationsCard from "../components/InformationsCard"
import Motion from "@/components/Motion"

const Information = () => {
    const [informations, setInformations] = useState([])
    const navigate = useNavigate()

    const fetchInformations = async () => {
        try {
            const res = await getAllInformations()
            setInformations(res.data.slice(0, 3))
            console.log(res.data.slice(0, 4))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchInformations()
    }, [])

    return (
        <div className='h-auto pb-6'>
            <Motion>
                <div className='text-center py-8 space-y-3'>
                    <p className='text-2xl md:text-4xl font-serif'>— Zafotel Journal —</p>
                    <p className='text-sm lg:text-lg font-serif text-[#c69c6d] font-light mt-2'>Insights, updates, and experiences</p>
                </div>
            </Motion>
            <Motion delay={0.4}>
                <div className='flex grid md:grid-cols-3 place-items-center gap-2 py-4 '>
                    {informations.map((i, index) => (
                        <div key={index}>
                            <InformationsCard informations={i} />
                        </div>
                    ))}
                </div>
            </Motion>
            <div>
                <p onClick={() => navigate("/informations")} className='text-center py-4 text-xs md:text-sm lg:text-lg font-serif'>Explore Other</p>
            </div>
        </div>
    )
}

export default Information