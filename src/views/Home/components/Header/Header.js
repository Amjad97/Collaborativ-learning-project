/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container ,Button,Row } from "reactstrap";

import histoty from '../../../../history';

function Header() {
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

  const toLoginPage = () => {
    histoty.push('/login-page')
  }

  const toSignupPage = () => {
    histoty.push('/signup-page')
  }

  return (
    <>
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg.jpeg") + ")"
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
            <Button className="btn-round" size = "lg" type="button" style ={{margin : '15px 10px 0px', backgroundColor:'#87B7CB', color: '#1B1E23' }} onClick={toLoginPage}>
                Sign in
              </Button>
              <Button className="btn-round" size = "lg" type="button" style ={{margin : '15px 10px 0px', backgroundColor:'#D6EBEC', color: '#1B1E23' }} onClick={toSignupPage}>
                Sign up
              </Button>
          </Row>
          </Container>
          </div>
          
        </Container>
      </div>
    </>
  );
}

export default Header;
