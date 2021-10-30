import './css/Login.css';
import './css/Form.css';
import logo from './img/AgroMarket.png';
import { useHistory } from "react-router";
import { Image, FormLabel, Input, Button} from "@chakra-ui/react";
import { Password } from "./Password";
import { Link } from "react-router-dom";
export const Login = () => {

    const history = useHistory();


    const sendDates = (event) => {
        event.preventDefault();
        history.push('/product');
    }
    return(
        <div id="form" className="formulario">
            <div id="imagen">
                <Image width="100%" src={logo} alt="Segun Adebayo" />
            </div>
            <div id="Usuario" className="field">
                <FormLabel>Usuario</FormLabel>
                <Input placeholder="Escribe tu usuario" className="field-text" />
            </div>
            <div id="Contrasena" className="field">
                <FormLabel>Contraseña</FormLabel>
                <Password pholder="Escribe tu contraseña"/>
            </div>
            <div id="boton" className="field">    
                <Button className="field-button" onClick={sendDates} border="solid 1px" colorScheme="red" size="md">
                    Iniciar Sesión
                </Button> 
            </div>
            <div id="link" >
                <Link className="link" to = "/signUp">No tengo cuenta. Registrarme</Link>
            </div>
        </div>
  


    );
};
export default Login