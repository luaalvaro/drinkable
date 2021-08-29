import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { DrinkableContextProvider } from './contexts/DrinkableContext';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <DrinkableContextProvider>
      <ChakraProvider>
        <Routes />
      </ChakraProvider>
    </DrinkableContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);