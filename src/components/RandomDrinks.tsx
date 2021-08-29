import { Box, Text, Image } from '@chakra-ui/react'
import { useContext } from 'react'
import { DrinkableContext } from '../contexts/DrinkableContext'


export default function RandomDrinks() {

    const { randomDrink } = useContext(DrinkableContext)

    return (
        <Box>
            <Text
                fontWeight="500"
                marginBottom="15px"
            >
                Por quê não tentar algo novo?
            </Text>

            {randomDrink?.drinks.map(drink => (
                <div key={drink.idDrink}>
                    <Text>{drink.strDrink}</Text>
                    <Image src={`${drink.strDrinkThumb}/preview`} alt="Drink Thumb" mt="10px" />
                </div>
            ))}

        </Box>
    )
}
