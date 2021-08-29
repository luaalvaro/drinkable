import { Box, Flex, Text, Image, Input, FormControl, FormLabel, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa'

import { useContext } from "react";
import { DrinkableContext } from "./contexts/DrinkableContext";

import Logo from './assets/logo.svg'
import Drinks from './assets/drinks.png'

function App() {

  const { menuIsOpen, toggleMenu } = useContext(DrinkableContext)

  return (
    <Box
      minHeight="100vh"
      background="#f7f7f7"
    >
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

      <Box
        px="20px"
        height="calc(100vh - 60px)"
      >
        <Box my="50px">
          <Image src={Drinks} alt="Drinks" />
        </Box>

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

        <Box>
          <Text
            fontWeight="500"
          >
            Alguns drinks para você...
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
