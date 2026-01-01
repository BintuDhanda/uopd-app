import { Route, Redirect } from "react-router-dom";
import { IonTabs, IonRouterOutlet } from "@ionic/react";

import HomeTab from "../tabs/HomeTab";
import MyAppointmentsTab from "../tabs/MyAppointmentsTab";
import HelpDeskTab from "../tabs/HelpDeskTab";
import SearchResultsScreen from "../screens/SearchResultsScreen";
import BottomTabs from "../components/BottomTabs";
import BookAppointment from "../screens/BookAppointment";
import Profile from "../screens/Profile";
import PatientBook from "../screens/PatientBook";
import ManageProfile from "../screens/ManageProfile";
import Appointments from "../screens/Appointments";
import LabTests from "../screens/LabTests";
import PaymentMethods from "../screens/PaymentMethods";

const PrivateRoutes = ({ onLogout }: { onLogout: () => void }) => (
  <IonTabs>

    <IonRouterOutlet>

      <Route exact path="/home" render={() => (
        <HomeTab onLogout={onLogout} />
      )} />

      <Route exact path="/appointments" component={MyAppointmentsTab} />

      <Route exact path="/book-appointment" component={BookAppointment} />

      <Route exact path="/helpdesk" component={HelpDeskTab} />

      <Route exact path="/search" component={SearchResultsScreen} />

      <Route exact path="/profile" component={Profile} />

      <Route exact path="/patient-book" component={PatientBook} />
        <Route exact path="/manage-profile" component={ManageProfile} />
        <Route exact path="/appointments" component={Appointments} />
        <Route exact path="/lab-tests" component={LabTests} />
        <Route exact path="/payment-methods" component={PaymentMethods} />


      {/* Default tab redirect */}
      {/* <Route exact path="/">
        <Redirect to="/home" />
      </Route> */}

    </IonRouterOutlet>

    <BottomTabs />

  </IonTabs>
);

export default PrivateRoutes;
