import { Redirect, Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import Login from "../screens/LoginScreen";
import Signup from "../screens/Signup";
import HomeTab from "../tabs/HomeTab";
import Register from "../screens/Register";

const PublicRoutes = ({ onLogin }: { onLogin: () => void }) => (
  <IonRouterOutlet>
    <Route exact path="/login">
      <Login onLogin={onLogin} />
    </Route>

    <Route exact path="/register">
      <Register/>
    </Route>

    <Route exact path="/signup">
      <Signup onSignup={onLogin} />
    </Route>

    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
  </IonRouterOutlet>
);

export default PublicRoutes;
