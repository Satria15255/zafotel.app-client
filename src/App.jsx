import { Route, Routes, useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
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
import MyBookingsRoom from './pages/Bookings'
import RoomManagement from './admin/pages/RoomManagement'
import InformManagement from './admin/pages/InformManagement'
import BookingsManagement from './admin/pages/BookingsManagement'
import UploadRoomForm from './admin/components/UploadRoomForm'
import InformationsUpload from './admin/components/InformationsUpload'
import UpdateRoomForm from './admin/components/UpdateRoomForm'
import { useEffect, useState } from 'react'
import AdminRoute from './components/AdminRoute'
import AdminLoginPage from './pages/AdminLogin'
import AccountModals from './components/AccountModals'
import SuccesBook from './pages/SuccesBook'

function App() {
  const [user, setUser] = useState(null)
  const [accountsModal, setAccountModal] = useState(false)
  const navigate = useNavigate();

  const clearExpiredSession = () => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      const decoded = jwtDecode(token);
      const now = Date.now() / 1000;

      if (decoded.exp < now) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        console.log("Session expired, user logged out.");
      }
    } catch (err) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      console.log("Invalid token, user logged out");
    }
  };

  useEffect(() => {
    clearExpiredSession();
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/admin-login' element={<AdminLoginPage />} />

        <Route path='/admin' element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }>
          <Route path='/admin/rooms' element={<RoomManagement />} />
          <Route path='/admin/rooms/upload' element={<UploadRoomForm />} />
          <Route path='/admin/rooms/updateroom' element={<UpdateRoomForm />} />
          <Route path='/admin/informations' element={<InformManagement />} />
          <Route path='/admin/informations/upload' element={<InformationsUpload />} />
          <Route path='/admin/bookinghistory' element={<BookingsManagement />} />
        </Route>

        <Route element={<MainLayout user={user} onToggleModals={() => setAccountModal(!accountsModal)} onLogout={() => {
          localStorage.clear()
          setUser(null)
        }} />} >
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
          <Route path='/mybookings' element={<MyBookingsRoom />} />
          <Route path='/bookings-review' element={<BookingReview />} />
          <Route path='/booking-success/:id' element={<SuccesBook />} />

        </Route>

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
      </Routes>

      {accountsModal && <AccountModals user={user} closeModals={() => setAccountModal(false)}
        onLogout={() => {
          localStorage.clear();
          setUser(null);
          setAccountModal(false);
        }} />}
    </div>
  )
}

export default App
