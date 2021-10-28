import './css/iniciarSesion.css';
import './css/formulario.css';
import logo from './img/AgroMarket.png';
//import { useHistory } from "react-router";
import { Image, FormLabel, Input, Button, Container} from "@chakra-ui/react";
import { Password } from "./Password";
import { Link } from "react-router-dom";
export const Login = () => {

   // const history = useHistory();


    /**const sendDates = (event) => {
        event.preventDefault();
        history.push('/home');
    }*/
    return(
        <div id="form" className="formulario">
            <div className="cuadro-info">
                <Container bg="white" width="250px" border="solid 1px">
                    Te invitamos a iniciar sesión para seguir disfrutando de nuestros servicios.
                </Container>
            </div>
            <div id="imagen">
                <Image width="100%" src={logo} alt="Segun Adebayo" />
            </div>
            <div id="Usuario" className="field field-form">
                <FormLabel>Usuario</FormLabel>
                <Input className="field-text" />
            </div>
            <div id="Contrasena" className="field field-form">
                <FormLabel>Contraseña</FormLabel>
                <Password/>
            </div>
            <div id="boton" className="field">    
                <Button border="solid 1px" color="black" colorScheme="red" size="md">
                    Iniciar Sesión
                </Button> 
            </div>
            <div id="link" >
                <Link className="link" to = "/registrarme">No tengo cuenta. Registrarme</Link>
            </div>
        </div>
  


    );
};
export default Login