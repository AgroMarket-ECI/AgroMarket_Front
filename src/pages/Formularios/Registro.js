import './css/formulario.css';
import './css/registro.css';
import logo from './img/AgroMarket.png';
import { Link } from "react-router-dom";
//import { useHistory } from "react-router";
import {  Text,Image, FormLabel, Input, Button, FormControl} from "@chakra-ui/react";
import { Password } from "./Password";
export const Registro = () => {

   // const history = useHistory();


    /**const sendDates = (event) => {
        event.preventDefault();
        history.push('/home');
    }*/
    return(
        <div id="Registro" className="formulario">
            <div id="registro-titulo">
                <div id="registro-titulo-texto">
                    <Text as="em">Registro Usuario</Text>
                </div>
                <div className="imagen-registro">
                    <Image width="100%" src={logo} alt="Segun Adebayo" />
                </div>
            </div>
            <FormControl id="first-name" isRequired>
                <div id="Usuario" className="field field-form">
                    <FormLabel>Usuario</FormLabel>
                    <Input className="field-text"/>
                </div>
                <div id="Correo" className="field field-form">
                    <FormLabel>Correo</FormLabel>
                    <Input className="field-text"/>
                </div>
                <div id="Contrasena" className="field field-form">
                    <FormLabel>Contraseña</FormLabel>
                    <Password/>
                </div>
                <div id="confirmar-con" className="field field-form">
                    <FormLabel>Confirmar contraseña</FormLabel>
                    <Password/>
                </div>
                <div id="boton" className="field">    
                    <Button border="solid 1px" color="black" colorScheme="red" size="md">
                        Registrarme
                    </Button> 
                </div>
                <div id="link" >
                <Link className="link" to = "/Login">Ya tengo una cuenta</Link>
            </div>
            </FormControl>
        </div>
  


    );
};
export default Registro