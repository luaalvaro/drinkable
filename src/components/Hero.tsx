import { Box, Image } from '@chakra-ui/react'
import Drinks from '../assets/drinks.png'

export default function Hero() {
    return (
        <Box my="50px">
            <Image src={Drinks} alt="Drinks" maxWidth={["300px", "350px", "512px"]} mx="auto" />
        </Box>
    )
}
