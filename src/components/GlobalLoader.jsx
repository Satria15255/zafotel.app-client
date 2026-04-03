const GlobalLoader = () => {
    return (
        <div className="fixed inset-0 bg-[#FFFFF0] flex flex-col items-center justify-center z-50">
            <p className='text-lg md:text-4xl font-serif cursor-pointer'><span className='text-xl md:text-5xl font-serif text-[#FDD700]'>Z</span>AFOTEL</p>
            <p className="text-gray-500 mt-2 animate-pulse">
                Preparing your experience...
            </p>
        </div>
    )
}

export default GlobalLoader