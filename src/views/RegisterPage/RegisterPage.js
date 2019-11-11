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
  Input,
  InputGroup,
  Container,
  Col
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

// core components
import NavBar from "shared/components/Navbars/NavBar";
import Footer from "shared/components/Footer/Footer";
import history from "../../history";

const useStyles = makeStyles(styles);

function SignUp(props) {
  const classes = useStyles(props);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
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
                  <div className={classes.socialAuth}>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                  </div>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <Input
                        placeholder="First Name"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <Input
                        placeholder="Last Name"
                        type="text"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                    <AvForm>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (emailFocus ? " input-group-focus" : "")
                        }
                      >
                        <AvField
                          errorMessage="Invalid email"
                          name="Email"
                          placeholder="Email"
                          type="email"
                          validate={{
                            required: {
                              value: true,
                              errorMessage: "Please enter an email"
                            }
                          }}
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                        ></AvField>
                      </InputGroup>
                    </AvForm>
                    <AvForm>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (passwordFocus ? " input-group-focus" : "")
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
                          onFocus={() => setPasswordFocus(true)}
                          onBlur={() => setPasswordFocus(false)}
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
                      Sign up
                    </Button>
                    <div className="pull-center">
                      Aleady have an account?{" "}
                      <span>
                        <a
                          style={{ fontSize: "medium" }}
                          className="link"
                          href="/login-page"
                          onClick={e => {
                            e.preventDefault();
                            history.push("/login-page");
                          }}
                        >
                          Login
                        </a>
                      </span>
                    </div>
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

export default SignUp;
