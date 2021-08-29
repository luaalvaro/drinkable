import { Flex, Image, Box, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.svg'
import { DrinkableContext } from '../contexts/DrinkableContext'
import { Link } from 'react-router-dom'

export default function Header() {

    const { categories, menuIsOpen, toggleMenu } = useContext(DrinkableContext)

    return (
        <>
            <Flex
                height="60px"
                background="#fff"
                px="20px"
                justify="space-between"
                align="center"
            >
                <Link to="/">
                    <Image src={Logo} alt="Logo" width="180px" />
                </Link>

                {menuIsOpen
                    ? <FaTimes
                        fontSize="20px"
                        onClick={toggleMenu}
                    />
                    : <FaBars
                        fontSize="20px"
                        onClick={toggleMenu}
                    />
                }
            </Flex>
            <Box
                display={menuIsOpen ? 'block' : 'none'}
                background="#fff"
            >
                <Text fontWeight="500" fontSize="22px" ml="20px">Categorias</Text>
                <Box
                    py="25px"
                >
                    {categories.map((category, index) => {

                        let linkCategory = category.replaceAll(' / ', '_')
                        linkCategory = linkCategory.replaceAll('/', '_')
                        linkCategory = linkCategory.replaceAll(' ', '_')

                        return (
                            <Text
                                key={index}
                                textAlign="center"
                                fontSize="18px"
                            >
                                <Link to={`c=${linkCategory}`}>{category}</Link>
                            </Text>
                        )
                    })}
                </Box>
            </Box>
        </>
    )
}
