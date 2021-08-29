import { Box, Input, FormControl, FormLabel, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

export default function SearchDrink() {
    return (
        <Box my="50px">
            <FormControl>
                <FormLabel>Busque sua sede</FormLabel>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<FaSearch />}
                    />
                    <Input
                        background="#fff"
                        placeholder="Marguerita..."
                    />
                </InputGroup>
            </FormControl>
        </Box>
    )
}
