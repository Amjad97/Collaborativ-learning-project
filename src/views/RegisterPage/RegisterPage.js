import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./style/style";

// reactstrap components
import { Card, CardHeader, CardBody, Form, Container, Col } from "reactstrap";

// core components
import NavBar from "shared/components/Navbars/NavBar";
import Footer from "shared/components/Footer/Footer";

import RegisterForm from "./components/RegisterForm";
import SocialAuth from "./components/SocialAuth";

const useStyles = makeStyles(styles);

function SignUp(props) {
  const classes = useStyles(props);

  React.useEffect(() => {
    document.body.classList.add("login-page");
    return function cleanup() {
      document.body.classList.remove("login-page");
    };
  });

  return (
    <>
      <NavBar />
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg.jpeg") + ")"
          }}
        ></div>
        <div className="content">
          <Container className={classes.container}>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <h2 style={{ marginBottom: 10 }}>SIGNUP</h2>
                  </CardHeader>
                  <SocialAuth />
                  <CardBody>
                    <RegisterForm />
                  </CardBody>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <Footer color="transpernt" />
      </div>
    </>
  );
}

export default SignUp;
