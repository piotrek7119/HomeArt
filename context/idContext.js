import React, {createContext, useState} from "react";





export const IdContext = createContext(0);


export const IdProvider = (({children}) => {
    const [isIdNumber, setIsIdNumber] = useState(null)

    return (
        <IdContext.Provider value={{isIdNumber, setIsIdNumber}}>
            { children }
        </IdContext.Provider>
    )
})

