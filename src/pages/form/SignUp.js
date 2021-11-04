import './css/Form.css';
import './css/SignUp.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useHistory } from "react-router";
import {  Image, Text, FormLabel, Input, Button, FormControl} from "@chakra-ui/react";
import { Password } from "./Password";
import { SimpleMenu } from "../components/SimpleMenu";
import  UserContext  from "../../services/context/UserContext";

export const SignUp= () => {

    const history = useHistory();
    const { GetToken,SetToken,ServiceRest } = useContext(UserContext)
    
    
    
    

    const sendDates = (event) => {
        event.preventDefault();
        const dates={
            email:document.getElementById("field-correo").value,
            password:document.getElementById("fieldcontrasena").value,
            role:"C"
        }
       
        ServiceRest("POST","v1/user",dates,(data)=>{
            
            console.log(data)
            history.push('/Login');
        });
        
    }
    return(
    
        <div id="Registro" className="formulario">
            <SimpleMenu></SimpleMenu>
            <div id="registro-titulo">
                <div id="registro-titulo-texto">
                    <Text>Registro Usuario</Text>
                </div>
            </div>
            <FormControl isRequired>
                <div id="Usuario" className="field">
                    <FormLabel>Usuario</FormLabel>
                    <Input placeholder="Escribe tu nombre de usuario" className="field-text"/>
                </div>
                <div id="Correo" className="field">
                    <FormLabel>Correo</FormLabel>
                    <Input id="field-correo" type="email" placeholder="Escribe tu email" className="field-text"/>
                </div>
                <div id="Contrasena" className="field">
                    <FormLabel>Contraseña</FormLabel>
                    <Password pholder={"Crea tu contraseña"} idFiel={"fieldcontrasena"}/>
                </div>
                <div id="confirmar-con" className="field">
                    <FormLabel>Confirmar contraseña</FormLabel>
                    <Password pholder={"Repite la contraseña"}/>
                </div>
                <div id="boton" className="field">    
                    <Button className="field-button" onClick={sendDates} border="solid 1px" colorScheme="red" size="md">
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
export default SignUp