import React from 'react';
import {
    Box,
    Image,
} from '@chakra-ui/react';

export const PlantItem = ({ imageUrl, imageAlt, title }) => {
    const clickChange = () => {
        window.location.href = '/product';
    };    

    return (
        <Box bd="red" as="button" w="30%" h="500px" borderWidth="1px" borderRadius="lg" overflow="hidden" borderColor="black" onClick={clickChange}>
            <Box h="80%">
                <Image  src={imageUrl} alt={imageAlt}/>
                </Box>
                    <Box h="20%"
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        isTruncated
                    >
                        {title}
                    </Box>
        </Box>
    )
};