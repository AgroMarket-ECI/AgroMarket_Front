import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound"
import { ChakraProvider,Menu, MenuButton,Image,MenuList,MenuItem,Button  } from "@chakra-ui/react"
import IconButton from "@chakra-ui/react";
import  Login  from "./pages/form/Login";
import  SignUp  from "./pages/form/SignUp";
import { ByImage }  from './pages/plant/byImage/ByImage';
import  Home  from "./pages/Home/Home";
import { Product } from './pages/product/Product';
import Products  from './pages/Products/Products';
import { DataProvider } from './providers/DataProvider';
import ServiceApi from './services/ServiceApi';
import './index.css'

ReactDOM.render(
 <DataProvider> 
  <ChakraProvider>
    
   
    <React.StrictMode>
    
      <ServiceApi>
      <BrowserRouter>
        <Switch>
        <Route exact path="/product" component={Product}/>
        <Route path="/products/:fileName" component={Products} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signUp" component={SignUp}/>
        <Route exact path="/plant/image" component={ByImage}/>
        <Route exact path="/home" component={Home}/>
        <Route component={NotFound} />
        </Switch>
        
      </BrowserRouter>
      </ServiceApi>

    </React.StrictMode>
  </ChakraProvider>
  </DataProvider>,
  document.getElementById('root')
);
