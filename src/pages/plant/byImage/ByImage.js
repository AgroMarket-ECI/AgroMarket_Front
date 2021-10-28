import React from "react";
import Carousel from "react-elastic-carousel";
import { PlantItem } from "./PlantItem";
import "./css/ByImage.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
];

const plants = [
  {
    imageUrl: "https://www.jardineriaon.com/wp-content/uploads/2014/10/Agalla_de_Salix_fragilis.jpg",
    imageAlt: "Salix fragilis",
    beds: 3,
    title: "Salix fragilis",
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    title: "Modern home in city center in the heart of historic Los Angeles",
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    title: "Modern home in city center in the heart of historic Los Angeles",
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    title: "Modern home in city center in the heart of historic Los Angeles",

  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    title: "Modern home in city center in the heart of historic Los Angeles",
  }
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
        </Carousel>
      </div>
    </>
  );
}