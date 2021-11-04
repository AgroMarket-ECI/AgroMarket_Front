import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound"
import { ChakraProvider } from "@chakra-ui/react"
import { Login } from "./pages/form/Login";
import { SignUp } from "./pages/form/SignUp";
import UploadPlant from './pages/plant/upload/UploadPlant';
import { ByImage } from './pages/plant/byImage/ByImage';
import { Home } from "./pages/Home/Home";
import { Product } from './pages/product/Product';
import ServiceApi from './services/ServiceApi';
ReactDOM.render(
  
  <ChakraProvider>
    <React.StrictMode>
      <ServiceApi>
      <BrowserRouter>
        <Switch>
          
        <Route path="/product" component={Product}/>
        <Route path="/login" component={Login}/>
        <Route path="/signUp" component={SignUp}/>
        <Route path="/plant/upload" component={UploadPlant}/>
        <Route path="/plant/image" component={ByImage}/>
        <Route path="/home" component={Home}/>
        <Route component={NotFound} />
        </Switch>
        
      </BrowserRouter>
      </ServiceApi>

    </React.StrictMode>
  </ChakraProvider>
  
   ,
  document.getElementById('root')
);
