import {
    IonPage,
    IonContent,
    IonText,
    IonInput,
    IonButton,
    IonIcon,
    IonRouterLink
} from "@ionic/react";
import {
    mailOutline,
    lockClosedOutline,
    eyeOutline,
    heartOutline,
    eyeOffOutline
} from "ionicons/icons";
import { useState } from "react";


const Login: React.FC = () => {
    const [role, setRole] = useState<"patient" | "doctor">("patient");
    const [showPassword, setShowPassword] = useState(false);


    return (
        <IonPage>
            <IonContent fullscreen className="login">
                <div className="login__container">

                    <div className="login__header">
                        <div className="login__logo">
                            <IonIcon icon={heartOutline} />
                        </div>
                        <h1>Welcome Back</h1>
                        <p>Sign in to continue</p>
                    </div>

                    <div className="login__field">
                        <IonText className="label">Email</IonText>
                        <div className="login__input">
                            <IonIcon icon={mailOutline} />
                            <IonInput
                                placeholder="Enter your email"
                                clearInput={false}
                            />
                        </div>
                    </div>

                    <div className="login__field">
                        <IonText className="label">Password</IonText>
                        <div className="login__input">
                            <IonIcon icon={lockClosedOutline} />
                            <IonInput
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                            />
                            <IonIcon
                                icon={showPassword ? eyeOffOutline : eyeOutline}
                                className="eye"
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        </div>
                    </div>

                    <div className="login__role">
                        <IonText className="label">Login as</IonText>

                        <div className="login__role-switch">
                            <IonButton
                                className={role === "patient" ? "active" : ""}
                                onClick={() => setRole("patient")}
                            >
                                Patient
                            </IonButton>
                            <IonButton
                                className={role === "doctor" ? "active" : ""}
                                onClick={() => setRole("doctor")}
                            >
                                Doctor
                            </IonButton>
                        </div>
                    </div>

                    <IonText className="login__forgot">
                        Forgot Password?
                    </IonText>

                    <IonButton expand="block" className="login__btn">
                        Sign In
                    </IonButton>

                    <IonText className="login__footer">
                        Don&apos;t have an account?{" "}
                        <IonRouterLink routerLink="/register">
                            <span>Sign Up</span>
                        </IonRouterLink>
                    </IonText>

                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
