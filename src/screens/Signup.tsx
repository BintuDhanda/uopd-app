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

const Signup: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSignup = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
    const isPhone = /^[0-9]{8,15}$/.test(identifier);

    if (!identifier) {
      newErrors.identifier = "Email or mobile number is required";
    } else if (!isEmail && !isPhone) {
      newErrors.identifier = "Enter a valid email or mobile number";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // API call goes here
    console.log("Signup success", {
      fullName,
      identifier,
      password
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
            value={fullName}
            onChange={(v) => {
              setFullName(v);
              setErrors((e) => ({ ...e, fullName: "" }));
            }}
            placeholder="Enter your full name"
            leftIcon={personOutline}
            error={errors.fullName}
          />

          {/* Email / Mobile */}
          <TextField
            label="Email / Mobile Number"
            required
            value={identifier}
            onChange={(v) => {
              setIdentifier(v);
              setErrors((e) => ({ ...e, identifier: "" }));
            }}
            placeholder="Enter email or mobile number"
            inputMode="email"
            leftIcon={/^\d+$/.test(identifier) ? callOutline : mailOutline}
            error={errors.identifier}
          />

          {/* Password */}
          <TextField
            label="Password"
            required
            value={password}
            onChange={(v) => {
              setPassword(v);
              setErrors((e) => ({ ...e, password: "" }));
            }}
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
            value={confirmPassword}
            onChange={(v) => {
              setConfirmPassword(v);
              setErrors((e) => ({ ...e, confirmPassword: "" }));
            }}
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
            onClick={handleSignup}
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
