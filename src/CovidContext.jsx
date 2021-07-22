import React, {useState, createContext} from 'react'

export const CovidContext = createContext()

export const CovidProvider = (props) => {
    const [results, setResults] = useState(null);  
    return (
        <CovidContext.Provider value={[results, setResults]}>
            {props.children}
        </CovidContext.Provider>
    )
}