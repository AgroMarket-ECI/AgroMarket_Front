import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import NotFound from './pages/not_found/NotFound';
import { Product } from './services/product/Product';

ReactDOM.render(
	<ChakraProvider>
		<React.StrictMode>
			<BrowserRouter>
				<Switch>
					<Route path="/product">
						<Product />
					</Route>
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</React.StrictMode>
	</ChakraProvider>,
	document.getElementById('root')
);
