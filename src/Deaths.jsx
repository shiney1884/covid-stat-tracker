const Deaths = () => {
    return (
        <div className="border-2 h-36 w-48 flex flex-col justify-between">
            <h2 className='text-center text-xl'>Deaths</h2>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-sm">Total COVID Deaths</h3>
                <span className='text-sm font-bold text-gray-600'>50,000</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-sm">Daily COVID Deaths</h3>
                <span className='text-sm font-bold text-gray-600'>+300</span>
            </div>
        </div>
    )
}

export default Deaths;