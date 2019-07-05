import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { appModal, ModalsRegistry } from "./common/react/modals/modals";
import { loginModal } from "./common/react/modals/login/login";
import { userInfo } from "./common/states/user-info";
import MainPage from "./pages/MainPage/MainPage";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

class App extends Component {
  render() {
    return (
      <div>
        <ModalsRegistry />
        <Switch>
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/" exact component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
