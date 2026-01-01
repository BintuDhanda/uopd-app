import {
  IonPage,
  IonContent,
  IonButton,
  IonBackButton,
  IonRouterLink,
  IonText
} from "@ionic/react";
import {
  personOutline,
  mailOutline,
  callOutline,
  lockClosedOutline,
  eyeOutline,
  chevronBack
} from "ionicons/icons";
import { useState } from "react";
import TextField from "../components/core/TextField";
import { validateSignup } from "../validation/signup.validation";
import { useForm } from "../hooks/useForm";

const Signup: React.FC = () => {
  const { values, errors, setField, submit } = useForm(
    {
      fullName: "",
      identifier: "",
      password: "",
      confirmPassword: ""
    },
    validateSignup
  );

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = () => {
    submit(() => {
      // API call goes here
      console.log("Signup success", values);
    });
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
          <TextField
            label="Full Name"
            required
            value={values.fullName}
            onChange={(v) => setField("fullName", v)}
            placeholder="Enter your full name"
            leftIcon={personOutline}
            error={errors.fullName}
          />

          {/* Email / Mobile */}
          <TextField
            label="Email / Mobile Number"
            required
            value={values.identifier}
            onChange={(v) => setField("identifier", v)}
            placeholder="Enter email or mobile number"
            inputMode="email"
            leftIcon={
              /^\d+$/.test(values.identifier)
                ? callOutline
                : mailOutline
            }
            error={errors.identifier}
          />

          {/* Password */}
          <TextField
            label="Password"
            required
            value={values.password}
            onChange={(v) => setField("password", v)}
            placeholder="Create a password"
            type={showPassword ? "text" : "password"}
            leftIcon={lockClosedOutline}
            rightIcon={eyeOutline}
            onRightIconClick={() => setShowPassword(!showPassword)}
            error={errors.password}
          />

          {/* Confirm Password */}
          <TextField
            label="Confirm Password"
            required
            value={values.confirmPassword}
            onChange={(v) => setField("confirmPassword", v)}
            placeholder="Confirm your password"
            type={showConfirm ? "text" : "password"}
            leftIcon={lockClosedOutline}
            rightIcon={eyeOutline}
            onRightIconClick={() => setShowConfirm(!showConfirm)}
            error={errors.confirmPassword}
          />

          {/* Submit */}
          <IonButton
            expand="block"
            className="signup__btn"
            onClick={handleSubmit}
          >
            Create Account
          </IonButton>

          {/* Footer */}
          <IonText className="signup__footer">
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
