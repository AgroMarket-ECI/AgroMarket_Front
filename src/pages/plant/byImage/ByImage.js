import React from "react";
import Carousel from "react-elastic-carousel";
import { PlantItem } from "./PlantItem";
import "./css/ByImage.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
];

export const ByImage = () => {
  return (
    <>
      <div className="titleImage">
        <p>Selecciona la imagen de como luce tu planta</p>
      </div>
      <div className="carosusel">
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