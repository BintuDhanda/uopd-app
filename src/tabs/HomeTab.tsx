import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';

const HomeTab: React.FC = () => {
  const history = useHistory();

  const goToSearch = () => {
    history.push('/search');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/* Search bar: clicking anywhere goes to SearchResultsScreen */}
        <IonSearchbar
          placeholder="Search doctors, hospitals..."
          onClick={goToSearch}
          onIonFocus={goToSearch}
        />

        <div style={{ padding: '20px', marginTop: '10px' }}>
          <h2>Welcome to HomeScreen</h2>
          <p>This is your home dashboard.</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomeTab;
