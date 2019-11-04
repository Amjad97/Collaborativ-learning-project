import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./style/style";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  InputGroup,
  Container,
  Col
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import history from "../../history";

// core components
import NavBar from "shared/components/Navbars/NavBar";
import Footer from "shared/components/Footer/Footer";

const useStyles = makeStyles(styles);

function ForgotPassPage(props) {
  const classes = useStyles(props);
  const [focus, setFocus] = React.useState(false);
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
                    <h2 style={{ margin: "10 0", width: "max-content" }}>
                      Forgot Password?
                    </h2>
                  </CardHeader>
                  <CardBody>
                    <AvForm>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (focus ? " input-group-focus" : "")
                        }
                      >
                        <AvField
                          errorMessage="Invalid email"
                          name="Email"
                          placeholder="Email"
                          type="email"
                          onFocus={() => setFocus(true)}
                          onBlur={() => setFocus(false)}
                        ></AvField>
                      </InputGroup>
                    </AvForm>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      Reset My Password
                    </Button>
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      onClick={e => {
                        e.preventDefault();
                        history.push("/login-page");
                      }}
                      size="lg"
                    >
                      Login
                    </Button>
                  </CardFooter>
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

export default ForgotPassPage;
