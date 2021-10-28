import {
	Container,
	Stack,
	Box,
	Heading,
	Text,
	Button,
	Image,
	Icon,
	IconProps,
	useColorModeValue,
	NumberIncrementStepper,
	NumberDecrementStepper,
	NumberInputStepper,
	NumberInputField,
	NumberInput
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

export const Product = () => {
	const plantName = 'Sauce laurifolio, Salenca';
	const plantCode = 'Code: 2001ICX';
	const plantPrice = '$16.500';
	return (
		<Container maxW={'8xl'}>
			<Stack
				align={'center'}
				spacing={{ base: 8, md: 20 }}
				py={{ base: 0, md: 28 }}
				direction={{ base: 'column', md: 'row' }}
			>
				<Stack flex={1} spacing={{ base: 5, md: 10 }}>
					<Blob
						w={'90%'}
						h={'80%'}
						position={'absolute'}
						top={'15%'}
						left={-350}
						zIndex={-1}
						color={useColorModeValue('red.50', 'red.400')}
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
							w={'100%'}
							h={'100%'}
							src={'https://www.jardineriaon.com/wp-content/uploads/2014/10/Agalla_de_Salix_fragilis.jpg'}
						/>
					</Box>
				</Stack>
				<Stack flex={1} spacing={{ base: 5, md: 10 }}>
					<Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
						<Text
							as={'span'}
							position={'relative'}
							_after={{
								content: "''",
								width: 'full',
								height: '30%',
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
					<Text color={'gray.500'}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula feugiat molestie.
						Praesent et pretium nunc. Aliquam ac augue eu ante consectetur bibendum non eu leo. Fusce a mi
						quam. In iaculis pretium varius. Morbi tristique felis et libero viverra, et placerat justo
						dictum. Cras tempor eget metus eget volutpat. Nam imperdiet neque ut accumsan vestibulum.
					</Text>
					<Stack spacing={{ base: 4, sm: 6 }} direction={'row'}>
						<NumberInput size="lg" maxW={32} defaultValue={1} min={1} max={10}>
							<NumberInputField />
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
							leftIcon={<AddIcon h={4} w={4} color={'white.300'} />}
						>
							Add to Cart
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</Container>
	);
};

export const Blob = (props: IconProps) => {
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
