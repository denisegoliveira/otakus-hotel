import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './styles/Theme';    //tema a ser usado 


ReactDOM.render(
  <StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);


