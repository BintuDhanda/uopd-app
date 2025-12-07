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
    IonText,
    IonIcon,
    IonCheckbox,
    IonNote,
    IonSpinner
} from "@ionic/react";
import { eye, eyeOff, logoGoogle, logoFacebook } from "ionicons/icons";

interface LoginProps {
    onLogin: () => void;
}

const styles: { [k: string]: React.CSSProperties } = {
    centerRow: { minHeight: "70vh" },
    card: { borderRadius: 10, padding: 0, overflow: "hidden" },
    headerArea: { background: "linear-gradient(135deg,#2b8cff,#6b6bff)", color: "white", padding: "20px 16px" },
    brand: { display: "flex", alignItems: "center", gap: 12 },
    logoCircle: { width: 52, height: 52, borderRadius: 12, background: "rgba(255,255,255,0.14)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 },
    formArea: { padding: 18 },
    smallMuted: { color: "var(--ion-color-medium)", marginTop: 6 },
    socialBtn: { display: "flex", alignItems: "center", gap: 10, justifyContent: "center" }
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [emailOrPhone, setEmailOrPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showToast, setShowToast] = useState<boolean>(false);
    const [toastMsg, setToastMsg] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [remember, setRemember] = useState<boolean>(false);

    const validate = () => {
        if (emailOrPhone.trim() === "") {
            setToastMsg("Please enter email or phone");
            setShowToast(true);
            return false;
        }
        if (password.trim() === "") {
            setToastMsg("Please enter password");
            setShowToast(true);
            return false;
        }
        return true;
    };

    const handleLoginClick = async () => {
        if (!validate()) return;

        setLoading(true);
        try {
            // simulate API/login flow
            await new Promise((res) => setTimeout(res, 700));
            onLogin();
        } catch (err) {
            setToastMsg("Login failed. Try again.");
            setShowToast(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <IonPage>
        
            <IonContent className="ion-padding" fullscreen>
                <IonGrid>
                    <IonRow
  className="ion-justify-content-center ion-align-items-center"
  style={{ height: "100vh", display: "flex" }}
>

                        <IonCol size="12" sizeMd="6" sizeLg="4">
                            <IonCard style={styles.card}>
                                <div style={styles.headerArea}>
                                    <div style={styles.brand}>
                                        <div>
                                            <h3 style={{ margin: 0 }}>Welcome back</h3>
                                            <IonText style={{ fontSize: 14 }}>Sign in to continue to your account</IonText>
                                        </div>
                                    </div>
                                </div>

                                <IonCardContent style={styles.formArea}>
                                    <IonItem lines="inset" className="ion-margin-bottom">
                                       
                                        <IonInput
                                            type="text"
                                            value={emailOrPhone}
                                            placeholder="Email or Phone"
                                            onIonChange={(e) => setEmailOrPhone(e.detail.value ?? "")}
                                            clearInput
                                            inputmode="email"
                                            aria-label="email or phone"
                                        />
                                       
                                    </IonItem>

                                    <IonItem lines="inset" className="ion-margin-bottom">
                                        <IonLabel position="stacked">Password</IonLabel>
                                        <IonInput
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            placeholder="Enter password"
                                            onIonChange={(e) => setPassword(e.detail.value ?? "")}
                                            clearInput
                                            aria-label="password"
                                        />
                                        <IonButton fill="clear" onClick={() => setShowPassword((s) => !s)} slot="end" aria-label="toggle password">
                                            <IonIcon icon={showPassword ? eyeOff : eye} />
                                        </IonButton>
                                    </IonItem>

                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                            <IonCheckbox checked={remember} onIonChange={(e) => setRemember(e.detail.checked)} />
                                            <IonText>Remember me</IonText>
                                        </div>

                                        <IonButton fill="clear" size="small" routerLink="/forgot">
                                            Forgot?
                                        </IonButton>
                                    </div>

                                    <IonButton expand="block" onClick={handleLoginClick} disabled={loading}>
                                        {loading ? <><IonSpinner name="dots" /> &nbsp;Signing in...</> : "Login"}
                                    </IonButton>

                                    <div style={{ textAlign: "center", marginTop: 12 }}>
                                    


                                        <div style={{ marginTop: 12 }}>
                                            <IonButton expand="block" fill="clear" routerLink="/signup">
                                                Don't have an account? Sign Up
                                            </IonButton>
                                        </div>

                                        <div style={{ marginTop: 6 }}>
                                            <IonText color="medium">
                                                <small>By continuing you agree to our Terms & Privacy</small>
                                            </IonText>
                                        </div>
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonToast isOpen={showToast} message={toastMsg || "Please fill all fields"} duration={1500} onDidDismiss={() => setShowToast(false)} />
            </IonContent>
        </IonPage>
    );
};

export default Login;
