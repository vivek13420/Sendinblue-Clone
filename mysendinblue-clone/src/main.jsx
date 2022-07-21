import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ChakraProvider } from '@chakra-ui/react'

import "./index.css";
import AuthContextProvider from "./Context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <AuthContextProvider>
        <App />
        </AuthContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
