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

import history from "../../history";

// core components
import NavBar from "shared/components/Navbars/NavBar";
import Footer from "shared/components/Footer/Footer";

import CustomButton from "shared/components/CustomButton/CustomButton";
import Input from "shared/components/Input/Input";

const useStyles = makeStyles(styles);

const SuccessMessage = ({ handleClick = () => {} }) => {
  const classes = useStyles();
  return (
    <>
      <div className="content">
        <Container className={classes.container}>
          <Col className="ml-auto mr-auto" md="4">
            <Card className="card-login card-plain">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                  <h2 style={{ margin: "10 0" }}>New Password</h2>
                </CardHeader>
                <CardBody>
                  <h3 style={{ color: "green", fontSize: 12 }}>
                    Password has successfully been changed.
                  </h3>
                </CardBody>
                <CardFooter className="text-center">
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
                    Go To Login
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Col>
        </Container>
      </div>
    </>
  );
};

function ResetPassPage(props) {
  const classes = useStyles(props);
  const [password, setPassword] = React.useState("");
  const [canSubmit, setCanSubmit] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [resetSuccess, setRestSuccess] = React.useState(false);
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
    //setDisableControls(true);
    setRestSuccess(true);
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
        {!resetSuccess ? (
          <div className="content">
            <Container className={classes.container}>
              <Col className="ml-auto mr-auto" md="4">
                <Card className="card-login card-plain">
                  <Form action="" className="form" method="">
                    <CardHeader className="text-center">
                      <h2 style={{ margin: "10 0" }}>New Password</h2>
                    </CardHeader>
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
                              (focus ? " input-group-focus" : "")
                            }
                          >
                            <Input
                              name="password"
                              placeholder="New password"
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
                              onFocus={() => setFocus(true)}
                              onBlur={() => setFocus(false)}
                              required
                            ></Input>
                          </InputGroup>
                          <CustomButton
                            disabled={!canSubmit}
                            isLoading={disableControls}
                            onClick={handleSubmit}
                          >
                            Reset My Password
                          </CustomButton>
                        </AvForm>
                      </Formsy>
                    </CardBody>
                  </Form>
                </Card>
              </Col>
            </Container>
          </div>
        ) : (
          <SuccessMessage
            handleClick={() => {
              history.push("/login");
            }}
          />
        )}
        <Footer color="transpernt" />
      </div>
    </>
  );
}

export default ResetPassPage;
