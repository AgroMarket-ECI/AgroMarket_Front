import "./css/Purchase.css";
import { SimpleMenu } from "../components/SimpleMenu";
import { CartComponent } from "../components/CartComponent";
import logo2 from '../../img/AgroMarket.png';
import { Image } from "@chakra-ui/react";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
} from '@chakra-ui/react'

export const Purchase = () => {

    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
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
            <Alert
                id="alertSucces"
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
            >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    ¡Compra realizada!
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    Gracias por preferirnos. En unas horas tendrás tú producto en casa.
                </AlertDescription>
            </Alert>
            <br></br>
            <div>
                <img className="purchaseProduct" src="/assets/purchaseProduct.svg" alt="Compra realizada" />
            </div>
        </div>
    );
}