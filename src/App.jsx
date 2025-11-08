import { Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './admin/pages/Dashboard'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Superiority from './pages/Superiority'
import AboutUs from './pages/AboutUs'
import Welcome from './pages/Welcome'
import RoomTypeHomep from './pages/RoomTypeHomep'
import HotelFacilities from './pages/HotelFacilities'
import Testimoni from './pages/Testimoni'
import Information from './pages/Information'
import Footer from './components/Footer'
import AdminLayout from './layout/AdminLayout'

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path='/admin' element={
          <div>
            <AdminLayout />
          </div>
        }></Route>
        <Route path='/' element={
          <div>
            <Navbar />
            <Hero />
            <Superiority />
            <AboutUs />
            <Welcome />
            <RoomTypeHomep />
            <HotelFacilities />
            <Testimoni />
            <Information />
            <Footer />
          </div>
        }>
        </Route>
      </Routes>

    </div>
  )
}

export default App
