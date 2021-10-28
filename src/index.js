import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/not_found/NotFound"
import { ChakraProvider } from "@chakra-ui/react"
import { Login } from "./pages/Formularios/Login";
import { Registro } from "./pages/Formularios/Registro";

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
         <Route path="/Login">
            <Login />
          </Route>
          <Route path="/registrarme">
            <Registro />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
