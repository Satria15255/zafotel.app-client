import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../admin/components/Sidebar'

const AdminLayout = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default AdminLayout