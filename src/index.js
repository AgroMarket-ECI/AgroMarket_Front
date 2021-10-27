import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/not_found/NotFound"
import { ChakraProvider } from "@chakra-ui/react"
import UploadPlant from './pages/not_found/UploadPlant/UploadPlant';

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route  path="/upload-plant" component={UploadPlant}/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
