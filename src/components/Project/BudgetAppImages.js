import React from "react";
import ImageGallery from "react-image-gallery";

const BudgetAppImages = ({ images }) => {
  const image = images.map((image) => {
    return {
      original: image.img,
      thumbnail: image.img,
      description: image.description,
    };
  });

  return <ImageGallery items={image} />;
};

export default BudgetAppImages;
