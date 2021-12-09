import './css/Product.css';
import { useState,useEffect } from 'react';
import Product from './Product.js';
import React, { useContext } from 'react'
import {
	Container,
	Stack,
	Box,
	Heading,
	Text,
	Image,
	Icon,
	useColorModeValue,
	Tabs, 
	TabList, 
	TabPanels, 
	Tab, 
	TabPanel, 
	Center
} from '@chakra-ui/react';

import { useParams } from "react-router";
import { SimpleMenu } from "../components/SimpleMenu";
import { CartComponent } from "../components/CartComponent";
import logo2 from '../../img/AgroMarket.png';
import UserContext from "../../services/context/UserContext";

export const Treatment = () => {

	const { idTreatment,fileName } = useParams();

	const { GetToken, SetToken, ServiceRest } = useContext(UserContext);

	const [products, setProducts] = useState([]);
	const [manual, setManual] = useState([]);
	const [problem, setProblem] = useState([]);
	const imageUrl =  `/assets/${fileName}`
	useEffect(() => {
		ServiceRest("GET", `v1/recommendation/treatment/${idTreatment}`, "", (data) => {
			setProducts(data.products);
			const texto=data.instructions;
			setManual(texto.split("\n"));
			
		});

		ServiceRest("GET", `v1/recommendation/info/${fileName}`, "", (data) => {
			setProblem(data);
		  });
	},[]);
	

	const [ itemsCounter, setItemsCounter ] = useState(1);

	const CircleIcon = (props) => (
		<Icon viewBox="0 0 200 200" {...props}>
			<path fill="currentColor" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
		</Icon>
	);

	const handleSubmit = (event) => {
		event.preventDefault();
		setItemsCounter(itemsCounter);
	};

	const handleItemCounterChange = (event) => {
		const number = event.target.defaultValue;
		console.log('value is: ' + number);
		setItemsCounter(number);
	};

	return (
		<Container id="Treatment"  maxW="1200px">
			<center><div >
				<label className="Titulo">Tratamiento seleccionado</label>
			</div></center>
			<div id="header" className="header">

          <SimpleMenu/>
          <div className="imagen-header">
          <Image width="100%" src={logo2} alt="Segun Adebayo" />
          </div>
          <CartComponent/>
        </div>
		<Tabs marginTop="40px" isFitted variant="enclosed">
			<TabList>
				<Tab _selected={{ color: "white", bg: "green.300" }}> Productos</Tab>
				<Tab _selected={{ color: "white", bg: "green.300" }}>Manual de uso</Tab>
			</TabList>
			<TabPanels>
    			<TabPanel>
					<Container maxW={'8xl'}>
					{products.map((p, index) => 
						<Product index={index} ProductName={p.name} ProductDescription={p.description} ProductPrice={p.price} ProductImage={p.image}
						/>)}
					
					</Container>
				</TabPanel>
				<TabPanel>
				<Center py={6}>
					<Box
						maxW={'445px'} w={'full'} bg={useColorModeValue('white', 'gray.900')} boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
						<Box h={'auto'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
						<Image
							src={
								imageUrl
							}
							layout={'fill'}
						/>
						</Box>
						<Stack>
							<Text
								color={'green.300'}
								textTransform={'uppercase'}
								fontWeight={800}
								fontSize={'sm'}
								letterSpacing={1.1}>
								{problem.name}
							</Text>
							<Heading
								color={useColorModeValue('gray.700', 'white')}
								fontSize={'2xl'}
								fontFamily={'body'}>
								Uso del tratamiento
							</Heading>
						</Stack>

							{manual.map((p, index) => 
							<Text margin="20px" color={'gray.500'}>{p}</Text>
						)}
								

				
					</Box>
					</Center>
				</TabPanel>
			</TabPanels>
		</Tabs>
		</Container>
	);
};
export default Treatment;