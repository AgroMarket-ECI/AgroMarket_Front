import React from 'react'
import { Box, Badge, Image } from '@chakra-ui/react'


const CardPlant = ({ image, name, description }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg="#EBFFF8" boxShadow="2xl" borderRadius="20">
      <Image src={image} alt="" />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Planta
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {name}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          Problemas encontrados
        </Box>

        <Box>
          {description}
        </Box>
      </Box>
    </Box>
  )
}

export default CardPlant;
