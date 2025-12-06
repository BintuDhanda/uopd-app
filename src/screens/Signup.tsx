// src/screens/Signup.tsx
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

interface SignupProps {
  onSignup: () => void;
}

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
  const [fullName, setFullName] = useState<string>("");
  const [emailOrPhone, setEmailOrPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleSignupClick = () => {
    if (
      fullName.trim() === "" ||
      emailOrPhone.trim() === "" ||
      password.trim() === ""
    ) {
      setShowToast(true);
      return;
    }

    // call parent handler (navigate or save user)
    onSignup();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" scrollY={true}>
        <IonItem lines="full" className="ion-margin-bottom">
          <IonLabel position="floating">Full Name</IonLabel>
          <IonInput
            type="text"
            placeholder="Enter full name"
            value={fullName}
            onIonChange={(e) => setFullName(e.detail.value || "")}
          />
        </IonItem>

        <IonItem lines="full" className="ion-margin-bottom">
          <IonLabel position="floating">Email ID or Phone</IonLabel>
          <IonInput
            type="text"
            placeholder="Enter email or phone"
            value={emailOrPhone}
            onIonChange={(e) => setEmailOrPhone(e.detail.value || "")}
          />
        </IonItem>

        <IonItem lines="full" className="ion-margin-bottom">
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            type="password"
            placeholder="Enter password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value || "")}
          />
        </IonItem>

        <IonButton
          expand="block"
          className="ion-margin-top"
          onClick={handleSignupClick}
          color="primary"
        >
          Create Account
        </IonButton>

        <IonButton expand="block" fill="clear" routerLink="/login" className="ion-margin-top">
          Already have an account? Login
        </IonButton>

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

export default Signup;
