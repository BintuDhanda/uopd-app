// src/pages/Login.tsx
import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonToast,
  IonText
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

      <IonContent className="ion-padding" fullscreen>
        <IonGrid>
          <IonRow className="ion-justify-content-center ion-align-items-center" style={{ minHeight: "60vh" }}>
            <IonCol size="12" sizeMd="6" sizeLg="4">
              <IonCard>
                <IonCardContent>
                  <IonText>
                    <h2 style={{ marginTop: 0, marginBottom: 8 }}>Welcome back</h2>
                    <p style={{ marginTop: 0, marginBottom: 12, color: "var(--ion-color-medium)" }}>
                      Sign in to continue
                    </p>
                  </IonText>

                  <IonItem lines="full" className="ion-margin-bottom">
                    <IonLabel position="stacked">Email ID or Phone</IonLabel>
                    <IonInput
                      type="text"
                      value={emailOrPhone}
                      placeholder="example@mail.com or +91-XXXXXXXXXX"
                      onIonChange={(e) => setEmailOrPhone(e.detail.value ?? "")}
                      clearInput
                      inputmode="email"
                    />
                  </IonItem>

                  <IonItem lines="full" className="ion-margin-bottom">
                    <IonLabel position="stacked">Password</IonLabel>
                    <IonInput
                      type="password"
                      value={password}
                      placeholder="Enter password"
                      onIonChange={(e) => setPassword(e.detail.value ?? "")}
                      clearInput
                    />
                  </IonItem>

                  <IonButton expand="block" color="primary" onClick={handleLoginClick}>
                    Login
                  </IonButton>

                  <IonButton expand="block" fill="clear" routerLink="/signup" className="ion-margin-top">
                    Don't have an account? Sign Up
                  </IonButton>
                </IonCardContent>
              </IonCard>

              <div style={{ textAlign: "center", marginTop: 8 }}>
                <IonText color="medium">
                  <small>By continuing you agree to our Terms & Privacy</small>
                </IonText>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

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
