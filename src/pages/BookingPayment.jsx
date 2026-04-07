import { useNavigate, useParams } from "react-router-dom"
import { getBookingById, createPayment } from "../Api"
import { useEffect, useState } from "react"
import Motion from "@/components/Motion"

const BookingPayment = () => {
    const [booking, setBooking] = useState([])
    const { id } = useParams()
    const [file, setFile] = useState(null)
    const navigate = useNavigate

    const fetchBooking = async () => {
        try {
            const res = await getBookingById(id)
            console.log(res.data)
            setBooking(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchBooking()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!file) {
            alert("Please upload payment proof")
            return
        }

        const formData = new FormData()
        formData.append("paymentProof", file)

        try {
            await createPayment(id, formData)
            navigate("/mybookings")
            alert("Payment successfully,please wait confirmed payment")
        } catch (error) {
            console.log(error)
            alert("payment failed")
        }
    }

    return (
        <div >
            <Motion variant="fadeIn">
                <div className='w-full h-full bg-center bg-cover z-0' style={{ backgroundImage: 'url(/assets/herobanner.jpg)' }}>
                    <div className='h-80 flex flex-col justify-center items-center bg-black/20 w-full p-9'>
                        <p className='text-4xl md:text-6xl text-white border-b border-yellow-500 pb-3'>Booking Payment</p>
                        <p className='text-lg md:text-xl text-white'><span onClick={() => navigate("/")}>Home</span> / My Bookings / Payment</p>
                    </div>
                </div>
            </Motion >
            <div className="w-full flex justify-center py-8">
                <div className="flex flex-col justify-center w-full md:w-3/5 p-3 space-y-4">
                    <div className=" justify-between border rounded-lg p-2">
                        <img src={booking?.room?.image[0]} className="w-full h-80 object-cover object-center rounded-xl p-2 pb-2" />
                        <div className="flex justify-between border-t p-4">
                            <p className="flex flex-col">Room Type : <span className="font-bold">{booking?.room?.name}</span></p>
                            <p className="flex flex-col">Price : <span className="text-[#FDD700] font-bold">${booking?.room?.price} / Night</span> </p>
                            <p className="flex flex-col justify-center ">Units Booked : <span className="font-bold">{booking.unitsBooked} Units</span></p>
                            <p className="flex flex-col justify-between">Booking Code : <span className="font-bold">{booking.bookingCode}</span></p>
                        </div>
                    </div>
                    <div className="w-full border rounded-xl  p-2">
                        <h2 className="font-bold text-xl">Booking Details :</h2>
                        <p className="flex justify-between">Username : <span>{booking.userName}</span></p>
                        <p className="flex justify-between">Phone Number : <span>{booking.phoneNumber}</span></p>
                        <p className="flex justify-between">Room Name : <span>{booking?.room?.name}</span></p>
                        <p className="flex justify-between">Check In Date : <span>{new Date(booking.checkInDate).toLocaleDateString()}</span></p>
                        <p className="flex justify-between">Check Out Date : <span>{new Date(booking.checkOutDate).toLocaleDateString()}</span></p>
                        <p className="flex justify-between">Total Nights : <span>{booking.totalNights} Nights</span></p>
                        <p className="flex justify-between">Total Price : <span>${booking.totalPrice}</span></p>
                        <p className="flex justify-between">Payment Method : <span>{booking.paymentMethod}</span></p>
                        <p className="flex justify-between">Payment Status : <span>{booking.paymentStatus}</span></p>
                    </div>
                    <div className="w-full ">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <p className="text-lg">Send Your Proof of Payment Below :</p>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setFile(e.target.files[0])}
                                className="w-full border p-2 rounded"
                            />
                            <button
                                type="submit"
                                className="w-full py-2 bg-black text-white rounded"
                            >
                                Submit Payment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BookingPayment