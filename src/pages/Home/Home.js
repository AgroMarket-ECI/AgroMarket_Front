import { Box, Heading, Text, Input, InputGroup, InputLeftElement, Button, Center, SimpleGrid, Image } from "@chakra-ui/react";
import { Search2Icon, Icon } from '@chakra-ui/icons';
import './css/Home.css';
import logo from '../form/img/AgroMarket.png';
import logo2 from '../../img/AgroMarket.png';
import { useState, useRef , useContext } from "react";
import { useHistory } from "react-router";
import {ServiceApi} from '../../services/ServiceApi';
import { SimpleMenu } from "../components/SimpleMenu";
import { CartComponent } from "../components/CartComponent";
import UserContext from "../../services/context/UserContext";
export const Home = () =>{
    const history = useHistory();
    const { GetToken, SetToken, ServiceRest } = useContext(UserContext)

    const fileInputRef = useRef(null);
    const [plantImg, setPlantImg] = useState('');
    const [fileName, setFileName] = useState('');

    const imgchange = (event) => {
        event.preventDefault();
        fileInputRef.current.click();
    }

    var imageHandler = (e) => {
        const reader = new FileReader();

        reader.onload = () => {

            if (reader.readyState === 2) {
                setPlantImg(reader.result)
            }
        }

        if (e.target.files[0]) {
            setFileName(e.target.files[0].name);
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const directplantname = (event) => {
        event.preventDefault();
        history.push("/plant/image");
    }

    const directproducts = (event) => {
        event.preventDefault();
        if(GetToken()===""){
            history.push("/login");
        }else{
            sessionStorage.setItem("plantImage", plantImg);
            history.push(`/products/${fileName}`);
        }
    }

    return (
        <ServiceApi>
            <div id="header" className="header">
          <SimpleMenu/>
          <div className="imagen-header">
          <Image width="100%" src={logo2} alt="logo" />
          </div>
          <CartComponent/>
        </div>
            <div className="home">
                <Box>
                    <Image id="imagen" boxSize="200px" src={logo} alt="logo"/>
                    <br />
                    <Text fontSize="xl" width="100%" textAlign={['center']} color="gray">
                        Te brindamos las mejores soluciones para combatir la enfermedad de tu planta de una forma rapida y eficiente.
                    </Text>
                    <br />
                    <Text fontSize="xl" width="100%" textAlign={['center']} color="black">
                        Selecciona la forma en que deseas realizar la búsqueda
                    </Text>

                    <br />
                    <SimpleGrid minChildWidth="230px" spacing="40px">
                        <Center>
                            <Box w="100%">
                                <Center>
                                    <InputGroup width="100%" maxW="300px" className="inputplanta">
                                        <InputLeftElement pointerEvents="none" children={<Search2Icon color="gray.300" />} />
                                        <Input background="white" type="text" placeholder="Buscar por nombre de la planta" />
                                    </InputGroup>
                                </Center>
                                <br />
                                <Center>
                                    <Button border="solid 1px" maxW="300px" colorScheme="red" width="100%" onClick={directplantname}>Buscar</Button>
                                </Center>
                            </Box>
                        </Center>
                        <Box w="100%">
                            <Center>
                                <Image src={plantImg} alt="" maxW="90%" maxH="100px" />
                            </Center>
                            <input type="file" id="input" ref={fileInputRef} accept="image/*" onChange={imageHandler} />
                            <Center>
                                <Button border="solid 1px" maxW="300px" bg="#389541" onClick={imgchange} width="100%" color="white">
                                    <i className="material-icons">add_photo_alternate</i>
                                    Sube la foto de tu planta
                                </Button>
                            </Center>
                            <br />
                            <Center>
                                <Button border="solid 1px" maxW="300px" colorScheme="red" width="100%" onClick={directproducts}>Buscar</Button>
                            </Center>
                        </Box>
                    </SimpleGrid>
                    <br />
                    <br />

                </Box>
            </div >
        </ServiceApi >
    )

};

export default Home;