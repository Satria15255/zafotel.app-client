import React from 'react'
import NewsImage from '../assets/roomtype/deluxe.jpeg'

const informations = [
    {
        HeadLine: "Zafotel Officially Launches Rooftop Lounge with Stunning City Views",
        Date: "October 28, 2025",
        Content: "Zafotel is now offering a new experience for its guests with the opening of the Rooftop Lounge, located on the hotel's highest floor. This area is designed with a modern-minimalist concept and offers stunning views of the city at night. Guests can enjoy a variety of light snacks and signature drinks crafted by our top baristas. The lounge is officially open daily from 5:00 PM to 11:00 PM WIB."
    },
    {
        HeadLine: "Year-End Promo: Enjoy Up to 25% Off Direct Bookings on the Zafotel Website",
        Date: "October 30, 2025",
        Content: "To celebrate the end of the year, Zafotel is offering a special offer of up to 25% off all room reservations made through its official website. This promotion is valid until December 31, 2025, and covers all room types. Enjoy your year-end holiday with a comfortable stay and friendly service from the Zafotel team."
    },
    {
        HeadLine: "Zafotel Implements Smart Check-In System to Enhance Guest Comfort",
        Date: "November 15, 2025",
        Content: "As part of its commitment to providing service innovation, Zafotel has now implemented a Smart Check-In system. Guests can check-in simply by scanning the QR code received after booking. This system shortens queue times and provides a more efficient and hygienic stay experience."
    },
    {
        HeadLine: "Zafotel Wins Agoda's 'Top Rated Hotel 2025' Award",
        Date: " October 8, 2025",
        Content: "Zafotel has achieved another impressive achievement. At the Agoda Partner Recognition 2025 event, Zafotel won the 'Top Rated Hotel' award for its excellent service and high customer satisfaction. This award motivates the entire team to continue providing the best service and maintaining the quality of comfort for every guest."
    },
    {
        HeadLine: "Zafotel Presents New Menu at Main Restaurant: A Fusion of Local and Modern Flavors",
        Date: "November 1, 2025",
        Content: "Zafotel's main restaurant is now presenting culinary innovation with the launch of a new menu themed 'Taste of Nusantara Modern.' Each dish is designed by our Executive Chef with a touch of traditional Indonesian flavors combined with modern cooking techniques. Guests can enjoy these new dishes daily from 6:00 AM to 10:00 PM WIB, for breakfast, lunch, and dinner."
    },
    {
        HeadLine: "Green Stay’ Program: Zafotel Committed to Supporting an Eco-Friendly Lifestyle",
        Date: "November 2, 2025",
        Content: "Zafotel has officially launched the Green Stay program as part of its environmental sustainability efforts. This program includes reducing the use of single-use plastics, an automatic energy-saving system in every room, and a hotel waste recycling initiative. Through this step, Zafotel is committed to providing a stay experience that is not only comfortable but also sustainable for the earth."
    }

]

const Information = () => {
    return (
        <div className='h-auto pb-6'>
            <div className='text-center py-8'>
                <p className='text-2xl font-bold'>Explore Us</p>
                <p className='font-serif text-[#FFD700] font-light mt-2'>Find information related to Zafotel by visiting our blog</p>
            </div>
            <div className='w-full h-auto'>
                <div className='grid grid-cols-3 gap-5 place-items-center'>
                    {informations.map((info, index) => (
                        <div key={index} className='w-100 h-100 flex flex-col justify-between rounded-xs border border-gray-300 shadow-lg cursor-pointer'>
                            <div className='flex flex-col justify-between'>
                                <img src={NewsImage} className='w-100 h-60 object-cover object-center' />
                                <div className='p-4'>
                                    <p className='text-sm h-10 font-semibold'>{info.HeadLine}</p>
                                    <p className='text-sm text-gray-500 py-4'>{info.Date}</p>
                                    <button className='border py-2 px-6 text-xs bg-gray-900 text-white rounded-xs hover:bg-white hover:text-black transition duration-100'>Read More —▸</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <p className='text-center py-4 text-lg font-serif'>Explore Other</p>
            </div>
        </div>
    )
}

export default Information