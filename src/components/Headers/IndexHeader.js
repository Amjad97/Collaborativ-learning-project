/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container ,Button,Row,Col } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img>
            <h1 className="h1-seo">SHARE WITH ME.</h1>
            <h3>An organized communty to learn.</h3>
            <Container className = "text-center">
            <Row className ="justify-content-md-center sharing-area text-center" style = {{marginTop : '0px'}}>
            <Button className="btn-round" color="white" size = "lg" type="button" >
                Sign in
              </Button>
              <Button className="btn-round" color="success" size = "lg" type="button" >
                Register
              </Button>
          </Row>
          </Container>
          </div>
          
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
