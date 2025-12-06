import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const HelpDeskTab: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color="primary">
            <IonTitle size="large">Helpdesk</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div style={{ padding: '20px', marginTop: '20px' }}>
          <h2>Helpdesk Support</h2>
          <p>Get help and support here.</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HelpDeskTab;
