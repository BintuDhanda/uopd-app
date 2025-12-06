import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const MyAppointmentsTab: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color="primary">
            <IonTitle size="large">MyAppointments</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div style={{ padding: '20px', marginTop: '20px' }}>
          <h2>My Appointments</h2>
          <p>View and manage your appointments here.</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MyAppointmentsTab;
