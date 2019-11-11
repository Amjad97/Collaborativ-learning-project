import React from "react";

// core components
import NavBar from "shared/components/Navbars/NavBar.js";
import CategoryPageHeader from "shared/components/Headers/CategoryPageHeader.js";
import Footer from "shared/components/Footer/Footer.js";
import Resources from "./components/Resources/Resources";
import Questions from "./components/Questions/Questions";

import history from "../../history";

function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  const image = history.location.image;
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <CategoryPageHeader background={image} />
        <Resources />
        <Questions />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
