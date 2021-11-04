import React, { useState } from 'react'

import { AccordionItem, AccordionButton, Checkbox, AccordionIcon, Text } from '@chakra-ui/react'
import Item from '../Item/Item.js';

const Treatment = ({ id, name, products }) => {
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

        <AccordionItem bg="#EBFFF8" borderRadius="30" mb="30" pb="0.1">
            <h2>
                <AccordionButton h="28" _expanded={{ pb: "5" }} >
                    <Checkbox size="lg" isChecked={allChecked} isIndeterminate={isIndeterminate} onChange={HandleChangeCheckAll}>
                        <Text color="#24903c" fontSize="20px" fontStyle="initial" textTransform="capitalize" fontWeight="bold">{name}</Text>
                    </Checkbox>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            {products.map((p, index) => <Item isChecked={checkedItems[index]} onChange={() => HandleChangeCheckOne(index)} id={p.id} name={p.name} url={p.url}
                description={p.description} price={p.price} />)}

        </AccordionItem>
    )
}

export default Treatment