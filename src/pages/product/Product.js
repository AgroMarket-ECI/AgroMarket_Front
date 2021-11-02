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
	NumberInput
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

export const Product = () => {
	const [ itemsCounter, setItemsCounter ] = useState(1);
	const plantName = 'Daconil®';
	const plantCode = 'Fungicida listo para usar';
	const plantPrice = '$16.500';

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
			<HStack justify={'right'} py={6}>
				<Button leftIcon={<CircleIcon boxSize={7} color="red.500" />} colorScheme="teal" variant="solid">
					{itemsCounter}
				</Button>
			</HStack>
			<Stack
				align={'center'}
				spacing={{ base: 8, md: 20 }}
				py={{ base: 0, md: 28 }}
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
					<Box
						position={'relative'}
						height={'380px'}
						rounded={'2xl'}
						boxShadow={'2xl'}
						width={'full'}
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
						<Text
							as={'span'}
							position={'relative'}
							_after={{
								content: "''",
								width: 'full',
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
						<br />
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
					<Text fontSize={'130%'}>
						Con el fungicida Daconil® listo para usar, usted puede prevenir las enfermedades causadas por
						hongos antes de que broten, o combatirlas para detener y controlar las enfermedades activas. La
						botella con rociador lista para llevar simplifica el tratamiento a sus plantas de flores,
						vegetales, frutales, arbustos y árboles, con una protección resistente a la lluvia en la que
						puede confiar.
					</Text>
					
				</Stack>
			</Stack>
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
