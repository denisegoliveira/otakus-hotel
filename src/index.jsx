import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

//importações para funcionamento do carousel com swiper
import { ChakraProvider } from "@chakra-ui/react";
import "./components/carousel/Carousel.css";

import { theme } from "./styles/Theme"; //tema a ser usado

ReactDOM.render(
	<StrictMode>
		<ChakraProvider resetCSS theme={theme}>
			<App />
		</ChakraProvider>
	</StrictMode>,
	document.getElementById("root")
);
