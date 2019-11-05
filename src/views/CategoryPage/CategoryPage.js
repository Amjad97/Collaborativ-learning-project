import React from "react";

// core components
import NavBar from "shared/components/Navbars/NavBar.js";
import CategoryPageHeader from "shared/components/Headers/CategoryPageHeader.js";
import Footer from "shared/components/Footer/Footer.js";
import Resources from "./components/Resources/Resources";
import Questions from "./components/Questions/Questions";

function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <CategoryPageHeader />
        <Resources />
        <Questions />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
