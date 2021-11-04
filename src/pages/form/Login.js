import './css/Login.css';
import './css/Form.css';
import logo from './img/AgroMarket.png';
import { useContext } from "react";
import { useHistory } from "react-router";
import { Image, FormLabel, Input, Button} from "@chakra-ui/react";
import { Password } from "./Password";
import { Link } from "react-router-dom";
import { SimpleMenu } from "../components/SimpleMenu";
import  UserContext  from "../../services/context/UserContext";
export const Login = () => {

    const history = useHistory();

    const { GetToken,SetToken,ServiceRest } = useContext(UserContext)
    const sendDates = (event) => {
        event.preventDefault();
        const dates={
            email:document.getElementById("field-correo").value,
            password:document.getElementById("fieldcontrasena").value,
        }
        ServiceRest("POST","v1/auth",dates,(data)=>{
            console.log(data)
            SetToken(data.token);
            //history.push('/Login');
        });
    }
    return(
        
        <div id="form" className="formulario">
          
            
            
            <div id="imagen">
                <Image width="100%" src={logo} alt="Segun Adebayo" />
            </div>
            <div id="Usuario" className="field">
                <FormLabel>Usuario</FormLabel>
                <Input id="field-correo" placeholder="Escribe tu usuario" className="field-text" />
            </div>
            <div id="Contrasena" className="field">
                <FormLabel>Contraseña</FormLabel>
                <Password idFiel="fieldcontrasena" pholder="Escribe tu contraseña"/>
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