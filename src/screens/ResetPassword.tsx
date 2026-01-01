import {
  IonPage,
  IonContent,
  IonButton,
  IonBackButton,
  IonText
} from "@ionic/react";
import {
  lockClosedOutline,
  eyeOutline,
  chevronBack
} from "ionicons/icons";
import { useState } from "react";

import TextField from "../components/core/TextField";

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};

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

    console.log("Reset password:", password);
    // API call goes here
  };

  return (
    <IonPage>
      <IonContent fullscreen className="reset">
        <div className="reset__container">

          {/* BACK */}
          <div className="reset__top">
            <IonBackButton
              defaultHref="/login"
              icon={chevronBack}
              text=""
              className="reset__back"
            />
          </div>

          {/* HEADER */}
          <div className="reset__header">
            <h1>Reset Password</h1>
            <p>Create a new password for your account</p>
          </div>

          {/* PASSWORD */}
          <TextField
            label="New Password"
            required
            value={password}
            onChange={(v) => {
              setPassword(v);
              setErrors((e) => ({ ...e, password: "" }));
            }}
            placeholder="Enter new password"
            type={showPassword ? "text" : "password"}
            leftIcon={lockClosedOutline}
            rightIcon={eyeOutline}
            onRightIconClick={() => setShowPassword(!showPassword)}
            error={errors.password}
          />

          {/* CONFIRM PASSWORD */}
          <TextField
            label="Confirm Password"
            required
            value={confirmPassword}
            onChange={(v) => {
              setConfirmPassword(v);
              setErrors((e) => ({ ...e, confirmPassword: "" }));
            }}
            placeholder="Re-enter new password"
            type={showConfirm ? "text" : "password"}
            leftIcon={lockClosedOutline}
            rightIcon={eyeOutline}
            onRightIconClick={() => setShowConfirm(!showConfirm)}
            error={errors.confirmPassword}
          />

          {/* SUBMIT */}
          <IonButton
            expand="block"
            className="reset__btn"
            onClick={handleSubmit}
          >
            Update Password
          </IonButton>

          {/* FOOTER */}
          <IonText className="reset__footer">
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

export default ResetPassword;
