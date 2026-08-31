const CancelModals = ({ handleCancel, bookingId, onClose }) => {
    return (
        <div className="flex justify-center items-center inset-0 fixed z-100 bg-black/30 backdrop-blur">
            <div className='bg-white w-4/5 md:w-1/5 h-auto p-5 rounded-sm flex flex-col justify-center space-y-3'>
                <p className="text-gray-500 text-center text-lg">Are you sure you want to cancel this booking?</p>
                <div className="gap-2 flex">
                    <button onClick={() => handleCancel(bookingId)} className="w-full bg-[#c69c6d] hover:bg-gray-800 hover:text-white transition duration-100 h-10 rounded-sm text-sm">Yes</button>
                    <button onClick={onClose} className="w-full bg-[#c69c6d] hover:bg-gray-800 hover:text-white transition duration-100 h-10 rounded-sm text-sm">No</button>
                </div>
            </div>
        </div>
    )
}

export default CancelModals