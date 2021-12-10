import './css/Product.css';
import { useState } from 'react';
import {
	Stack,
	Heading,
	Text,
	Button,
	Image,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';


export const Product = (  {ProductName,ProductDescription,ProductPrice,ProductImage,index}  ) => {

	const [showAll, setShowAll] = useState(0);

	const handleSubmitAdd = (event) => {
		event.preventDefault();
		var cart = JSON.parse(window.localStorage.getItem("cart"));
		var contCart = 0;
		if(cart == null){
			cart={};
			const producto = {
				"name": ProductName,
				"price": ProductPrice, 
				"numberProduct": 1
			}
			cart[ProductName] = producto;
		}
		else if(cart[ProductName]!=undefined){
			const producto = {
				"name": ProductName,
				"price": ProductPrice, 
				"numberProduct": parseInt(cart[ProductName]["numberProduct"]) + 1
			}
			cart[ProductName] = producto;
		}
		else{
			const producto = {
				"name": ProductName,
				"price": ProductPrice, 
				"numberProduct": 1
			}
			cart[ProductName] = producto;
		}
		saveToCart(cart, contCart);
		setShowAll(cart[ProductName]["numberProduct"]);
	};

	const handleSubmitMinus = (event) => {
		event.preventDefault();
		var cart = JSON.parse(window.localStorage.getItem("cart"));
		var contCart = 0;
		if(cart != null){
			if(cart[ProductName]!=undefined){
				let restToCart = parseInt(cart[ProductName]["numberProduct"]) - 1
				if (restToCart <= 0){
					restToCart = 0
				}
				const producto = {
					"name": ProductName,
					"price": ProductPrice, 
					"numberProduct": restToCart
				}
				cart[ProductName] = producto;
				setShowAll(cart[ProductName]["numberProduct"]);
			}
		}
		saveToCart(cart, contCart);
	};

	const saveToCart = (cart,contCart) => {
		for(let clave in cart){
			contCart = contCart + cart[clave]["numberProduct"]
		}
		window.localStorage.setItem("cart",JSON.stringify(cart));
		
		console.log(JSON.parse(window.localStorage.getItem("cart")));
		document.getElementById("CartNumber").innerHTML=contCart;
	}

	const imageUrl =  `/assets/${ProductImage}`
	const [ itemsCounter, setItemsCounter ] = useState(1);
	return (
		<div id="products-tratment">
			<div className="titulo-imagen">

				<div className="titulo-tratment">
						{ProductName}
				</div>
				<div
					height={'280px'}
					rounded={'2xl'}
					max-width={"300px"}
					margin-top="100px"
				>
				<center>	<Image
						alt={'Product Image'}

						width="70%"

						src={
							imageUrl
						}
					/></center>
				</div>
			</div>
			<div className="texto">
				<Heading marginBottom="20px" fontWeight={600} fontSize="40px">
					<Text as={'span'}  color={'#000000'} fontSize={'70%'}>
						${ProductPrice}
					</Text>
					<br />
				</Heading>
				<Stack  marginBottom="20px" spacing={{ base: 4, sm: 6 }} direction={'row'}>
					<Button
						onClick={handleSubmitAdd}
						rounded={'full'}
						size={'md'}
						fontWeight={'normal'}
						px={4}
						color={'white'}
						bg="#389541"
						_hover=""
						leftIcon={<AddIcon h={4} w={4} color={'white.300'}  />}
					>
						Añadir al carrito
					</Button>
					<Button
						onClick={handleSubmitMinus}
						rounded={'full'}
						size={'md'}
						fontWeight={'normal'}
						px={4}
						color={'white'}
						bg="#e53e3e"
						_hover=""
						leftIcon={<MinusIcon h={4} w={4} color={'white.300'}  />}
					>
						Quitar del carrito
					</Button>
				</Stack>
				<Text className="totalProducts">Cantidad de este producto añadido al carrito: {showAll}</Text>
				<br></br>
				<Text  fontSize={'20px'}>
				{ProductDescription}
				</Text>
			</div>
		</div>
	);
};
export default Product;