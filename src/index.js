import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound"
import { ChakraProvider, Image} from "@chakra-ui/react"
import  Login  from "./pages/form/Login";
import  SignUp  from "./pages/form/SignUp";
import { ShoppingCart }  from "./pages/shoppingCart/ShoppingCart";
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
  <ServiceApi>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/product" component={Product}/>
        <Route path="/products/:fileName" component={Products} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signUp" component={SignUp}/>
        <Route exact path="/plant/image" component={ByImage}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/shoppingCart" component={ShoppingCart}/>
        <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
    </ServiceApi>
  </ChakraProvider>
  </DataProvider>,
  document.getElementById('root')
);
