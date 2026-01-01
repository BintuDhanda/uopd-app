import {
  IonPage,
  IonContent,
  IonText,
  IonButton,
  IonIcon,
  IonRouterLink,
  useIonRouter
} from "@ionic/react";
import {
  mailOutline,
  lockClosedOutline,
  eyeOutline,
  eyeOffOutline,
  heartOutline
} from "ionicons/icons";
import { useState } from "react";
import TextField from "../components/core/TextField";
import { validateLogin } from "../validation/login.validation";
import { useForm } from "../hooks/useForm";

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const ionRouter = useIonRouter();
  const { values, errors, setField, submit } = useForm(
    {
      email: "",
      password: ""
    },
    validateLogin
  );

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    submit(() => {
      onLogin();
      ionRouter.push("/home", "root");
    });
  };

  return (
    <IonPage>
      <IonContent fullscreen className="login">
        <div className="login__container">

          {/* Header */}
          <div className="login__header">
            <div className="login__logo">
              <IonIcon icon={heartOutline} />
            </div>
            <h1>Welcome Back</h1>
            <p>Sign in to continue</p>
          </div>

          {/* Email */}
          <TextField
            label="Email"
            required
            value={values.email}
            onChange={(v) => setField("email", v)}
            placeholder="Enter your email"
            inputMode="email"
            leftIcon={mailOutline}
            error={errors.email}
          />

          {/* Password */}
          <TextField
            label="Password"
            required
            value={values.password}
            onChange={(v) => setField("password", v)}
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            leftIcon={lockClosedOutline}
            rightIcon={showPassword ? eyeOffOutline : eyeOutline}
            onRightIconClick={() => setShowPassword(!showPassword)}
            error={errors.password}
          />

          {/* Forgot password */}
          <IonText className="login__forgot">
            <IonRouterLink routerLink="/forgot-password">
              <span>Forgot Password?</span>
            </IonRouterLink>
          </IonText>

            {/* Forgot password */}
          {/* <IonText className="login__forgot">
            <IonRouterLink routerLink="/reset-password">
              <span>Forgot Password?</span>
            </IonRouterLink>
          </IonText> */}

          {/* Submit */}
          <IonButton
            expand="block"
            className="login__btn"
            onClick={handleLogin}
          >
            Sign In
          </IonButton>

          {/* Footer */}
          <IonText className="login__footer">
            Don&apos;t have an account?{" "}
            <IonRouterLink routerLink="/signup">
              <span>Sign Up</span>
            </IonRouterLink>
          </IonText>

          {/* Bottom links */}
          <div className="login__bottom-links">
            <IonText>
              Login as{" "}
              <IonRouterLink routerLink="/roleLogin">Admin</IonRouterLink>
              {" • "}
              <IonRouterLink routerLink="/roleLogin">Doctor</IonRouterLink>
              {" • "}
              <IonRouterLink routerLink="/roleLogin">Hospital</IonRouterLink>
              {" • "}
              <IonRouterLink routerLink="/roleLogin">
                Sales Partner
              </IonRouterLink>
            </IonText>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
