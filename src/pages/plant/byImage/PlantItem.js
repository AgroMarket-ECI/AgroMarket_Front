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
        <Box as="button" maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden" borderColor="black" onClick={clickChange}>
            <Image src={imageUrl} alt={imageAlt} />
            <Box p="6">
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {title}
                </Box>
            </Box>
        </Box>
    )
};