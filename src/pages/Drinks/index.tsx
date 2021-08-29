import { Text, Image, Box, Flex, Stack, Skeleton } from '@chakra-ui/react'
import { Container, Header, Content } from '../../components'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { IDrinks } from '../../contexts/DrinkableContext';
import api from '../../services/api';
import { useState } from 'react';

interface IParams {
    id: string
    category: string
}

function Drinks() {

    const { category, id } = useParams<IParams>()
    const [drinks, setDrinks] = useState<IDrinks>()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        if (category === 'category') {
            (async () => {
                setIsLoading(true)
                const { data } = await api.get<IDrinks>(`filter.php?c=${id}`)
                setDrinks(data)
                setIsLoading(false)
            })()
        }

        if (category === 'search') {
            (async () => {
                setIsLoading(true)
                const { data } = await api.get<IDrinks>(`search.php?s=${id}`)
                setDrinks(data)
                setIsLoading(false)
            })()
        }

    }, [id])

    return (
        <Container>
            <Header />
            <Content>

                {isLoading &&
                    <Stack mt="50px">
                        <Skeleton height="20px" />
                        <Skeleton height="20px" />
                        <Skeleton height="20px" />
                    </Stack>
                }

                <Flex
                    justify="center"
                    textAlign="center"
                    flexWrap="wrap"
                    pt="25px"
                >
                    {drinks && !isLoading && drinks?.drinks?.map(drink => {

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

                    {!drinks?.drinks && !isLoading &&
                        <Text
                            textAlign="center"
                            mt="150px"
                            fontSize="25px"
                            fontWeight="500"
                        >
                            Opppss... Não encontramos nenhum Drink nesta categoria!
                        </Text>
                    }

                </Flex>
            </Content>
        </Container >
    );
}

export default Drinks;
