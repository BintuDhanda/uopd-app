import {
  IonPage,
  IonContent,
  IonCard,
  IonButton,
  IonIcon,
  IonText
} from "@ionic/react";
import {
  documentTextOutline,
  shieldCheckmarkOutline,
  briefcaseOutline,
  documentOutline,
  shieldOutline,
  personOutline,
  businessOutline
} from "ionicons/icons";


const RoleLogin: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="role-login">
        <div className="role-login__container">

          {/* Header */}
          <div className="role-login__header">
            <div className="role-login__logo">
              <IonIcon icon={documentTextOutline} />
            </div>

            <h1>Healthcare Platform</h1>
            <p>Manage hospitals, doctors & appointments</p>

            <IonText className="role-login__subtitle">
              Login As
            </IonText>
          </div>

          {/* App Admin */}
          <IonCard className="role-card role-card--admin">
            <div className="role-card__info">
              <div className="role-card__icon admin">
                <IonIcon icon={shieldCheckmarkOutline} />
              </div>
              <div>
                <h3>App Admin</h3>
                <p>Manage platform & process payments</p>
              </div>
            </div>

            <IonButton
              expand="block"
              routerLink="/login/admin"
              className="btn btn--admin"
            >
              Login
            </IonButton>
          </IonCard>

          {/* Sales Partner */}
          <IonCard className="role-card">
            <div className="role-card__info">
              <div className="role-card__icon sales">
                <IonIcon icon={briefcaseOutline} />
              </div>
              <div>
                <h3>Sales Partner</h3>
                <p>Onboard hospitals & earn commission</p>
              </div>
            </div>

            <div className="role-card__actions">
              <IonButton
                expand="block"
                routerLink="/login/sales"
                className="btn btn--sales"
              >
                Login
              </IonButton>

              {/* <IonButton
                expand="block"
                fill="outline"
                routerLink="/register"
                className="btn btn--sales-outline"
              >
                Register
              </IonButton> */}
            </div>
          </IonCard>

          {/* Doctor */}
          <IonCard className="role-card">
            <div className="role-card__info">
              <div className="role-card__icon doctor">
                <IonIcon icon={personOutline} />
              </div>
              <div>
                <h3>Doctor</h3>
                <p>View appointments & manage patients</p>
              </div>
            </div>

            <IonButton
              expand="block"
              routerLink="/login/doctor"
              className="btn btn--doctor"
            >
              Login
            </IonButton>
          </IonCard>

          {/* Hospital Admin */}
          <IonCard className="role-card">
            <div className="role-card__info">
              <div className="role-card__icon hospital">
                <IonIcon icon={businessOutline} />
              </div>
              <div>
                <h3>Hospital Admin</h3>
                <p>Manage doctors & view earnings</p>
              </div>
            </div>

            <IonButton
              expand="block"
              routerLink="/login/hospital"
              className="btn btn--hospital"
            >
              Login
            </IonButton>
          </IonCard>

          {/* Demo Access */}
          <IonCard className="demo-card">
            <IonIcon icon={shieldOutline} />
            <p>
              <strong>Demo Access</strong>
              Click any role to explore the platform features with demo data.
            </p>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RoleLogin;
