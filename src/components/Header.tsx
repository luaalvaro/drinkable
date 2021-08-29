import { Flex, Image } from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'
import Logo from '../assets/logo.svg'


export default function Header() {
    return (
        <Flex
            height="60px"
            background="#fff"
            px="20px"
            justify="space-between"
            align="center"
        >
            <Image src={Logo} alt="Logo" width="180px" />
            <FaBars fontSize="20px" />
        </Flex>
    )
}
