import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = ({ user, onToggleModals, onLogout }) => {
    return (
        <div>
            <Navbar user={user} onToggleModals={onToggleModals} onLogout={onLogout} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout