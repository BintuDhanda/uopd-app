import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { desktop, help, home } from 'ionicons/icons';
import HomeTab from './tabs/HomeTab';
import MyAppointmentsTab from './tabs/MyAppointmentsTab';
import HelpDeskTab from './tabs/HelpDeskTab';
import SearchResultsScreen from './screens/SearchResultsScreen';

import Login from "./screens/LoginScreen";
import Signup from "./screens/Signup"; // <- added signup import (make sure path is correct)

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme palettes */
import '@ionic/react/css/palettes/dark.system.css';
/* Theme variables */
import './theme/variables.css';

setupIonicReact();

type ScreenName = "login" | "tabs" | "profile";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    // Initialize from localStorage immediately
    const storedUser = localStorage.getItem("user");
    console.log("Initial auth check - stored user:", storedUser);
    return !!storedUser;
  });

  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify({ name: "Balwant" }));
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  // Optional PrivateRoute pattern (react-router-dom v5). Keep if you want guarded routes later.
  // const PrivateRoute: React.FC<any> = ({ children, ...rest }) => (
  //   <Route
  //     {...rest}
  //     render={() => (isLoggedIn ? children : <Redirect to="/login" />)}
  //   />
  // );

  return (
    <IonApp>
      <IonReactRouter>
        {isLoggedIn ? (
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/home">
                <HomeTab />
              </Route>

              <Route exact path="/appointments">
                <MyAppointmentsTab />
              </Route>

              <Route exact path="/search">
                <SearchResultsScreen />
              </Route>

              <Route path="/helpdesk">
                <HelpDeskTab />
              </Route>

              {/* If user is logged in and hits root, send them to /home */}
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>

              {/* catch-all while logged in (optional) */}
              <Route path="*">
                <Redirect to="/home" />
              </Route>
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon aria-hidden="true" icon={home} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="appointments" href="/appointments">
                <IonIcon aria-hidden="true" icon={desktop} />
                <IonLabel>Appointments</IonLabel>
              </IonTabButton>
              <IonTabButton tab="helpdesk" href="/helpdesk">
                <IonIcon aria-hidden="true" icon={help} />
                <IonLabel>Helpdesk</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        ) : (
          <>
            <IonRouterOutlet>
              {/* Login & Signup accessible when NOT logged in */}
              <Route exact path="/login">
                <Login onLogin={handleLogin} />
              </Route>

              <Route exact path="/signup">
                <Signup onSignup={handleLogin} />
              </Route>

              {/* Root redirects to login for unauthenticated users */}
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
              
            </IonRouterOutlet>
          </>
        )}
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
