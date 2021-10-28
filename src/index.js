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
import { Product } from './pages/product/Product';

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
        <Route path="/product" component={Product}/>
         <Route path="/login" component={Login}/>
          <Route path="/signUp" component={SignUp}/>
          <Route  path="/plant/upload" component={UploadPlant}/>
          <Route path="/plant/image" component={ByImage}/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
