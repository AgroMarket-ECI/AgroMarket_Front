import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/not_found/NotFound"
import Products from "./pages/Products/Products"
import { ChakraProvider } from "@chakra-ui/react"
import { DataProvider } from "./providers/DataProvider";
import './index.css';

ReactDOM.render(
  <DataProvider>
    <ChakraProvider>
      <React.StrictMode>
        <BrowserRouter>
          <Switch>
            <Route exact path="/products" component={Products} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
    </ChakraProvider>
  </DataProvider>,
  document.getElementById('root')
);
