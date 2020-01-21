import React from "react";
import { InputGroup } from "reactstrap";
import { AvForm } from "availity-reactstrap-validation";
import { Card, CardContent, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Formsy from "formsy-react";
import { addValidationRule } from "formsy-react";

import Utils from "shared/utils/UtilFunctions";

import CustomButton from "shared/components/CustomButton/CustomButton";
import Input from "shared/components/Input/LoginInput";
import history from "../../../history";
import styles from "../style/style";

addValidationRule(
  "isValidConfirmPassword",
  (values, value) => values.password === value
);

const useStyles = makeStyles(styles);

function RegisterForm({ register }) {
  const [userName, setUserName] = React.useState(false);
  const [email, setEmail] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState(false);
  const [userNameFocus, setUserNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = React.useState(false);
  const [canSubmit, setCanSubmit] = React.useState(false);
  const [disableControls, setDisableControls] = React.useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    setDisableControls(true);

    register &&
      register({
        username: userName,
        email: email,
        password: password
      }).finally(() => {
        setDisableControls(false);
        Utils.addNotification(
          "Create Account",
          "Create account successfully",
          "success"
        );
      });
  };

  const classes = useStyles();

  return (
    <>
      <Card className={classes.SignUpForm}>
        <CardContent className={classes.CardContent}>
          <div className={classes.SignUpText}>Sign up</div>
          <Formsy
            onValidSubmit={handleSubmit}
            onValid={() => setCanSubmit(true)}
            onInvalid={() => setCanSubmit(false)}
          >
            <AvForm>
              <InputGroup
                className={
                  "no-border input-lg" +
                  (userNameFocus ? " input-group-focus" : "")
                }
              >
                <Input
                  name="userName"
                  placeholder="User Name"
                  type="text"
                  value={userName}
                  validations={{
                    matchRegexp: /^[a-zA-Z0-9@/./+/-/_]+$/
                  }}
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please enter an userName"
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9@/./+/-/_]+$/,
                      errorMessage:
                        "username contains only letters, numbers and special characters"
                    }
                  }}
                  onChange={e => setUserName(e.target.value)}
                  onFocus={() => setUserNameFocus(true)}
                  onBlur={() => setUserNameFocus(false)}
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
                isLoading={disableControls}
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
    </>
  );
}

export default RegisterForm;
