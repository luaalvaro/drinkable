import api from "./api"

interface IResponse {
    drinks: {
        strCategory: string
    }[]
}

interface IResponseDrinks {
    drinks: {
        idDrink: string
        strDrink: string
        strCategory: string
        strDrinkThumb: string
        strGlass: string
        strInstructions: string
    }[]
}

export const fetchCategories = async () => {
    const { data } = await api.get<IResponse>('list.php?c=list')

    let categories = data.drinks.map(drink => {
        return drink.strCategory
    })

    return categories
}

export const fetchRandomDrink = async () => {
    const { data } = await api.get<IResponseDrinks>('random.php')

    return data
}