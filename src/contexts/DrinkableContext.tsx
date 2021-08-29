import React, { createContext, useState } from 'react'
import { useEffect } from 'react'
import { fetchCategories } from '../services/fetchData'

type DrinkableContextType = {
    categories: string[]
    menuIsOpen: boolean
    toggleMenu: () => void
}

export const DrinkableContext = createContext({} as DrinkableContextType)

export const DrinkableContextProvider: React.FC = ({ children }) => {

    const [categories, setCategories] = useState<string[]>([])
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        return setMenuIsOpen(!menuIsOpen)
    }

    useEffect(() => {
        (async () => {
            const response = await fetchCategories()
            setCategories(response)
        })()
    }, [])

    return (
        <DrinkableContext.Provider value={{ categories, menuIsOpen, toggleMenu }}>
            {children}
        </DrinkableContext.Provider>
    )
}