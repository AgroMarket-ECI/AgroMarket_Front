import React from "react";
import Carousel from "react-elastic-carousel";
import { PlantItem } from "./PlantItem";
import "./css/ByImage.css";

export const ByImage = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];

  const plants = [
    {
      imageUrl: "https://www.jardineriaon.com/wp-content/uploads/2014/10/Agalla_de_Salix_fragilis.jpg",
      imageAlt: "Agallas rojo",
      title: "Agallas rojas"
    },
    {
      imageUrl: "https://www.opia.cl/601/articles-81762_recurso_01.jpg",
      imageAlt: "Parásito la polilla del Álamo",
      title: "Parásito la polilla del Álamo"
    },
    {
      imageUrl: "https://www.arvensis.com/blog/wp-content/uploads/2020/04/Leaf-blight.jpg",
      imageAlt: "Tizón de la hoja",
      title: "Tizón de la hoja",
    },
    {
      imageUrl: "https://www.arvensis.com/blog/wp-content/uploads/2020/04/Late-blight-Tiz%C3%B3n-tard%C3%ADo-Mildiu-de-la-patata.jpg",
      imageAlt: "Tizón tardío o mildiu de la papa",
      title: "Tizón tardío o mildiu de la papa",
    }
  ];
  return (
    <div id="plantsimage">
      <div>
        <p className="titleImage">Selecciona la imagen de como luce tu planta</p>
      </div>
      <div>
        <div className="carosusel">
          <p className="plantName">Salix fragilis</p>
          <br />
            {plants.map((plant) => {
                return (
                  <PlantItem className="plantitems"
                    imageUrl={plant.imageUrl}
                    imageAlt={plant.imageAlt}
                    title={plant.title}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}