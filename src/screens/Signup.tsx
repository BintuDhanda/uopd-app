import {
  IonPage,
  IonContent,
  IonText,
  IonInput,
  IonButton,
  IonIcon,
  IonRouterLink,
  IonBackButton
} from "@ionic/react";
import {
  personOutline,
  mailOutline,
  lockClosedOutline,
  eyeOutline,
  chevronBack,
  callOutline
} from "ionicons/icons";
import { useState } from "react";

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [identifier, setIdentifier] = useState("");


  const handleSignup = () => {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
    const isPhone = /^[0-9]{8,15}$/.test(identifier);

    if (!isEmail && !isPhone) {
      alert("Enter a valid email or mobile number");
      return;
    }

    // continue signup logic here
    console.log("Identifier:", identifier);
  };



  return (
    <IonPage>
      <IonContent fullscreen className="signup">
        <div className="signup__container">

          {/* Back */}
          <div className="signup__top">
            <IonBackButton
              defaultHref="/login"
              icon={chevronBack}
              text=""
              className="signup__back"
            />
          </div>

          {/* Header */}
          <div className="signup__header">
            <h1>Create Account</h1>
            <p>Sign up to get started</p>
          </div>

          {/* Full Name */}
          <div className="signup__field">
            <IonText className="label">Full Name</IonText>
            <div className="signup__input">
              <IonIcon icon={personOutline} />
              <IonInput placeholder="Enter your full name" />
            </div>
          </div>

          {/* Email */}
          <div className="signup__field">
            <IonText className="label">Email / Mobile Number</IonText>
            <div className="signup__input">
              <IonIcon
                icon={/^\d+$/.test(identifier) ? callOutline : mailOutline}
              />

              <IonInput
                inputMode="email"
                placeholder="Enter email or mobile number"
                value={identifier}
                onIonInput={(e) => setIdentifier(e.detail.value!)}
              />

            </div>
          </div>

          {/* Password */}
          <div className="signup__field">
            <IonText className="label">Password</IonText>
            <div className="signup__input">
              <IonIcon icon={lockClosedOutline} />
              <IonInput
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
              />
              <IonIcon
                icon={eyeOutline}
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="signup__field">
            <IonText className="label">Confirm Password</IonText>
            <div className="signup__input">
              <IonIcon icon={lockClosedOutline} />
              <IonInput
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm your password"
              />
              <IonIcon
                icon={eyeOutline}
                className="eye"
                onClick={() => setShowConfirm(!showConfirm)}
              />
            </div>
          </div>

          {/* Button */}
          <IonButton onClick={handleSignup} expand="block" className="signup__btn">
            Create Account
          </IonButton>

          {/* Footer */}
          <IonText className="login__footer">
            Already have an account?{" "}
            <IonRouterLink routerLink="/login">
              Sign In
            </IonRouterLink>
          </IonText>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
