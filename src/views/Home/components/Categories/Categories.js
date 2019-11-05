import React from "react";
// reactstrap components
import { Button, Container, Row } from "reactstrap";

// core components

function Categories() {
  return (
    <>
      <div className="ml-auto mr-auto text-center" style={{ paddingTop: 30 }}>
        <h2 className="title">Categories</h2>
        <div className="section section-examples" data-background-color="white">
          <Container className="text-center">
            <Row>
              <div className="col">
                <a href="/category-page">
                  <img
                    alt="..."
                    className="img-raised"
                    src={require("assets/img/english2.png")}
                  ></img>
                  <Button
                    className="btn-round"
                    color="default"
                    outline
                    style={{ backgroundColor: "#2c2c2c", marginTop: 30 }}
                  >
                    Learn more
                  </Button>
                </a>
              </div>
              <div className="col">
                <a href="/category-page">
                  <img
                    alt="..."
                    className="img-raised"
                    src={require("assets/img/web.png")}
                  ></img>
                  <Button
                    className="btn-round"
                    color="default"
                    outline
                    style={{ backgroundColor: "#2c2c2c", marginTop: 30 }}
                  >
                    Learn more
                  </Button>
                </a>
              </div>
              <div className="col">
                <a href="/category-page">
                  <img
                    alt="..."
                    className="img-raised"
                    src={require("assets/img/mobile_development.jpg")}
                  ></img>
                  <Button
                    className="btn-round"
                    color="default"
                    outline
                    style={{ backgroundColor: "#2c2c2c", marginTop: 30 }}
                  >
                    Learn more
                  </Button>
                </a>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Categories;
