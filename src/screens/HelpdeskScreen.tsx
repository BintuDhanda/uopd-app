import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';

const HelpdeskScreen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Helpdesk</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <p>If you need help, contact support.</p>

        <IonList>
          <IonItem>
            <IonLabel>
              <h3>Email</h3>
              <p>support@example.com</p>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>
              <h3>Phone</h3>
              <p>+91-XXXXXXXXXX</p>
            </IonLabel>
          </IonItem>
        </IonList>

        <IonButton expand="block" href="mailto:support@example.com">Email Support</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default HelpdeskScreen;
