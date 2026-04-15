const GlobalLoader = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col gap-2 items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-yellow-400 border-r-yellow-600 rounded-full animate-spin"></div>
            <p className="text-gray-500 mt-2 animate-pulse">
                Preparing your experience...
            </p>
        </div>
    )
}

export default GlobalLoader