import { Flex, Image } from '@chakra-ui/react'
import { useContext } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.svg'
import { DrinkableContext } from '../contexts/DrinkableContext'

export default function Header() {

    const { categories, menuIsOpen, toggleMenu } = useContext(DrinkableContext)

    return (
        <Flex
            height="60px"
            background="#fff"
            px="20px"
            justify="space-between"
            align="center"
        >
            <Image src={Logo} alt="Logo" width="180px" />

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
    )
}
