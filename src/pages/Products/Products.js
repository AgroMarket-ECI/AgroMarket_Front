import React, { useContext, useEffect, useState } from 'react'
import CardPlant from './Components/CardPlant/CardPlant'
import { Box, Accordion, Image, Center } from '@chakra-ui/react'
import './Products.css'
import Treatment from './Components/Treatment/Treatment.js'
import { useData } from "../../providers/DataProvider";
import logo from "../../assets/images/AgroMarket.png";
import UserContext from "../../services/context/UserContext";
import { useParams } from "react-router";

const Products = () => {
  const { fileName } = useParams();
  const { GetToken, SetToken, ServiceRest } = useContext(UserContext)
  const { data, setData } = useData();
  const treatments = data.treatments;
  const [plantImage, setPlantImage] = useState("");
  const [treatmentsApi, setTreatmetsApi] = useState([]);
  const [problem, setProblem] = useState([]);

  useEffect(() => {
    setPlantImage(sessionStorage.getItem("plantImage"));
    ServiceRest("GET", `v1/recommendation/${fileName}`, "", (data) => {
      console.log(data)
      setTreatmetsApi(data);
    });

    ServiceRest("GET", `v1/recommendation/info/${fileName}`, "", (data) => {
      console.log(data)
      setProblem(data);
    });
  }, []);

  return (

    <div>
      <div class="frow">
        <div class="col col1">
          <Center>
            <Image src={logo} boxSize="40" fit="scale-down" />
          </Center>
          <CardPlant image={plantImage} name={problem.name} description={problem.description} />
        </div>
        <div class="col col2">
          <Box >
            <Accordion allowToggle >
              {treatmentsApi.map((t) => <Treatment id={t.id} name={t.name} products={t.products} />)}
            </Accordion>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Products
