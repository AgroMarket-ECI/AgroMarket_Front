import React, { useState } from 'react'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { useHistory } from "react-router";

import { AccordionItem, AccordionButton, Checkbox, AccordionIcon, Text, Button, AccordionPanel, Divider, Center } from '@chakra-ui/react'
import Item from '../Item/Item.js';

const Treatment = ({ id, name, products }) => {
    const history = useHistory();
    const prop = () => {
        const states = [];
        products.map(() => states.push(false))
        return states
    }
    const [checkedItems, setCheckedItems] = useState(prop)


    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked

    const HandleChangeCheckAll = () => {
        const checkedItemsShadow = []
        checkedItems.map(() => checkedItemsShadow.push(!allChecked))
        setCheckedItems(checkedItemsShadow)
    }

    const HandleChangeCheckOne = (index) => {
        const newCheckedData = checkedItems.map((p, i) => {
            if (i === index) {
                return !p
            }
            return p
        })
        setCheckedItems(newCheckedData)
    }



    return (

        <AccordionItem bg="#EBFFF8" borderRadius="30" mb="30" pb="0.1" >
            <h2>
                <AccordionButton h="28" _expanded={{ pb: "5", bg: "blackAlpha.50", borderRadius: "30" }} _hover={{ bg: "blackAlpha.50", borderRadius: "30" }} _focus={{borderRadius:"30"}}>
                    <Checkbox size="lg" isChecked={allChecked} isIndeterminate={isIndeterminate} onChange={HandleChangeCheckAll}>
                        <Text color="#24903c" fontSize="20px" fontStyle="initial" textTransform="capitalize" fontWeight="bold">{name}</Text>
                    </Checkbox>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel >
                <Center>
                    <Button leftIcon={<InfoOutlineIcon />} colorScheme="pink" variant="solid" onClick={() => history.push('/product')}>
                        Ver Instrucciones
                    </Button>
                </Center>
                <Divider borderColor="green" mt="2" />
            </AccordionPanel>

            {products.map((p, index) => <Item isChecked={checkedItems[index]} onChange={() => HandleChangeCheckOne(index)} id={p.id} name={p.name} url={p.image}
                description={p.description} price={p.price} />)}

        </AccordionItem>
    )
}

export default Treatment