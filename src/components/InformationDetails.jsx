import React, { useEffect, useState } from 'react'
import { getInformationById } from '../Api.jsx'
import { useParams } from 'react-router-dom'
import Motion from "@/components/Motion"

const InformationDetails = () => {
    const [information, setInformation] = useState([])
    const { id } = useParams()

    const getInformation = async () => {
        try {
            const res = await getInformationById(id)
            setInformation(res.data)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (id) getInformation()
    }, [])

    return (
        <div>
            <Motion variant="fadeIn">
            <div style={{ backgroundImage: `url(${information.image})` }} className='w-full h-auto bg-cover bg-center'>
                <div className='bg-black/50 w-full h-80 flex items-center justify-center'>
                    <p className='text-white text-xl'>Home / Informations</p>
                </div>
            </div>
            </Motion>
            <Motion>
            <div>
                <p>{information.title}</p>
                <p>{information.content}</p>
            </div>
            </Motion>
        </div>
    )
}

export default InformationDetails