import "./css/ShoppingCart.css";
import { SimpleMenu } from "../components/SimpleMenu";
import { CartComponent } from "../components/CartComponent";
import logo2 from '../../img/AgroMarket.png';
import { Image } from "@chakra-ui/react";
import { useHistory } from "react-router";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button
} from '@chakra-ui/react'

export const ShoppingCart = () => {
    const storageShoppingCart = JSON.parse(window.localStorage.getItem("cart"));
    var myShoppingCart = []
    var subtotalPrice = 0;
    const shippingPrice = 50000; 
    const history = useHistory();

    for (let sc in storageShoppingCart) {
        if (storageShoppingCart[sc]["numberProduct"] > 0 ){
            myShoppingCart.push(storageShoppingCart[sc]);
        }
    }

    const subtotal = (productPrice, numberProduct) => {
        subtotalPrice += productPrice * numberProduct;
        return productPrice * numberProduct;
    }

    const purchaseProduct = () => {
        window.localStorage.setItem("cart", null)
        history.push("/shoppingCart/purchase")
    }

    return (
        <div>
            <div id="header" className="header">
                <SimpleMenu />
                <div className="imagen-header">
                    <Image width="100%" src={logo2} alt="Segun Adebayo" />
                </div>
                <CartComponent />
            </div>
            <div id="summaryCart">
                <div className="imageBag">
                    <img className="bag" src="/assets/bag.png" alt="Resumen de compra" />
                </div>
                <label className="summary">Resumen de compra</label>
            </div>
            <div id="tableSummary">
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Producto</Th>
                            <Th isNumeric>Precio por unidad</Th>
                            <Th isNumeric>Cantidad</Th>
                            <Th isNumeric>Subtotal</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {myShoppingCart.map((msc, i) => {
                            return (
                                <Tr>
                                    <Td>{msc.name}</Td>
                                    <Td isNumeric >{msc.price}</Td>
                                    <Td isNumeric>{msc.numberProduct}</Td>
                                    <Td isNumeric>{subtotal(msc.price, msc.numberProduct)}</Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </div>
            <div>
                <Table id="total" variant='simple'>
                    <Tbody>
                        <Tr>
                            <Td className="titles">Subtotal</Td>
                            <Td>{subtotalPrice}</Td>
                        </Tr>
                        <Tr>
                            <Td className="titles">Envio</Td>
                            <Td>{shippingPrice}</Td>
                        </Tr>
                        <Tr>
                            <Td className="titles">Total</Td>
                            <Td className="titles">{shippingPrice + subtotalPrice}</Td>
                        </Tr>
                        <Tr className="buttonBuy">
                            <Td></Td>
                            <Td>
                                <Button className="buyProducts"  onClick={purchaseProduct}>Comprar</Button>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </div>
        </div>
    );
}
