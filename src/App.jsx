import { Route, Routes, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

// Pages
import Hero from "@/features/home/Hero";
import AboutUs from "@/features/home/AboutUs";
import HotelFacilities from "@/features/home/HotelFacilities";
import Information from "@/features/home/Information";
import RoomTypeHomep from "@/features/home/RoomTypeHomep";
import Superiority from "@/features/home/Superiority";
import Testimoni from "@/features/home/Testimoni";
import Welcome from "@/features/home/Welcome";

// Booking
import BookingPayment from "@/pages/booking/BookingPayment";
import MyBookingsRoom from "@/pages/booking/Bookings";
import SuccesBook from "@/pages/booking/SuccesBook";
import BookingDetails from "@/features/booking/components/BookingDetails";
import BookingReview from "@/features/booking/components/BookingReview";

// Rooms
import RoomPages from "@/pages/public/Room";
import RoomDetail from "@/features/rooms/components/RoomDetails";

// News / Information
import InformationDetail from "@/features/news/components/InformationDetails";
import InformationsPages from "@/pages/public/InformationsPage";

// Auth
import Register from "@/pages/auth/Register";
import Login from "@/pages/auth/Login";
import AdminLoginPage from "@/pages/auth/AdminLogin";
import AdminRoute from "@/admin/routes/AdminRoute";
import AccountModals from "@/features/auth/components/AccountModals";

// Public
import AboutUsPages from "@/pages/public/AboutUsPage";

// Common
import GlobalLoader from "@/components/common/GlobalLoader";
import ScrollToTop from "@/components/layout/ScrollToTop";

// Layout
import AdminLayout from "@/layout/AdminLayout";
import MainLayout from "@/layout/MainLayout";

// Admin Panel
import RoomManagement from "@/admin/rooms/pages/RoomManagement";
import InformManagement from "@/admin/news/pages/InformManagement";
import BookingsManagement from "@/admin/booking/pages/BookingsManagement";
import UploadRoomForm from "@/admin/rooms/components/UploadRoomForm";
import InformationsUpload from "@/admin/news/components/InformationsUpload";
import UpdateRoomForm from "@/admin/rooms/components/UpdateRoomForm";

function App() {
  const [user, setUser] = useState(null);
  const [accountsModal, setAccountModal] = useState(false);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <GlobalLoader />;

  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/admin-login" element={<AdminLoginPage />} />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route path="/admin/rooms" element={<RoomManagement />} />
          <Route path="/admin/rooms/upload" element={<UploadRoomForm />} />
          <Route path="/admin/rooms/updateroom" element={<UpdateRoomForm />} />
          <Route path="/admin/informations" element={<InformManagement />} />
          <Route
            path="/admin/informations/upload"
            element={<InformationsUpload />}
          />
          <Route
            path="/admin/bookinghistory"
            element={<BookingsManagement />}
          />
        </Route>

        <Route
          element={
            <MainLayout
              user={user}
              onToggleModals={() => setAccountModal(!accountsModal)}
              onLogout={() => {
                localStorage.clear();
                setUser(null);
              }}
            />
          }
        >
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <Superiority />
                <Welcome />
                <RoomTypeHomep />
                <HotelFacilities />
                <Testimoni />
                <Information />
              </div>
            }
          />
          <Route path="/rooms" element={<RoomPages />} />
          <Route path="/rooms/:id" element={<RoomDetail />} />
          <Route path="/about" element={<AboutUsPages />} />
          <Route path="/news" element={<InformationsPages />} />
          <Route path="/news/:id" element={<InformationDetail />} />
          <Route path="/mybookings" element={<MyBookingsRoom />} />
          <Route path="/bookings-review" element={<BookingReview />} />
          <Route path="/booking-success/:id" element={<SuccesBook />} />
          <Route
            path="/mybookings/booking-payment/:id"
            element={<BookingPayment />}
          />
          <Route
            path="/mybookings/booking-detail/:id"
            element={<BookingDetails />}
          />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>

      {accountsModal && (
        <AccountModals
          user={user}
          closeModals={() => setAccountModal(false)}
          onLogout={() => {
            localStorage.clear();
            setUser(null);
            setAccountModal(false);
          }}
        />
      )}

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
