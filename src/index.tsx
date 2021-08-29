import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DrinkableContextProvider } from './contexts/DrinkableContext';

ReactDOM.render(
  <React.StrictMode>
    <DrinkableContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </DrinkableContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);