import React, { createContext, useState } from 'react'
import { useEffect } from 'react'
import { fetchCategories, fetchRandomDrink } from '../services/fetchData'

type DrinkableContextType = {
    categories: string[]
    menuIsOpen: boolean
    toggleMenu: () => void
    randomDrink: IDrinks | undefined
}

export interface IDrinks {
    drinks: {
        idDrink: string
        strDrink: string
        strCategory: string
        strDrinkThumb: string
        strGlass: string
        strInstructions: string
        strIngredient1: string
        strIngredient2: string
        strIngredient3: string
        strIngredient4: string
        strIngredient5: string
        strIngredient6: string
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
            const randomDrink = await fetchRandomDrink()
            setRandomDrink(randomDrink)

            const categories = await fetchCategories()
            setCategories(categories)
        })()
    }, [])

    return (
        <DrinkableContext.Provider value={{ categories, menuIsOpen, toggleMenu, randomDrink }}>
            {children}
        </DrinkableContext.Provider>
    )
}