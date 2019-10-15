import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";

// core components

function Examples() {
  return (
    <>
    <div className = "ml-auto mr-auto text-center" style = {{paddingTop:30}}>
      <h2 className="title">Categories</h2>
      <div className="section section-examples" data-background-color="white">
        <Container className="text-center">
          <Row>
            <div className="col">
              <a href="examples/landing-page.html" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/landing.jpg")}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="white"
                to="/landing-page"
                outline
                tag={Link}
                style={{backgroundColor:"#2c2c2c"}}
              >
                Learn more
              </Button>
            </div>
            <div className="col">
              <a href="examples/profile-page.html" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/profile.jpg")}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                to="/profile-page"
                outline
                tag={Link}
                style={{backgroundColor:"#2c2c2c"}}
              >
                Learn more
              </Button>
            </div>
            <div className="col">
              <a href="examples/landing-page.html" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/landing.jpg")}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                to="/landing-page"
                outline
                tag={Link}
                style={{backgroundColor:"#2c2c2c"}}
              >
                Learn more
              </Button>
            </div>
          </Row>
        </Container>
      </div>
      </div>
    </>
  );
}

export default Examples;
