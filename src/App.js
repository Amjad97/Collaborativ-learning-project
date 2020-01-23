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
import SignUpPage from "views/RegisterPage/RegisterPage";
import QuestionPage from "views/QuestionPage/QuestionPage";
import QuestionsPage from "views/QuestionsPage/QuestionsPage";
import ResourcesPage from "views/ResourcesPage/ResourcesPage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import SettingPage from "views/SettingPage/SettingPage";
import history from "./history";
import store from "./shared/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/home" render={props => <Home {...props} />} />
          <Route
            path="/questions/:id"
            render={props => <QuestionsPage {...props} />}
          />
          <Route
            path="/resources/:id"
            render={props => <ResourcesPage {...props} />}
          />
          <Route
            path="/question/:id"
            render={props => <QuestionPage {...props} />}
          />
          <Route
            path="/profile"
            render={props => <ProfilePage {...props} />}
            exact
          />
          <Route
            path="/profile/:id"
            render={props => <ProfilePage {...props} />}
            exact
          />
          <Route
            path="/settings"
            render={props => <SettingPage {...props} />}
            exact={true}
          />
          <Route path="/login" render={props => <LoginPage {...props} />} />
          <Route path="/signup" render={props => <SignUpPage {...props} />} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </Provider>
  );
}
