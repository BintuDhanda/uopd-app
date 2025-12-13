import { Redirect, Route } from "react-router-dom";
import {
  IonTabs,
  IonRouterOutlet,
} from "@ionic/react";
import HomeTab from "../tabs/HomeTab";
import MyAppointmentsTab from "../tabs/MyAppointmentsTab";
import HelpDeskTab from "../tabs/HelpDeskTab";
import SearchResultsScreen from "../screens/SearchResultsScreen";
import BottomTabs from "../components/BottomTabs";

const PrivateRoutes = ({ onLogout }: { onLogout: () => void }) => (
  <IonTabs>
    <IonRouterOutlet>

     <Route exact path="/">
        <Redirect to="/home" />
      </Route>

      <Route exact path="/home">
        <HomeTab onLogout={onLogout} />
      </Route>

      <Route exact path="/appointments">
        <MyAppointmentsTab />
      </Route>

      <Route exact path="/helpdesk">
        <HelpDeskTab />
      </Route>

      <Route exact path="/search">
        <SearchResultsScreen />
      </Route>

    </IonRouterOutlet>

    <BottomTabs />
  </IonTabs>
);

export default PrivateRoutes;
