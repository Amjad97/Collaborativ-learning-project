import React from "react";
import { Provider } from "mobx-react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Home from "views/Home/Home";
import LoginPage from "views/LoginPage/LoginPage";
import LandingPage from "views/LandingPage/LandingPage";
import QuestionPage from "views/QuestionPage/QuestionPage";
import QuestionsPage from "views/QuestionsPage/QuestionsPage";
import ResourcesPage from "views/ResourcesPage/ResourcesPage";
import ForgotPassPage from "views/ForgotPassPage/ForgotPassPage";
import ResetPassPage from "views/ResetPassPage/ResetPassPage";
import SignUpPage from "views/RegisterPage/RegisterPage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import history from "./history";
import store from "./shared/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/home" render={props => <Home {...props} />} />
          <Route path="/landing" render={props => <LandingPage {...props} />} />
          <Route
            path="/questions"
            render={props => <QuestionsPage {...props} />}
          />
          <Route
            path="/resources/:id"
            render={props => <ResourcesPage {...props} />}
          />
          <Route
            path="/question"
            render={props => <QuestionPage {...props} />}
          />
          <Route
            path="/profile/:id"
            render={props => <ProfilePage {...props} />}
          />
          <Route path="/login" render={props => <LoginPage {...props} />} />
          <Route
            path="/forgot-password"
            render={props => <ForgotPassPage {...props} />}
          />
          <Route
            path="/reset-password"
            render={props => <ResetPassPage {...props} />}
          />
          <Route path="/signup" render={props => <SignUpPage {...props} />} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </Provider>
  );
}
