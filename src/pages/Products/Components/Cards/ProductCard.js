import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { StarIcon } from '@chakra-ui/icons'
import { Button, Grid, GridItem } from '@chakra-ui/react'
import './ProductCard.css'

const ProductCard = () => {
  const property = {
    imageUrl:
      'https://ichef.bbci.co.uk/news/640/cpsprodpb/113AC/production/_113427507_solar_orbiter_eui-fullsun01.jpg',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Box className='item'
      h="220"
      align="center"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image h="50%" w="100%" src={property.imageUrl} alt={property.imageAlt} />
      <Grid
        h="50%"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(1, 1fr)"
        gap={1}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <div id="info">
            <p id="des">xxxxxxxxxxxxxxxxxxxxxx</p>
          </div>
        </GridItem>
        <GridItem colSpan={2}>
          <p id="price">3333333</p>
        </GridItem>
        <GridItem colSpan={2}>
          <Button colorScheme="teal" size="xs">
            Ver más
          </Button>
        </GridItem>
        <span/>
      </Grid>
    </Box>
  )
}

export default ProductCard
