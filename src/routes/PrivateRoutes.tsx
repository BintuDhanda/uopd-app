import { Route, Redirect } from "react-router-dom";
import { IonTabs, IonRouterOutlet } from "@ionic/react";

import HomeTab from "../tabs/HomeTab";
import MyAppointmentsTab from "../tabs/MyAppointmentsTab";
import HelpDeskTab from "../tabs/HelpDeskTab";
import SearchResultsScreen from "../screens/SearchResultsScreen";
import BottomTabs from "../components/BottomTabs";

const PrivateRoutes = ({ onLogout }: { onLogout: () => void }) => (
  <IonTabs>

    <IonRouterOutlet>

      <Route exact path="/home" render={() => (
        <HomeTab onLogout={onLogout} />
      )} />

      <Route exact path="/appointments" component={MyAppointmentsTab} />

      <Route exact path="/helpdesk" component={HelpDeskTab} />

      <Route exact path="/search" component={SearchResultsScreen} />

      {/* Default tab redirect */}
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>

    </IonRouterOutlet>

    <BottomTabs />

  </IonTabs>
);

export default PrivateRoutes;
