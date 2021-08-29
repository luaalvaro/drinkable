import { Text, Image, Box } from '@chakra-ui/react'
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

    const { id } = useParams<IParams>()
    const { randomDrink } = useContext(DrinkableContext)
    const randomId = randomDrink?.drinks[0].idDrink

    useEffect(() => {
        if (id === randomId) {
            return setDrink(randomDrink)
        }

        (async () => {
            const { data } = await api.get<IDrinks>(`lookup.php?i=${id}`)
            setDrink(data)
        })()

    }, [id])

    return (
        <Container>
            <Header />
            <Content>
                {drink && (
                    <Box mx="auto" width="max-content" textAlign="center" pt="10px">

                        <Text fontSize="34px" fontWeight="500">
                            {drink?.drinks[0].strDrink}
                        </Text>

                        <Image src={`${drink?.drinks[0].strDrinkThumb}/preview`} alt="Drink Thumb" mt="10px" mx="auto" />

                        <Text maxWidth="320px" mt="10px" lineHeight="20px" fontStyle="italic">
                            {drink?.drinks[0].strInstructions}
                        </Text>

                        <Text mt="10px"><b>Glass: </b> {drink?.drinks[0].strGlass}</Text>
                    </Box>
                )}

                {!drink &&
                    <Text
                        textAlign="center"
                        mt="150px"
                        fontSize="25px"
                        fontWeight="500"
                    >
                        Opppss... Não encontramos nenhum Drink com este ID!
                    </Text>
                }
            </Content>
        </Container>
    );
}

export default Drink;
