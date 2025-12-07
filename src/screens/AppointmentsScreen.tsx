import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';

const AppointmentsScreen: React.FC = () => {
  const appointments = [
    { id: 1, title: 'Dentist', date: '2025-12-10 10:00' },
    { id: 2, title: 'Eye Checkup', date: '2025-12-12 14:00' }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Appointments</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          {appointments.map(a => (
            <IonItem key={a.id} button>
              <IonLabel>
                <h3>{a.title}</h3>
                <p>{a.date}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

        <IonButton expand="block">Book Appointment</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AppointmentsScreen;
