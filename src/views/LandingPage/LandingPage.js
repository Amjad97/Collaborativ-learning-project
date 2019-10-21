import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import NavBar from "shared/components/Navbars/NavBar.js";
import LandingPageHeader from "shared/components/Headers/LandingPageHeader.js";
import Footer from "shared/components/Footer/Footer.js";
import Categories from "../Home/components/Categories/Categories";
import Questions from "./components/Questions/Questions";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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
        <LandingPageHeader />
        <Categories />
        <Questions />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
