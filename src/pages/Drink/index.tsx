import { Text, Image, Box } from '@chakra-ui/react'
import { Container, Header, Content } from '../../components'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { DrinkableContext } from '../../contexts/DrinkableContext';

interface IParams {
    id: string
}
function App() {

    const { id } = useParams<IParams>()
    const { randomDrink } = useContext(DrinkableContext)
    const randomId = randomDrink?.drinks[0].idDrink

    return (
        <Container>
            <Header />
            <Content>
                <Box mx="auto" width="max-content" textAlign="center" pt="10px">

                    <Text fontSize="34px" fontWeight="500">
                        {randomDrink?.drinks[0].strDrink}
                    </Text>

                    <Image src={`${randomDrink?.drinks[0].strDrinkThumb}/preview`} alt="Drink Thumb" mt="10px" mx="auto" />

                    <Text maxWidth="320px" mt="10px" lineHeight="20px" fontStyle="italic">
                        {randomDrink?.drinks[0].strInstructions}
                    </Text>

                    <Text mt="10px"><b>Glass: </b> {randomDrink?.drinks[0].strGlass}</Text>
                </Box>
            </Content>
        </Container>
    );
}

export default App;
