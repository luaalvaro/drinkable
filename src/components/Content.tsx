import { Box } from '@chakra-ui/react'
import React from 'react'

const Content: React.FC = ({ children }) => {
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

export default Content