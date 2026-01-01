import { IonPage, IonContent, IonText } from "@ionic/react";
import Header from "../components/common/Header";
import { useHeader } from "../hooks/useHeader";

const PaymentMethods: React.FC = () => {
  const header = useHeader({
    title: "Payment Methods",
    subtitle: "Manage your payment options"
  });

  return (
    <IonPage>
      <Header title={header.title} subtitle={header.subtitle} />

      <IonContent fullscreen>
        <IonText>
          <h1>Payment Methods</h1>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default PaymentMethods;
