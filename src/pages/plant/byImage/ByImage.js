import React from "react";
import Carousel from "react-elastic-carousel";
import { PlantItem } from "./PlantItem";
import "./css/ByImage.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export const ByImage = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <PlantItem>One</PlantItem>
          <PlantItem>Two</PlantItem>
          <PlantItem>Three</PlantItem>
          <PlantItem>Four</PlantItem>
          <PlantItem>Five</PlantItem>
          <PlantItem>Six</PlantItem>
          <PlantItem>Seven</PlantItem>
          <PlantItem>Eight</PlantItem>
        </Carousel>
      </div>
    </>
  );
}