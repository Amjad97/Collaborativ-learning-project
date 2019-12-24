import React from "react";
import CategorySlider from "./CategoriesSlider";

function Header() {
  return (
    <div className="page-header" style={{ marginTop: 55.5 }}>
      <div
        className="page-header-image"
        style={{
          backgroundImage:
            "url(" + require("assets/img/categpries_bg.png") + ")"
        }}
      />
      <CategorySlider />
    </div>
  );
}

export default Header;
