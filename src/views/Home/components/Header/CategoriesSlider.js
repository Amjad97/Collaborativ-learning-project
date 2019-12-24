import React from "react";
import CategoryItem from "./CategoryItem";
import { Slide } from "react-slideshow-image";

const slideComponent = [
  <CategoryItem
    categoryTitle="Programming"
    categoryDetails="Learn programming websites and applications in an easy way. Excellent
  training courses, with specialized trainers."
  />,
  <CategoryItem
    categoryTitle="English Learning"
    categoryDetails="English is such an awesome language is that it is the second most widely 
    spoken language in the world, and by far the most learnt language."
  />,
  <CategoryItem
    categoryTitle="Marketing"
    categoryDetails="Marketing is the activity, set of institutions, and processes for creating, 
    communicating, delivering, and exchanging offerings that have value for customers, clients, partners, and society at large."
  />,
  <CategoryItem
    categoryTitle="Design"
    categoryDetails="Plan or specification for the construction of an object or system or for the implementation 
    of an activity or process, or the result of that plan or specification in the form of a prototype, product or process."
  />
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

function CategorySlider() {
  return (
    <div className="page-header-image" style={{ zIndex: 1 }}>
      <div className="slide-container">
        <Slide {...properties} style={{ margin: 20 }}>
          <div className="each-slide" style={{ height: 450 }}>
            <div>{slideComponent[0]}</div>
          </div>
          <div className="each-slide">
            <div>{slideComponent[1]}</div>
          </div>
          <div className="each-slide">
            <div>{slideComponent[2]}</div>
          </div>
          <div className="each-slide">
            <div>{slideComponent[3]}</div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default CategorySlider;
