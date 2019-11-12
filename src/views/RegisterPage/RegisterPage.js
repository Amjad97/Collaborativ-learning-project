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
import { AvForm } from "availity-reactstrap-validation";
import Formsy from "formsy-react";

// core components
import NavBar from "shared/components/Navbars/NavBar";
import Footer from "shared/components/Footer/Footer";
import history from "../../history";

import CustomButton from "shared/components/CustomButton/CustomButton";
import Input from "shared/components/Input/Input";

const useStyles = makeStyles(styles);

function SignUp(props) {
  const classes = useStyles(props);
  const [firstName, setFirstName] = React.useState(false);
  const [lastName, setLastName] = React.useState(false);
  const [email, setEmail] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [canSubmit, setCanSubmit] = React.useState(false);
  const [disableControls, setDisableControls] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add("login-page");
    return function cleanup() {
      document.body.classList.remove("login-page");
    };
  });

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    setDisableControls(true);
  };

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
                    <Formsy
                      onValidSubmit={handleSubmit}
                      onValid={() => setCanSubmit(true)}
                      onInvalid={() => setCanSubmit(false)}
                    >
                      <AvForm>
                        <InputGroup
                          className={
                            "no-border input-lg" +
                            (firstFocus ? " input-group-focus" : "")
                          }
                        >
                          <Input
                            name="firstName"
                            placeholder="First Name"
                            type="text"
                            value={firstName}
                            validations="isExisty"
                            validate={{
                              required: {
                                value: true,
                                errorMessage: "This field is required"
                              }
                            }}
                            onChange={e => setFirstName(e.target.value)}
                            onFocus={() => setFirstFocus(true)}
                            onBlur={() => setFirstFocus(false)}
                            required
                          ></Input>
                        </InputGroup>
                        <InputGroup
                          className={
                            "no-border input-lg" +
                            (lastFocus ? " input-group-focus" : "")
                          }
                        >
                          <Input
                            name="lastName"
                            placeholder="Last Name"
                            type="text"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            validations="isExisty"
                            validate={{
                              required: {
                                value: true,
                                errorMessage: "This field is required"
                              }
                            }}
                            onFocus={() => setLastFocus(true)}
                            onBlur={() => setLastFocus(false)}
                            required
                          ></Input>
                        </InputGroup>
                        <InputGroup
                          className={
                            "no-border input-lg" +
                            (emailFocus ? " input-group-focus" : "")
                          }
                        >
                          <Input
                            name="Email"
                            placeholder="Email"
                            type="email"
                            validations="isEmail"
                            onChange={e => {
                              setEmail(e.target.value);
                            }}
                            validate={{
                              required: {
                                value: true,
                                errorMessage: "Please enter an email"
                              },
                              //
                              pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                                errorMessage: "Invalid email"
                              }
                            }}
                            value={email}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            required
                          ></Input>
                        </InputGroup>
                        <InputGroup
                          className={
                            "no-border input-lg" +
                            (passwordFocus ? " input-group-focus" : "")
                          }
                        >
                          <Input
                            name="password"
                            placeholder="Password"
                            type="password"
                            onChange={e => {
                              setPassword(e.target.value);
                            }}
                            validations={{
                              // Regex for a password that is 8 digits long, with at least 1 number, 1 capital letter and /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
                              matchRegexp: /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
                            }}
                            validate={{
                              required: {
                                value: true,
                                errorMessage: "Please enter a password"
                              },
                              // Regex for a password that is 8 digits long, with at least 1 number, 1 capital letter and /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
                              pattern: {
                                value: /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                                errorMessage:
                                  "Password 8 digits long at least and contains at least 1 special character, one number and one capital letter"
                              }
                            }}
                            value={password}
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                            required
                          ></Input>
                        </InputGroup>
                      </AvForm>
                    </Formsy>
                  </CardBody>
                  <CardFooter className="text-center">
                    <CustomButton
                      disabled={!canSubmit}
                      isLoading={disableControls}
                      onClick={handleSubmit}
                    >
                      Sign up
                    </CustomButton>
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
