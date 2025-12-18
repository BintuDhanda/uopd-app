import { Redirect, Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import Login from "../screens/Login";
import Register from "../screens/Register";
import RoleLogin from "../screens/RoleLogin";

const PublicRoutes = ({ onLogin }: { onLogin: () => void }) => (
  <IonRouterOutlet>

    <Route
      exact
      path="/"
      component={RoleLogin}
    />

    <Route
      exact
      path="/login"
      render={() => <Login onLogin={onLogin} />}
    />

    <Route
      exact
      path="/register"
      component={Register}
    />

    {/* Acts as a catch-all fallback
        Redirects any unknown route to / */}

    <Redirect to="/" />

  </IonRouterOutlet>
);

export default PublicRoutes;
