import { Box } from '@chakra-ui/react'
import React from 'react'

type Iprops = {
    children: React.ReactNode
}

export default function Content({ children }: Iprops) {
    return (
        <Box
            maxW="1024px"
            mx="auto"
            px="20px"
            minHeight="calc(100vh - 60px)"
        >
            {children}
        </Box>
    )
}
