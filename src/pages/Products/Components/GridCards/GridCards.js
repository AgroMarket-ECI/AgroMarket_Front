import React from 'react'
import ProductCard from '../Cards/ProductCard'
import { SimpleGrid } from '@chakra-ui/layout'

const GrifCards = () => {
  return (
    <div>
      <SimpleGrid minChildWidth="120px" spacing="20px">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </SimpleGrid>
    </div>
  )
}

export default GrifCards
