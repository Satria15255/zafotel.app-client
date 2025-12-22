import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user"))

    if (!user) return <Navigate to="/admin-login" replace />
    if (user.role !== "admin")
        return (
            <div>
                <h1 className="text-red-500">acces denied</h1>
            </div>
        )

    return children
}

export default AdminRoute