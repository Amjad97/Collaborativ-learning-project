import React from "react";

// reactstrap components
import { Container, Row, Col,Button } from "reactstrap";

// core components

function About() {
  return (
    <>
    <div className = "Wrapper">
      <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice extent in the Pacific and a late drop in ice extent
                  in the Barents Sea.
                </h5>
              </Col>
            </Row>
        
        </Container>
        </div>
        </div>  
    </>
  );
}

export default About;
