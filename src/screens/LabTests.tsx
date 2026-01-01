import { IonPage, IonContent, IonText } from "@ionic/react";
import Header from "../components/common/Header";
import { useHeader } from "../hooks/useHeader";

const LabTests: React.FC = () => {
  const header = useHeader({
    title: "My Lab Tests",
    subtitle: "View your lab test reports"
  });

  return (
    <IonPage>
      <Header title={header.title} subtitle={header.subtitle} />

      <IonContent fullscreen>
        <IonText>
          <h1>Lab Tests</h1>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default LabTests;
