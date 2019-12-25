import React from "react";
import { inject, observer } from "mobx-react";
import CategoryItem from "./CategoryItem";
import { Slide } from "react-slideshow-image";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

function CategorySlider({ categories }) {
  return (
    <div className="page-header-image" style={{ zIndex: 1 }}>
      <div className="slide-container">
        <Slide {...properties} style={{ margin: 20 }}>
          {categories.map(category => (
            <div className="each-slide" style={{ height: 450 }}>
              <CategoryItem
                categoryTitle={category.name}
                categoryDetails={category.description}
              />
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default inject("store")(observer(CategorySlider));
