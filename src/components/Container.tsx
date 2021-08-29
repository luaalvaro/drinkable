import { Box } from '@chakra-ui/react'
import React from 'react'

const Container: React.FC = ({ children }) => {
    return (
        <Box
            height="100%"
            minHeight="100vh"
            background="#f7f7f7"
        >
            {children}
        </Box>
    )
}

export default Container