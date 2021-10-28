import React, { useState, useEffect } from 'react'
import ListCards from './Components/ListCards/ListCards'
import CardPlant from './Components/CardPlant/CardPlant_copy'
import { Box, Text, Flex, Spacer } from '@chakra-ui/react'
import './Products.css'
const Products = () => {
  return (
    <div>
      <h2>Pantalla</h2>
      <div class="frow">
        <div class="col col1">
          <Box >
            <CardPlant></CardPlant>
          </Box>
        </div>
        <div class="col col2">
          <Box >
            <ListCards></ListCards>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Products
