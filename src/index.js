import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound"
import { ChakraProvider } from "@chakra-ui/react"
import { Login } from "./pages/form/Login";
import { SignUp } from "./pages/form/SignUp";
import UploadPlant from './pages/plant/upload/UploadPlant';
import { ByImage } from './pages/plant/byImage/ByImage';
import { Home } from "./pages/Home/Home";
import { Product } from './pages/product/Product';
import Products  from './pages/Products/Products';
import { DataProvider } from './providers/DataProvider';
import './index.css'

ReactDOM.render(
 <DataProvider> 
  <ChakraProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
        <Route exact path="/product" component={Product}/>
        <Route exact path="/products" component={Products} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signUp" component={SignUp}/>
        <Route exact path="/plant/upload" component={UploadPlant}/>
        <Route exact path="/plant/image" component={ByImage}/>
        <Route exact path="/home" component={Home}/>
        <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>
  </DataProvider> ,
  document.getElementById('root')
);
