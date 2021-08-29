import { Text, Image, Box, Flex } from '@chakra-ui/react'
import { Container, Header, Content } from '../../components'
import { Link, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { DrinkableContext, IDrinks } from '../../contexts/DrinkableContext';
import api from '../../services/api';
import { useState } from 'react';

interface IParams {
    id: string
}

function Drinks() {

    const { id } = useParams<IParams>()
    const [drinks, setDrinks] = useState<IDrinks>()

    useEffect(() => {

        (async () => {
            const { data } = await api.get<IDrinks>(`filter.php?c=${id}`)
            setDrinks(data)
        })()

    }, [id])

    return (
        <Container>
            <Header />
            <Content>
                <Flex
                    justify="center"
                    textAlign="center"
                    flexWrap="wrap"
                >
                    {drinks?.drinks.map(drink => {

                        return (
                            <Link
                                key={drink.idDrink}
                                to={`/${drink.idDrink}`}
                            >
                                <Box margin="10px">
                                    <Image
                                        src={`${drink.strDrinkThumb}/preview`}
                                        alt="Drink Thumb"
                                        mt="10px"
                                        mx="auto"
                                    />

                                    <Text
                                        fontWeight="500"
                                        fontSize="18px"
                                    >
                                        {drink.strDrink.substring(0, 18)}
                                        {drink.strDrink.length > 18 ? '...' : ''}
                                    </Text>
                                </Box>
                            </Link>
                        )
                    })}
                </Flex>
            </Content>
        </Container>
    );
}

export default Drinks;
