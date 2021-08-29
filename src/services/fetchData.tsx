import api from "./api"

interface IResponse {
    drinks: {
        strCategory: string
    }[]
}

export const fetchCategories = async () => {
    const { data } = await api.get<IResponse>('list.php?c=list')

    let categories = data.drinks.map(drink => {
        return drink.strCategory
    })

    return categories
}