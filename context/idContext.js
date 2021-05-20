import React, {createContext, useState} from "react";
import {useLocalStorage} from '../hooks/useLocalStorage';





export const IdContext = createContext(0);


export const IdProvider = (({children}) => {
    const [isIdNumber, setIsIdNumber] = useLocalStorage(null, null)

    return (
        <IdContext.Provider value={{isIdNumber, setIsIdNumber}}>
            { children }
        </IdContext.Provider>
    )
})

