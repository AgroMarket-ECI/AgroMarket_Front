import React, { useState, useEffect } from 'react'
import ProductCard from './Components/Cards/ProductCard'
import { SimpleGrid } from '@chakra-ui/layout'
import ListCards from './Components/ListCards/ListCards'


const Products = () => {
    return(
    <div>
        <h2>Pantalla</h2>
        <ListCards></ListCards>
        <SimpleGrid minChildWidth="120px" spacing="20px">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </SimpleGrid>
       
    </div>)
}

export default Products