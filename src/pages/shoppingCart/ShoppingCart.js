import "./css/ShoppingCart.css";
import { SimpleMenu } from "../components/SimpleMenu";
import { CartComponent } from "../components/CartComponent";
import logo2 from '../../img/AgroMarket.png';
import { Image } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react'
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
                            <Th>Precio por unidad</Th>
                            <Th isNumeric>Cantidad</Th>
                            <Th isNumeric>Subtotal</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <Box w='100%' p={4} color='black'>
                                    This is the Box
                                </Box>
                            </Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Box w='100%' p={4} color='black'>
                                    This is the Box
                                </Box>
                            </Td>
                            <Td>centimetres (cm)</Td>
                            <Td isNumeric>30.48</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Box w='100%' p={4} color='black'>
                                    This is the Box
                                </Box>
                            </Td>
                            <Td>metres (m)</Td>
                            <Td isNumeric>0.91444</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </div>
            <div>
                <Table id="total" variant='simple'>
                    <Tbody>
                        <Tr>
                            <Td className="titles">Subtotal</Td>
                            <Td>millimetres (mm)</Td>
                        </Tr>
                        <Tr>
                            <Td className="titles">Descuento</Td>
                            <Td>centimetres (cm)</Td>
                        </Tr>
                        <Tr>
                            <Td className="titles">Envio</Td>
                            <Td>metres (m)</Td>
                        </Tr>
                        <Tr>
                            <Td className="titles">Total</Td>
                            <Td>metres (m)</Td>
                        </Tr>
                        <Tr className="buttonBuy">
                            <Td></Td>
                            <Td>
                                <Button className="buyProducts">Comprar</Button>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </div>
        </div>
    );
}
