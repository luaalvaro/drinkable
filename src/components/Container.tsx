import { Box } from '@chakra-ui/react'

type Iprops = {
    children: React.ReactNode
}

export default function Container({ children }: Iprops) {
    return (
        <Box
            minHeight="100vh"
            background="#f7f7f7"
        >
            {children}
        </Box>
    )
}