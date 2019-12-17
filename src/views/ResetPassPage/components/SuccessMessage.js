import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../style/style";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Container,
  Col
} from "reactstrap";

import history from "../../../history";

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
                      history.push("/login");
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

export default SuccessMessage;