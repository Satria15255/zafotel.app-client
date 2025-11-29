import { Route, Routes, useNavigate } from 'react-router-dom'
import Hero from './pages/Hero'
import Superiority from './pages/Superiority'
import AboutUs from './pages/AboutUs'
import Welcome from './pages/Welcome'
import RoomTypeHomep from './pages/RoomTypeHomep'
import HotelFacilities from './pages/HotelFacilities'
import Testimoni from './pages/Testimoni'
import Information from './pages/Information'
import RoomDetail from './components/RoomDetails'
import InformationDetail from './components/InformationDetails'
import AdminLayout from './layout/AdminLayout'
import MainLayout from './layout/MainLayout'
import BookingReview from './components/BookingReview'
import Register from './pages/Register'
import Login from './pages/Login'
import RoomPages from './pages/Room'
import AboutUsPages from './pages/AboutUsPage'
import InformationsPages from './pages/InformationsPage'
import RoomManagement from './admin/pages/RoomManagement'
import InformManagement from './admin/pages/InformManagement'
import UploadRoomForm from './admin/components/UploadRoomForm'
import InformationsUpload from './admin/components/InformationsUpload'
import UpdateRoomForm from './admin/components/UpdateRoomForm'
import { useEffect, useState } from 'react'

function App() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) setUser(JSON.parse(storedUser))
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/admin' element={
          <div>
            <AdminLayout />
          </div>
        }>
          <Route path='/admin/rooms' element={<RoomManagement />} />
          <Route path='/admin/rooms/upload' element={<UploadRoomForm />} />
          <Route path='/admin/rooms/updateroom' element={<UpdateRoomForm />} />
          <Route path='/admin/informations' element={<InformManagement />} />
          <Route path='/admin/informations/upload' element={<InformationsUpload />} />
        </Route>
        <Route element={<MainLayout />} >
        <Route path='/' element={
            <div>
            <Hero />
            <Superiority />
            <AboutUs />
            <Welcome />
            <RoomTypeHomep />
            <HotelFacilities />
            <Testimoni />
              <Information />
          </div>
        } />
          <Route path='/rooms' element={<RoomPages />} />
          <Route path='/rooms/:id' element={<RoomDetail />} />
          <Route path='/about' element={<AboutUsPages />} />
          <Route path='/informations' element={<InformationsPages />} />
          <Route path='/informations/:id' element={<InformationDetail />} />
          <Route path='/bookings-review' element={<BookingReview />} />

        </Route>

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
      </Routes>

    </div>
  )
}

export default App
