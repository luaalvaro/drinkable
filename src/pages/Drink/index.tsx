import { Text, Image, Box, Stack, Skeleton } from '@chakra-ui/react'
import { Container, Header, Content } from '../../components'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { DrinkableContext, IDrinks } from '../../contexts/DrinkableContext';
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../services/api';

interface IParams {
    id: string
}
function Drink() {

    const [drink, setDrink] = useState<IDrinks>()
    const [isLoading, setIsLoading] = useState(false)

    const { id } = useParams<IParams>()
    const { randomDrink } = useContext(DrinkableContext)
    const randomId = randomDrink?.drinks[0].idDrink

    useEffect(() => {
        setIsLoading(true)

        if (id === randomId) {
            setIsLoading(false)
            return setDrink(randomDrink)
        }

        (async () => {
            const { data } = await api.get<IDrinks>(`lookup.php?i=${id}`)
            setIsLoading(false)
            setDrink(data)
        })()

    }, [id])

    return (
        <Container>
            <Header />
            <Content>
                {drink && drink?.drinks?.map(drink => (
                    (
                        <Box key={drink.idDrink} mx="auto" width="max-content" textAlign="center" pt="10px">

                            <Text fontSize="34px" fontWeight="500">
                                {drink.strDrink}
                            </Text>

                            <Image src={`${drink.strDrinkThumb}/preview`} alt="Drink Thumb" mt="10px" mx="auto" />

                            <Text maxWidth="320px" mt="10px" lineHeight="20px" mx="auto" fontStyle="italic">
                                {drink.strInstructions}
                            </Text>

                            <Text mt="10px"><b>Glass: </b> {drink.strGlass}</Text>
                        </Box>
                    )
                ))}

                {!drink?.drinks && !isLoading &&
                    < Text
                        textAlign="center"
                        mt="150px"
                        fontSize="25px"
                        fontWeight="500"
                    >
                        Opppss... Não encontramos nenhum Drink com este ID!
                    </Text>
                }

                {!drink?.drinks && isLoading &&
                    <Stack mt="50px">
                        <Skeleton height="20px" />
                        <Skeleton height="20px" />
                        <Skeleton height="20px" />
                    </Stack>
                }
            </Content>
        </Container >
    );
}

export default Drink;
