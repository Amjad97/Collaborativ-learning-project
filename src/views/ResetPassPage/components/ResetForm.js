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

import CustomButton from "shared/components/CustomButton/CustomButton";
import Input from "shared/components/Input/Input";

const useStyles = makeStyles(styles);

function ResetForm({ handleSubmit, disableControls }) {
  const classes = useStyles();
  const [password, setPassword] = React.useState("");
  const [canSubmit, setCanSubmit] = React.useState(false);
  const [focus, setFocus] = React.useState(false);

  return (
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

export default ResetForm;
