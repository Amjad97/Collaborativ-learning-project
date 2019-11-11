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

function ResetPassPage(props) {
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
                    <h2 style={{ margin: "10 0" }}>
                      New Password
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
                          name="password"
                          placeholder="Password"
                          type="password"
                          validate={{
                            required: {
                              value: true,
                              errorMessage: "Please enter a password"
                            },
                            // Regex for a password that is 8 digits long, with at least 1 number, 1 capital letter and /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
                            pattern: {
                              value:
                                "/^.*(?=.{8,})((?=.*[!@#$%^&*()-_=+{};:,<.>]){1})(?=.*d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/",
                              errorMessage:
                                "Password 8 digits long at least and contains at least 1 special character, one number and one capital letter"
                            }
                          }}
                          validationErrors={{
                            matchRegexp:
                              "Password 8 digits long at least and contains at least 1 special character, one number and one capital letter"
                          }}
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

export default ResetPassPage;
