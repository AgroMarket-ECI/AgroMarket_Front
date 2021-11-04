import React from 'react';
import { SimpleMenu } from "../../components/SimpleMenu";
import { CartComponent } from "../../components/CartComponent";
import logo2 from '../../../img/AgroMarket.png';
import {
    Box,
    Image,
} from '@chakra-ui/react';

export const PlantItem = ({ imageUrl, imageAlt, title }) => {
    const clickChange = () => {
        window.location.href = '/product';
    };    

    return (
        <div>
            <div id="header" className="header">
          <SimpleMenu/>
          <div className="imagen-header">
          <Image width="100%" src={logo2} alt="Segun Adebayo" />
          </div>
          <CartComponent/>
        </div>
            
        <Box padding="0.5%" margin="17px" bd="red" as="button" maxW="300px" borderWidth="1px" borderRadius="lg" overflow="hidden" borderColor="black" onClick={clickChange}>
            <Box>
                <Image w="100%" src={imageUrl} alt={imageAlt}  borderRadius="10px"/>
            </Box>
                <Box 
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    isTruncated
                >
                {title}
            </Box>
        </Box>
        </div>
    )
};