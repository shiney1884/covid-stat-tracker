const Tests = () => {
    return (
        <div className="border-2 h-36 w-48 flex flex-col justify-between">
            <h2 className='text-center text-xl'>Tests</h2>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-sm">Total COVID Tests</h3>
                <span className='text-sm font-bold text-gray-600'>50,000</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-sm">Daily COVID Tests</h3>
                <span className='text-sm font-bold text-gray-600'>+300</span>
            </div>
        </div>
    )
}

export default Tests;