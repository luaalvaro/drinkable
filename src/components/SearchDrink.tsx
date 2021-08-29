import { Box, Input, FormControl, FormLabel, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchDrink() {

    const [search, setSearch] = useState("")

    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== "Enter") return
        window.location.replace(`/search/${search}`)
    }

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
                        defaultValue={search}
                        onChange={(event) => setSearch(event.target.value)}
                        onKeyPress={(event) => handleSubmit(event)}
                    />
                </InputGroup>
            </FormControl>
        </Box>
    )
}
