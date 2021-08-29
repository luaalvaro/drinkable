import React, { createContext, useState } from 'react'
import { useEffect } from 'react'
import { fetchCategories, fetchRandomDrink } from '../services/fetchData'

type DrinkableContextType = {
    categories: string[]
    menuIsOpen: boolean
    toggleMenu: () => void
    randomDrink: IDrinks | undefined
}

interface IDrinks {
    drinks: {
        idDrink: string
        strDrink: string
        strCategory: string
        strDrinkThumb: string
        strGlass: string
        strInstructions: string
    }[]
}

export const DrinkableContext = createContext({} as DrinkableContextType)

export const DrinkableContextProvider: React.FC = ({ children }) => {

    const [categories, setCategories] = useState<string[]>([])
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
    const [randomDrink, setRandomDrink] = useState<IDrinks>()

    const toggleMenu = () => {
        return setMenuIsOpen(!menuIsOpen)
    }

    useEffect(() => {
        (async () => {
            const categories = await fetchCategories()
            setCategories(categories)

            const randomDrink = await fetchRandomDrink()
            setRandomDrink(randomDrink)
        })()
    }, [])

    return (
        <DrinkableContext.Provider value={{ categories, menuIsOpen, toggleMenu, randomDrink }}>
            {children}
        </DrinkableContext.Provider>
    )
}