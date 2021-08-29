import { Box, Text, Image } from '@chakra-ui/react'
import { useContext } from 'react'
import { DrinkableContext } from '../contexts/DrinkableContext'
import { Link } from 'react-router-dom'

export default function RandomDrinks() {

    const { randomDrink } = useContext(DrinkableContext)

    return (
        <Box pb="25px">
            <Text
                fontWeight="500"
                marginBottom="15px"
            >
                Por quê não tentar algo novo?
            </Text>

            {randomDrink?.drinks.map(drink => (
                <Link to={`/${drink.idDrink}`} key={drink.idDrink}>
                    <hr />
                    <Text
                        marginTop="15px"
                        textAlign="center"
                    >
                        {drink.strDrink}
                    </Text>
                    <Image mx="auto" src={`${drink.strDrinkThumb}/preview`} alt="Drink Thumb" mt="10px" />
                </Link>
            ))}

        </Box>
    )
}
