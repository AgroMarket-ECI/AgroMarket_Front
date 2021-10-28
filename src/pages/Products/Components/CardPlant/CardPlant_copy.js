import React from 'react'
import { Image } from '@chakra-ui/image'
import { StarIcon } from '@chakra-ui/icons'
import { Text, Badge, Button, Grid, GridItem } from '@chakra-ui/react'
import './CardPlant.css'

const CardPlant = () => {
  return (
    <div>
      <Text fontSize="3xl" fontFamily="news">NOMBRE PRODUCTO</Text>
      <div class="card">
        <div class="image">
          <img src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg" />
        </div>
        <div class="details">
          <div class="center">
            <h1>
              PROBLEMAS ENCONTRADOS
            </h1>
            <p>
              Lorem ipsum is simple dummy text on the printing and typesetting
              industry.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPlant
