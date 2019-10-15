import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Typography() {
  return (
    <>
      <div className="section">
        <Container>
          <h3 className="title">Typography</h3>
          <div id="typography">
            <Row>
              <Col md="12">
                <div className="typography-line">
                  <h5>
                    <span>Header 5</span>
                    The Life of Now UI Kit
                  </h5>
                </div>
                <div className="typography-line">
                  <h6>
                    <span>Header 6</span>
                    The Life of Now UI Kit
                  </h6>
                </div>
                <div className="typography-line">
                  <p>
                    <span>Paragraph</span>I will be the leader of a company that
                    ends up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus. I think
                    that’s a responsibility that I have, to push possibilities,
                    to show people, this is the level that things could be at.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="space-50"></div>
          <div id="images">
            <h4>Images</h4>
            <Row>
              <Col sm="2">
                <p className="category">Image</p>
                <img
                  alt="..."
                  className="rounded"
                  src={require("assets/img/julie.jpg")}
                ></img>
              </Col>
              <Col sm="2">
                <p className="category">Circle Image</p>
                <img
                  alt="..."
                  className="rounded-circle"
                  src={require("assets/img/julie.jpg")}
                ></img>
              </Col>
              <Col sm="2">
                <p className="category">Raised</p>
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/julie.jpg")}
                ></img>
              </Col>
              <Col sm="2">
                <p className="category">Circle Raised</p>
                <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/julie.jpg")}
                ></img>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Typography;
