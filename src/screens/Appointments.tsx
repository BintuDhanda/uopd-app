import { IonPage, IonContent, IonText } from "@ionic/react";
import Header from "../components/common/Header";
import { useHeader } from "../hooks/useHeader";

const Appointments: React.FC = () => {
  const header = useHeader({
    title: "My Appointments",
    subtitle: "Your scheduled consultations"
  });

  return (
    <IonPage>
      <Header title={header.title} subtitle={header.subtitle} />

      <IonContent fullscreen>
        <IonText>
          <h1>Appointments</h1>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Appointments;
