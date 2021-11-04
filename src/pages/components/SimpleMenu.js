
import { Menu, MenuButton,Image,MenuList,MenuItem,IconButton } from "@chakra-ui/react"
import { useHistory } from "react-router";
import { useContext } from "react";
import  UserContext  from "../../services/context/UserContext";

export const SimpleMenu = () =>{

  const history = useHistory();

  
  const { SetToken } = useContext(UserContext)
  const menu = () =>{
    history.push("/home")
  } 
  
  return(
    <Menu>
          <div className="boton-hamburguesa">
            <MenuButton
              position="relative"
              w = "100%"
              
              aria-label="Options"
              variant="outline"> 
              <Image className="imagen-boton-hamburguesa" width="100%" src="https://www.samueldiosdado.com/wp-content/uploads/2017/08/Men%C3%BA-hamburguesa-herramienta-practica-o-icono-inutil.png" alt="Segun Adebayo" />
            </MenuButton>       
          </div>

            <MenuList>
            <MenuItem onClick={menu}>
              Inicio
            </MenuItem>
            <MenuItem  onClick={() => {history.push("/Login")}}>
              Perfil
            </MenuItem>
            <MenuItem onClick={() => {
              SetToken("");
              history.push("/Login")}}>
              Cerrar Sesión
            </MenuItem>
          </MenuList>
        </Menu>
  )
}
export default SimpleMenu;