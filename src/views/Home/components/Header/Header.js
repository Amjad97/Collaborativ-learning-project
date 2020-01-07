import React from "react";
import CategorySlider from "./CategoriesSlider";

function Header({ categories }) {
  return (
    <div className="page-header" style={{ marginTop: 53 }}>
      <div
        className="page-header-image"
        style={{
          backgroundImage:
            "url(" + require("assets/img/categpries_bg.png") + ")"
        }}
      />
      <CategorySlider categories={categories} />
    </div>
  );
}

export default Header;
