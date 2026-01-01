import {
  IonPage,
  IonContent,
  IonButton,
  IonBackButton,
  IonText
} from "@ionic/react";
import {
  mailOutline,
  chevronBack
} from "ionicons/icons";
import { useState } from "react";

import TextField from "../components/core/TextField";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    setError("");
    console.log("Send reset link to:", email);

    // API call goes here
  };

  return (
    <IonPage>
      <IonContent fullscreen className="forgot">
        <div className="forgot__container">

          {/* BACK */}
          <div className="forgot__top">
            <IonBackButton
              defaultHref="/login"
              icon={chevronBack}
              text=""
              className="forgot__back"
            />
          </div>

          {/* HEADER */}
          <div className="forgot__header">
            <h1>Forgot Password</h1>
            <p>
              Enter your registered email address and we’ll send you a reset
              link.
            </p>
          </div>

          {/* EMAIL */}
          <TextField
            label="Email Address"
            required
            value={email}
            onChange={(v) => {
              setEmail(v);
              setError("");
            }}
            placeholder="Enter your email"
            leftIcon={mailOutline}
            error={error}
          />

          {/* SUBMIT */}
          <IonButton
            expand="block"
            className="forgot__btn"
            onClick={handleSubmit}
          >
            Send Reset Link
          </IonButton>

          {/* FOOTER */}
          <IonText className="forgot__footer">
            Remember your password?{" "}
            <span onClick={() => window.history.back()}>
              Sign In
            </span>
          </IonText>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPassword;
