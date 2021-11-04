import React from 'react';
import { CartComponent } from "../../components/CartComponent";
import { SimpleMenu } from "../../components/SimpleMenu";
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
        <CartComponent></CartComponent>
        <SimpleMenu></SimpleMenu>
        <Box padding="0.5%" margin="17px" bd="red" as="button" maxW="300px" borderWidth="1px" borderRadius="lg" overflow="hidden" borderColor="black" onClick={clickChange}>
            <Box>
                <Image w="100%" src={imageUrl} alt={imageAlt}/>
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