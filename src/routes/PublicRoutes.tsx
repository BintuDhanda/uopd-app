import { Redirect, Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Register from "../screens/Register";
import RoleLogin from "../screens/RoleLogin";
import ForgotPassword from "../screens/ForgotPassword";
import ResetPassword from "../screens/ResetPassword";

const PublicRoutes = ({ onLogin }: { onLogin: () => void }) => (

  <IonRouterOutlet>

    <Route exact path="/">
      <Redirect to="/login" />
    </Route>

    <Route
      exact
      path="/login"
      render={() => <Login onLogin={onLogin} />}
    />

    <Route exact path="/signup" component={Signup} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/roleLogin" component={RoleLogin} />
    <Route exact path="/forgot-password" component={ForgotPassword} />
    <Route exact path="/reset-password" component={ResetPassword} />

    <Redirect to="/login" />

  </IonRouterOutlet>

);

export default PublicRoutes;
