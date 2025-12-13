import {
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel
  } from "@ionic/react";
  import { home, desktop, help } from "ionicons/icons";
  
  const BottomTabs = () => {
    return (
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
  
        <IonTabButton tab="appointments" href="/appointments">
          <IonIcon icon={desktop} />
          <IonLabel>Appointments</IonLabel>
        </IonTabButton>
  
        <IonTabButton tab="helpdesk" href="/helpdesk">
          <IonIcon icon={help} />
          <IonLabel>Help</IonLabel>
        </IonTabButton>
      </IonTabBar>
    );
  };
  
  export default BottomTabs;
  