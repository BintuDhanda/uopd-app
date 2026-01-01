import { IonPage, IonContent, IonText } from '@ionic/react';
import { useHeader } from '../hooks/useHeader';
import Header from '../components/common/Header';

const PatientBook: React.FC = () => {
  const header = useHeader({
    title: "My Lab Tests",
    subtitle: "View your lab test reports"
  });

  return (
    <IonPage>
      <Header title={header.title} subtitle={header.subtitle} />

      <IonContent fullscreen>
        <IonText>
          <h1>Patient Book</h1>
        </IonText>
      </IonContent>
    </IonPage>
  );
};
export default PatientBook;
