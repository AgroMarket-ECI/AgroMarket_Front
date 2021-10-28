import React from 'react';
import {
    Box,
    Image,
} from '@chakra-ui/react';

const clickChange = () => {
    window.location.href = '/product';
};

export const PlantItem = () => {
    const property = {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        title: "Modern home in city center in the heart of historic Los Angeles",
    }

    return (
        <Box as="button" maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden" borderColor="black" onClick={clickChange}>
            <Image src={property.imageUrl} alt={property.imageAlt} />
            <Box p="6">
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {property.title}
                </Box>
            </Box>
        </Box>
    )
};