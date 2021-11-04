import './css/Product.css';
import { useState } from 'react';
import {
	Container,
	Stack,
	HStack,
	Box,
	Heading,
	Text,
	Button,
	Image,
	Icon,
	useColorModeValue,
	NumberIncrementStepper,
	NumberDecrementStepper,
	NumberInputStepper,
	NumberInputField,
	NumberInput,
	Tabs, 
	TabList, 
	TabPanels, 
	Tab, 
	TabPanel, 
	Avatar,
	Center
} from '@chakra-ui/react';

import { SimpleMenu } from "../components/SimpleMenu";
import { CartComponent } from "../components/CartComponent";
import logo2 from '../../img/AgroMarket.png';
import { AddIcon } from '@chakra-ui/icons';

export const Product = () => {

	const products = [
		{
			id: "618309a81e87654cb3c36585",
			name: "Daconil Fungicida",
			price: 25900.0,
			description: "Este amplio espectro de actividad facilita un múltiple control de enfermedades con un solo producto",
			idProvider: "1",
			taxes: 0.19,
			favorite: false,
			image: "daconil-fungicida.jpg"
		},
		{
			id: "61830a951e87654cb3c36586",
			name: "Carbendazim Fungicida",
			price: 23800.0,
			description: "Es un fungicida selectivo, sistémico con efecto translaminar, de acción preventiva y curativa rápida para un amplio espectro de hongos patógenos, en rosas, arroz y muchos otros cultivos.",
			idProvider: "2",
			taxes: 0.19,
			favorite: false,
			image: "carbendazim-fungicida.jpg"
		},
		{
			id: "61830cec1e87654cb3c36587",
			name: "Casafe-V Herbicida",
			price: 26200.0,
			description: "Herbicida selectivo y preemergente que tiene acción contra las malezas indicadas, en aplicaciones sin incorporación por su especial formulación, la que no se volatiliza ni es degradada por rayos solares (ultravioletas).",
			idProvider: "2",
			taxes: 0.19,
			favorite: false,
			image: "casafe-v-herbicida.jpg"
		}
	]
	const [ itemsCounter, setItemsCounter ] = useState(1);
	const [plantName, setPlantName] = useState('Daconil®');
	const [plantCode, setPlantCode] = useState('Fungicida listo para usar');
	const [plantPrice, setPlantPrice] = useState('$16.500');

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
		<Container maxW={'8xl'}>
			<div id="header" className="header">
          <SimpleMenu/>
          <div className="imagen-header">
          <Image width="100%" src={logo2} alt="Segun Adebayo" />
          </div>
          <CartComponent/>
        </div>
		<Tabs isFitted variant="enclosed">
			<TabList>
				<Tab _selected={{ color: "white", bg: "green.300" }}> Productos</Tab>
				<Tab _selected={{ color: "white", bg: "green.300" }}>Manual de uso</Tab>
			</TabList>
			<TabPanels>
    			<TabPanel>
					<Container maxW={'8xl'}>
					{products.map((pro) => {
						return (
						<Products/>
						);
					})}
						<HStack>
							<Heading lineHeight={1.1} fontWeight={500} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
								<Text
									as={'span'}
									position={'relative'}
									_after={{
										content: "''",
										width: 'full',
										height: '15%',
										position: 'absolute',
										bottom: 2,
										left: 0,
										bg: 'red.400',
										zIndex: -1
									}}
								>
									También te puede interesar
								</Text>
							</Heading>
						</HStack>
					</Container>
				</TabPanel>
				<TabPanel>
				<Center py={6}>
					<Box
						maxW={'445px'} w={'full'} bg={useColorModeValue('white', 'gray.900')} boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
						<Box h={'auto'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
						<Image
							src={
							'https://www.opia.cl/601/articles-81762_recurso_01.jpg'
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
								Parásito de la polilla del Álamo
							</Text>
							<Heading
								color={useColorModeValue('gray.700', 'white')}
								fontSize={'2xl'}
								fontFamily={'body'}>
								Uso del tratamiento
							</Heading>
						</Stack>
						<Stack mt={6} direction={'row'} spacing={4} align={'center'}>
							<Stack direction={'column'} spacing={0} fontSize={'sm'}>
								<Text color={'gray.500'}>- Usar 20 Litros del producto 1 y esperar al rededor de 2 horas</Text>
							</Stack>
						</Stack>
						<Stack mt={6} direction={'row'} spacing={4} align={'center'}>
							<Stack direction={'column'} spacing={0} fontSize={'sm'}>
								<Text color={'gray.500'}>- Colocar en la matera y regar con agua</Text>
							</Stack>
						</Stack>
					</Box>
					</Center>
				</TabPanel>
			</TabPanels>
		</Tabs>
		</Container>
	);
};

export const Blob = (props) => {
	return (
		<Icon width={'100%'} viewBox="0 0 578 440" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
				fill="currentColor"
			/>
		</Icon>
	);
};

export const Products = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
		setItemsCounter(itemsCounter);
	};
	const [ itemsCounter, setItemsCounter ] = useState(1);
	const plantName = 'Daconil®';
	const plantCode = 'Fungicida listo para usar';
	const plantPrice = '$16.500';
	return (
		<Stack
			align={'center'}
			spacing={{ base: 8, md: 20 }}
			py={{ base: 0, md: 10 }}
			direction={{ base: 'column', md: 'row' }}
		>
			<Stack flex={1} spacing={{ base: 5, md: 10 }}>
				<Blob
					w={'80%'}
					h={'55%'}
					position={'absolute'}
					top={{ base: '6%', lg: '28%' }}
					left={{ base: 2, md: -300, lg: -380 }}
					zIndex={-1}
					color={useColorModeValue('green.300', 'green.200')}
				/>
				<Text
						lineHeight={1.1}
						fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
						fontWeight={600}
						as={'span'}
						position={'relative'}
						_after={{
							content: "''",
							width: '50%',
							height: '25%',
							position: 'absolute',
							bottom: 1,
							left: 0,
							bg: 'green.400',
							zIndex: -1
						}}
					>
						{plantName}
					</Text>
				<Box
					position={'relative'}
					height={'280px'}
					rounded={'2xl'}
					boxShadow={'2xl'}
					width={"full"}
					overflow={'hidden'}

				>
					<Image
						alt={'Product Image'}
						fit={'cover'}
						align={'center'}
						w={'full'}
						h={'100%'}
						src={
							'https://www.gardentech.com/-/media/Images/GardenTech-NA/US/products/Daconil-family-in-use.jpg'
						}
					/>
				</Box>
			</Stack>
			<Stack flex={1} spacing={{ base: 7, md: 10 }}>
				<Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
					<Text as={'span'} color={'green.400'} fontSize={'70%'}>
						{plantCode}
					</Text>
					<br />
					<Text as={'span'} fontSize={'50%'}>
						{plantPrice}
					</Text>
				</Heading>
				<Stack spacing={{ base: 4, sm: 6 }} direction={'row'}>
					<NumberInput size="lg" maxW={32} defaultValue={1} min={1} max={10}>
						<NumberInputField backgroundColor={'white'} />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
					<Button
						rounded={'full'}
						size={'lg'}
						fontWeight={'normal'}
						px={6}
						color={'white'}
						colorScheme="red"
						leftIcon={<AddIcon h={4} w={4} color={'white.300'} onSubmit={handleSubmit} />}
					>
						Add to Cart
					</Button>
				</Stack>
				<Text fontSize={'100%'}>
				Herbicida selectivo y preemergente que tiene acción contra las malezas indicadas, 
				en aplicaciones sin incorporación por su especial formulación, la que no se volatiliza 
				ni es degradada por rayos solares (ultravioletas).
				</Text>
				
			</Stack>
			
		</Stack>
	);
};