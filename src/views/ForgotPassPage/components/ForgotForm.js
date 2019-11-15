import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../style/style";

// reactstrap components
import {
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
import CustomButton from "shared/components/CustomButton/CustomButton";
import Input from "shared/components/Input/Input";

const useStyles = makeStyles(styles);

function ForgotForm() {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [canSubmit, setCanSubmit] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [resetSuccess, setRestSuccess] = React.useState(false);
  const [disableControls, setDisableControls] = React.useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    setRestSuccess(true);
  };

  return (
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
                        name="Email"
                        placeholder="Email"
                        type="email"
                        validations="isEmail"
                        onChange={e => {
                          setEmail(e.target.value);
                          setRestSuccess(false);
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
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        required
                      ></Input>
                      <div className="h-48">
                        {resetSuccess && (
                          <p style={{ color: "green", fontSize: 12 }}>
                            A reset password email has been sent to ‘{email}’
                          </p>
                        )}
                      </div>
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
                  Reset My Password
                </CustomButton>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Container>
    </div>
  );
}

export default ForgotForm;
