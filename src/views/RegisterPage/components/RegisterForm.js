import React from "react";
import { InputGroup } from "reactstrap";
import { AvForm } from "availity-reactstrap-validation";
import { Card, CardContent, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Formsy from "formsy-react";
import { addValidationRule } from "formsy-react";

import CustomButton from "shared/components/CustomButton/CustomButton";
import Input from "shared/components/Input/LoginInput";
import history from "../../../history";
import styles from "../style/style";

addValidationRule(
  "isValidConfirmPassword",
  (values, value) => values.password === value
);

const useStyles = makeStyles(styles);

function RegisterForm(props) {
  const [firstName, setFirstName] = React.useState(false);
  const [lastName, setLastName] = React.useState(false);
  const [email, setEmail] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState(false);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = React.useState(false);
  const [canSubmit, setCanSubmit] = React.useState(false);
  const [disableControls, setDisableControls] = React.useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    setDisableControls(true);
  };
  const classes = useStyles();

  return (
    <Card className={classes.SignUpForm}>
      <CardContent className={classes.CardContent}>
        <div className={classes.SignUpText}>Sign up</div>
        <Formsy
          onValidSubmit={handleSubmit}
          onValid={() => setCanSubmit(true)}
          onInvalid={() => setCanSubmit(false)}
        >
          <AvForm>
            <div
              style={{
                display: "inline-flex",
                width: "-webkit-fill-available"
              }}
            >
              <InputGroup
                className={
                  "no-border input-lg" +
                  (firstFocus ? " input-group-focus" : "")
                }
                style={{ width: "50%", marginRight: 5 }}
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
                  "no-border input-lg" + (lastFocus ? " input-group-focus" : "")
                }
                style={{ width: "50%", marginLeft: 5 }}
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
            </div>
            <InputGroup
              className={
                "no-border input-lg" + (emailFocus ? " input-group-focus" : "")
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
            <div
              style={{
                display: "inline-flex",
                width: "-webkit-fill-available"
              }}
            >
              <InputGroup
                className={
                  "no-border input-lg" +
                  (passwordFocus ? " input-group-focus" : "")
                }
                style={{ width: "50%", marginRight: 5 }}
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
                        "8 digits long 1 special character, 1 number and 1 capital letter"
                    }
                  }}
                  value={password}
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  required
                ></Input>
              </InputGroup>
              <InputGroup
                className={
                  "no-border input-lg" +
                  (confirmPasswordFocus ? " input-group-focus" : "")
                }
                style={{ width: "50%", marginLeft: 5 }}
              >
                <Input
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                  onChange={e => {
                    setConfirmPassword(e.target.value);
                  }}
                  validations="isValidConfirmPassword"
                  validationError="Passwords not match"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please confirm password"
                    }
                  }}
                  value={confirmPassword}
                  onFocus={() => setConfirmPasswordFocus(true)}
                  onBlur={() => setConfirmPasswordFocus(false)}
                  required
                ></Input>
              </InputGroup>
            </div>
          </AvForm>
          <div style={{ marginTop: 20 }}>
            <CustomButton
              disabled={!canSubmit}
              //isLoading={disableControls}
              onClick={handleSubmit}
            >
              Sign up
            </CustomButton>
          </div>
          <span className={classes.NewContent}>
            <Divider className={classes.divider} />
            <div className={classes.newText}>Already have an account?</div>
            <Divider className={classes.divider} />
          </span>
          <div style={{ marginTop: 10 }}>
            <CustomButton onClick={() => history.push("/login")}>
              Log in
            </CustomButton>
          </div>
        </Formsy>
      </CardContent>
    </Card>
  );
}

export default RegisterForm;
