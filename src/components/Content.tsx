import { Box } from '@chakra-ui/react'
import React from 'react'

type Iprops = {
    children: React.ReactNode
}

export default function Content({ children }: Iprops) {
    return (
        <Box
            px="20px"
            height="calc(100vh - 60px)"
        >
            {children}
        </Box>
    )
}
