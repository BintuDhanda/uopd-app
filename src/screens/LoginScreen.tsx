import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonToast
} from "@ionic/react";

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [emailOrPhone, setEmailOrPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleLoginClick = () => {
    if (emailOrPhone.trim() === "" || password.trim() === "") {
      setShowToast(true);
      return;
    }
    onLogin();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" scrollY={true}>

        {/* Email or Phone */}
        <IonItem lines="full" className="ion-margin-bottom">
          <IonLabel position="floating">Email ID or Phone</IonLabel>
          <IonInput
            type="text"
            placeholder="Enter email or phone"
            value={emailOrPhone}
            onIonChange={(e) => setEmailOrPhone(e.detail.value || "")}
          />
        </IonItem>

        {/* Password */}
        <IonItem lines="full" className="ion-margin-bottom">
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            type="password"
            placeholder="Enter password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value || "")}
          />
        </IonItem>

        {/* Login Button */}
        <IonButton
          expand="block"
          className="ion-margin-top"
          onClick={handleLoginClick}
          color="primary"
        >
          Login
        </IonButton>

        <IonButton
          expand="block"
          fill="clear"
          routerLink="/signup"
          className="ion-margin-top"
        >
          Don't have an account? Sign Up
        </IonButton>

        {/* Toast for validation */}
        <IonToast
          isOpen={showToast}
          message="Please fill all fields"
          duration={1500}
          onDidDismiss={() => setShowToast(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
