import { useContext } from "react";
import { CovidContext } from "./CovidContext";

const Tests = () => {

    const [results, setResults] = useContext(CovidContext)

    return (
        <div className="border-2 h-36 w-48 flex flex-col justify-between">
            <h2 className='text-center text-xl'>Tests</h2>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-sm">Total COVID Tests</h3>
                <span className='text-sm font-bold text-gray-600'>{results ? results.tests.total : 'No data'}</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-sm">Tests per 1M people</h3>
                <span className='text-sm font-bold text-gray-600'>{results ? results.tests['1M_pop'] : 'No data'}</span>
            </div>
        </div>
    )
}

export default Tests;