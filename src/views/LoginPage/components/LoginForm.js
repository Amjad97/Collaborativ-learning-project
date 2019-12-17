import React from "react";
import { AvForm } from "availity-reactstrap-validation";
// reactstrap components
import { InputGroup } from "reactstrap";
import Formsy from "formsy-react";

import Input from "shared/components/Input/Input";
import CustomButton from "shared/components/CustomButton/CustomButton";

import history from "../../../history";

function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [canSubmit, setCanSubmit] = React.useState(false);
  const [disableControls, setDisableControls] = React.useState(false);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    setDisableControls(true);
  };

  return (
    <Formsy
      onValidSubmit={handleSubmit}
      onValid={() => setCanSubmit(true)}
      onInvalid={() => setCanSubmit(false)}
    >
      <AvForm>
        <InputGroup
          className={
            "no-border input-lg" + (firstFocus ? " input-group-focus" : "")
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
            onFocus={() => setFirstFocus(true)}
            onBlur={() => setFirstFocus(false)}
            required
          ></Input>
        </InputGroup>
        <InputGroup
          className={
            "no-border input-lg" + (lastFocus ? " input-group-focus" : "")
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
            onFocus={() => setLastFocus(true)}
            onBlur={() => setLastFocus(false)}
            required
          ></Input>
        </InputGroup>
      </AvForm>
      <div style={{ marginTop: 20 }}>
        <CustomButton
          disabled={!canSubmit}
          isLoading={disableControls}
          onClick={handleSubmit}
        >
          Log in
        </CustomButton>
        <div style={{ marginTop: 10 }}>
          <div className="pull-left">
            <a
              style={{ fontSize: "medium" }}
              className="link"
              href="/signup"
              onClick={e => {
                e.preventDefault();
                history.push("/signup");
              }}
            >
              Create Account
            </a>
          </div>
          <div className="pull-right">
            <a
              style={{ fontSize: "medium" }}
              className="link"
              href="/forgot-password"
              onClick={e => {
                e.preventDefault();
                history.push("/forgot-password");
              }}
            >
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </Formsy>
  );
}

export default LoginForm;
