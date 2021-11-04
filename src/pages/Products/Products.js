import React, { useState } from 'react'
import CardPlant from './Components/CardPlant/CardPlant'
import { Box, Accordion, Image, Center } from '@chakra-ui/react'
import './Products.css'
import Treatment from './Components/Treatment/Treatment.js'
import { useData } from "../../providers/DataProvider";
import logo from "../../assets/images/AgroMarket.png";
const Products = () => {
  const { data, setData } = useData();
  const treatments = data.treatments;

  return (

    <div>
      <div class="frow">
        <div class="col col1">
          <Center>
            <Image src={logo} boxSize="40" fit="scale-down" />
          </Center>
          <CardPlant />
        </div>
        <div class="col col2">
          <Box >
            <Accordion allowToggle >
              {treatments.map((t) => <Treatment id={t.id} name={t.name} products={t.products} />)}
            </Accordion>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Products
