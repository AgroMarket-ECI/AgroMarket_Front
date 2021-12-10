import './css/Login.css';
import './css/Form.css';
import logo from './img/AgroMarket.png';
import { useContext } from "react";
import { useHistory } from "react-router";
import { Password } from "./Password";
import { Link } from "react-router-dom";
import UserContext from "../../services/context/UserContext";
import { SimpleMenu } from "../components/SimpleMenu";
import logo2 from '../../img/AgroMarket.png';
import React from 'react'
import { Image, FormLabel, Input, Button, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from "@chakra-ui/react";

export const Login = () => {

    const history = useHistory();
    const [display, setDisplay] = React.useState('none');
    const { GetToken, SetToken, ServiceRest } = useContext(UserContext)

    const sendData = (event) => {
        event.preventDefault();
        const allData = {
            email: document.getElementById("field-correo").value,
            password: document.getElementById("fieldcontrasena").value,
        }
        ServiceRest("POST", "v1/auth", allData, (data) => {
            SetToken(data.token);
            history.push('/Home');
        });
        setDisplay('none');
    }
    return (

        <div id="form" className="formulario">
            <div id="header" className="header">
                <SimpleMenu />
                <div className="imagen-header">
                    <Image width="100%" src={logo2} alt="logo2" />
                </div>
            </div>
            <div id="imagen">
                <Image width="100%" src={logo} alt="logo" />
            </div>
            <div id="Usuario" className="field">
                <FormLabel>Usuario</FormLabel>
                <Input id="field-correo" placeholder="Escribe tu usuario" className="field-text" />
            </div>
            <div id="Contrasena" className="field">
                <FormLabel>Contraseña</FormLabel>
                <Password idFiel="fieldcontrasena" pholder="Escribe tu contraseña" />
            </div>
            <div id="boton" className="field">
                <Button className="field-button" onClick={sendData} border="solid 1px" colorScheme="red" size="md">
                    Iniciar Sesión
                </Button>
            </div>
            <Alert status='error' display={display}>
                <AlertIcon />
                <AlertTitle mr={2}>¡Credenciales Inválidas!</AlertTitle>
                <AlertDescription>Usuario y/o contraseña incorrectos</AlertDescription>
                <CloseButton position='absolute' right='8px' top='8px' onClick={() => setDisplay("none")} />
            </Alert>
            <div id="link" >
                <Link className="link" to="/signUp">No tengo cuenta. Registrarme</Link>
            </div>
        </div>
    );
};
export default Login