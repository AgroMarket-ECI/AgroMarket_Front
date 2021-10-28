import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import GridCard from '../GridCards/GridCards'

const ListCards = () => {
  return (
    <div>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
           <GridCard></GridCard>
          </TabPanel>
          <TabPanel>
          <GridCard></GridCard>
          </TabPanel>
          <TabPanel>
          <GridCard></GridCard>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default ListCards
