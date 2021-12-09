
import { useHistory } from "react-router";
import { Image } from "@chakra-ui/react"
export const CartComponent = () =>{
    const imageUrl =  "/assets/cirrojo.png"
    const history = useHistory();
    var numberCart=0;
    var cart=JSON.parse(window.localStorage.getItem("cart"));
    if(cart!=null){
        for(let clave in cart){
            numberCart=numberCart+cart[clave];
        }
    }
    const comprar = (event) => {
        event.preventDefault();
        history.push("/shoppingCart");
    }


    return(
        <div className="Cart">

            <button w="100%" onClick={comprar}>
                <div className="imagen-rojo-boton-cart">
                    <Image width="100%" src={imageUrl} />
                    <label id="CartNumber" className="numero">{numberCart}</label>
                </div>
                <Image className="imagen-boton-cart" width="100%" src="https://image.flaticon.com/icons/png/512/107/107831.png" alt="Segun Adebayo" />
            </button>
        </div>
        
        
    )}

export default CartComponent;