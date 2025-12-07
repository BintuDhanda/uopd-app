import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonBadge } from '@ionic/react';

const SalesPartnerScreen: React.FC = () => {
  const partners = [
    { id: 1, name: 'Partner A', active: 12 },
    { id: 2, name: 'Partner B', active: 7 }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sales Partners</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          {partners.map(p => (
            <IonItem key={p.id}>
              <IonLabel>
                <h3>{p.name}</h3>
                <p>Active leads: {p.active}</p>
              </IonLabel>
              <IonBadge>{p.active}</IonBadge>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SalesPartnerScreen;
