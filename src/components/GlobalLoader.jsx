const GlobalLoader = () => {
    return (
        <div className="flex flex-col bg-yeelow-100 h-screen justify-center items-center py-10">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-yellow-400 border-r-yellow-600 rounded-full animate-spin"></div>
            <p className="text-gray-500 mt-2 animate-pulse">
                Preparing your experience...
            </p>
        </div>
    )
}

export default GlobalLoader