import './css/Product.css';
import { useState } from 'react';
import Blob from './Blob.js';
import {
	Stack,
	Box,
	Heading,
	Text,
	Button,
	Image,
	useColorModeValue,
	NumberIncrementStepper,
	NumberDecrementStepper,
	NumberInputStepper,
	NumberInputField,
	NumberInput,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';


export const Product = (  {ProductName,ProductDescription,ProductPrice,ProductImage,index}  ) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const numberProduct=document.getElementById(`cart${index}`).value;
		var cart=JSON.parse(window.localStorage.getItem("cart"));
		var contCart=0;
		console.log(cart[ProductName]);
		if(cart==null){
			cart={};
			cart[ProductName]=parseInt(numberProduct);
		}else if(cart[ProductName]!=undefined){
			cart[ProductName]=parseInt(cart[ProductName])+parseInt(numberProduct);
		}else{
			cart[ProductName]=parseInt(numberProduct);
		}
		for(let clave in cart){
			contCart=contCart+cart[clave]
		}
		window.localStorage.setItem("cart",JSON.stringify(cart));
		
		console.log(JSON.parse(window.localStorage.getItem("cart")));
		document.getElementById("CartNumber").innerHTML=contCart;

		
		
	};
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
					<NumberInput id={`cart${index}`} size="lg" maxW={32} defaultValue={1} min={1} max={10}>
						<NumberInputField backgroundColor={'white'} />
						<NumberInputStepper>
							<NumberIncrementStepper/>
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
					<Button
						onClick={handleSubmit}
						rounded={'full'}
						size={'lg'}
						fontWeight={'normal'}
						px={6}
						color={'white'}
						colorScheme="red"
						leftIcon={<AddIcon h={4} w={4} color={'white.300'}  />}
					>
						Add to Cart
					</Button>
				</Stack>
				<Text  fontSize={'25px'}>
				{ProductDescription}
				</Text>
				
			</div>
			
		</div>
	);
};
export default Product;