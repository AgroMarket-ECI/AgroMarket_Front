import { Box, Heading, Text, Input, InputGroup, InputLeftElement, Button, Center, SimpleGrid, Image } from "@chakra-ui/react";
import { Search2Icon, Icon } from '@chakra-ui/icons';
import { BsFillCameraFill } from "react-icons/bs";
import './css/Home.css';
import logo from '../Formularios/img/AgroMarket.png';

export const Home = () =>{
    return (
        <div className="home">
            <Center>
                <Box>
                    <Center>
                    <Image id="imagen" boxSize="200px" src={logo}/>  
                    </Center>
                    <br />
                    <Center>
                        <Text fontSize="2xl" width="80%" textAlign={[ 'center' ]} >
                            Tenemos la mejor solución para combatir la enfermedad de tu planta. Con ayuda de la mejor 
                            tecnologia te recomendaremos productos que te permitan tratar y curar cualquier enfermedad. Y no te preocupes,
                            también podrás adquirir estos productos a través de nuestra tienda virtual.
                        </Text>
                    </Center>
                        <br />
                    <Center>
                        <Text fontSize="2xl" width="80%" textAlign={[ 'center' ]} >
                            Selecciona la forma en que deseas realizar la búsqueda
                        </Text>
                    </Center>
                    <br />
                    <br />
                    <SimpleGrid minChildWidth="180px" spacing="40px">
                        <Box>
                            <Center>
                            <Search2Icon w={10} h={10}/>
                            </Center>
                            <br />
                            <Center>
                            <InputGroup width="260px">
                                <InputLeftElement
                                pointerEvents="none"
                                children={<Search2Icon color="gray.300" />}
                                />
                                <Input variant="filled" type="tel" placeholder="Nombre de la planta" />
                            </InputGroup>
                            </Center>
                            <br />
                            <Center>
                            <Button border="solid 1px" color="black" colorScheme="red">Buscar por nombre de la planta</Button>
                            </Center>
                        </Box>
                        <Box>
                            <Center>
                            <Icon as={BsFillCameraFill} w={10} h={10}/>
                            </Center>
                            <br />
                            <Center>
                            <Button border="solid 1px" color="black" colorScheme="red">Buscar por foto</Button>
                            </Center>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Center>
        </div>
    )

};

export default Home;