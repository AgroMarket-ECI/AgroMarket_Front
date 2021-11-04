import React, { useState } from 'react';
import { Box, AccordionPanel, Checkbox, Flex, Image, Text, IconButton, Divider } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
const Item = ({ isChecked, onChange, id, name, url, description, price }) => {

    const ColorComponent = {
        backgroundColor: isChecked ? "#79a8bb" : "whitesmoke"
    };

    const ColorButtonComponent = {
        backgroundColor: isChecked ? "#FAB4CA" : "#fab4ca63"
    };

    return (
        <AccordionPanel ml="4" mr="4" mb="5" style={ColorComponent}  borderRadius="20px" boxShadow="base">
            <Divider mb="5" />
            <Checkbox isChecked={isChecked} onChange={onChange}
                w="100%">
                <Flex alignItems="center">
                    <Image src={url} boxSize="90px" objectFit="scale-down" />
                    <Box ml="3">
                        <Text textTransform="uppercase" fontWeight="black" fontSize="18">
                            {name}
                        </Text>
                        <Text ml="3" fontSize="sm">{description}</Text>
                        <Text ml="3" fontSize="m" fontWeight="semibold">$ {price}</Text>
                    </Box>
                    <IconButton ml="10" style={ColorButtonComponent} aria-label="Search database" icon={<AddIcon />} />

                </Flex>
            </Checkbox>
            
        </AccordionPanel>
    );
}

export default Item;