import React, {useState, useEffect, useContext} from "react";
import { CovidContext } from "./CovidContext";

export const SearchBar = () => {
    const [results, setResults] = useContext(CovidContext)
    const [searchInput, setSearchInput] = useState('')
    const [country, setCountry] = useState('')

    useEffect(() => {
        fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "e14e0779c1mshb588041296e6664p1507c2jsn8f48804c2873",
                "x-rapidapi-host": "covid-193.p.rapidapi.com"
        }
        })
        .then(response => response.json())
        .then(result => setResults({
            cases: result.response[0].cases,
            deaths: result.response[0].deaths,
            tests: result.response[0].tests
        }))
        .catch(err => console.error(err));

    }, [country])

    console.log(results)

    const formOnChange = (e) => {
        setSearchInput(e.target.value);
    }

    const formSubmit = (e) => {
        e.preventDefault()
        setCountry(searchInput);
    }

    return (
        <form className='m-4 border-2 flex justify-between items-center'>
             <input type='text' value={searchInput} onChange={formOnChange} placeholder='Enter a country...' className='outline-none p-2 w-full'></input>
             <button onClick={formSubmit} type='submit' className='p-2 bg-black text-white'>Search</button>
        </form>
    )
}