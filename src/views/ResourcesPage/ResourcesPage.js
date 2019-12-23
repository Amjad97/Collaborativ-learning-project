import React from "react";
import { inject, observer } from "mobx-react";
import ResourcesLayout from "./components/ResourcesLayout";
import NavBar from "../../shared/components/Navbars/NavBar";

// shared components
import Footer from "shared/components/Footer/Footer.js";

function ResourcesPage() {
  return (
    <>
      <NavBar />
      <ResourcesLayout />
      <Footer color="#4174FF" />
    </>
  );
}

export default inject("store")(observer(ResourcesPage));
