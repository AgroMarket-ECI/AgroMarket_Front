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
      imageUrl: "https://4.bp.blogspot.com/--l4ak2gUh9Y/W4opGWHYMpI/AAAAAAAAGZM/Pwh8vDEdR9Y3k5mjSBCt5TzvKLI65uZ1wCLcBGAs/s1600/800px-Eriophyes_tilae_tilae_detail.JPG",
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
      imageUrl: "https://miro.medium.com/max/5120/1*XQm8ydsK4eL7BzBrfGYdrg.jpeg",
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