import React, { useEffect, useState } from 'react'
import { getAllInformations, deletedInformations } from '../../Api'
import InformationsTabel from '../components/InformationsTabel'
import UpdateInformationsForm from '../components/UpdateInformationsForm'
import { useNavigate } from 'react-router-dom'

const InformManagement = () => {
    const [informations, setInformations] = useState([])
    const [updateInformations, setUpdateInformations] = useState(null)
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

    const handleUpdateSucces = () => {
        setUpdateInformations(null)
        fetchInformations()
    }

    const handleDelete = async (id) => {
        try {
            await deletedInformations(id)
            fetchInformations()
            alert("Delete Success")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='w-full'>
            <p className='text-center py-3 text-xl font-serif'>
                Information Management
            </p>
            <InformationsTabel informations={informations} onEdit={(informations) => setUpdateInformations(informations)} onDelete={handleDelete} />
            <div className='px-5 fixed right-0'>
                <button onClick={() => navigate('/admin/informations/upload')} className='w-30 h-10 bg-black text-white rounded-xl border hover:bg-white hover:text-black transition duration-100' >Upload</button>
            </div>
            {updateInformations && <UpdateInformationsForm informations={updateInformations} onClose={() => setUpdateInformations(null)} onSuccess={handleUpdateSucces} />}

        </div>
    )
}

export default InformManagement