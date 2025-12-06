import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const HomeTab: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color="primary">
            <IonTitle size="large">HomeScreen</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div style={{ padding: '20px', marginTop: '20px' }}>
          <h2>Welcome to HomeScreen</h2>
          <p>This is your home dashboard.</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomeTab;
