

import { Image } from "@chakra-ui/react"
import { useEffect, useState } from "react";
export const CartComponent = () =>{
    const imageUrl =  "/assets/cirrojo.png"
    var numberCart=0;
    let cartStorage=(JSON.parse(window.localStorage.getItem("cart")));
    if(cartStorage==null){
        numberCart=0;
    }else{
        for(let clave in cartStorage){
            numberCart=numberCart+cartStorage[clave];
        }
    }

    
    const [cart, setCart] = useState(0);
    const cartCount = (event) => {
        event.preventDefault();
        //llegar a vista Angelica
    }
    useEffect(()=>{
        console.log("hola"+numberCart);
    },window.localStorage.getItem("cart"))




    return(
        <div className="Cart">

            <button w="100%" onClick={cartCount}>
                <div className="imagen-rojo-boton-cart">
                    <Image width="100%" src={imageUrl} />
                    <label id="CartNumber" className="numero">{numberCart}</label>
                </div>
                <Image className="imagen-boton-cart" width="100%" src="https://image.flaticon.com/icons/png/512/107/107831.png" alt="Segun Adebayo" />
            </button>
        </div>
        
        
    )}

export default CartComponent;