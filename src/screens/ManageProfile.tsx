import {
  IonPage,
  IonContent,
  IonIcon,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonText
} from "@ionic/react";
import {
  personOutline,
  locationOutline,
  calendarOutline,
  callOutline,
  mailOutline
} from "ionicons/icons";
import { useLocation } from "react-router-dom";
import Header from "../components/common/Header";

interface HeaderState {
  title: string;
  subtitle?: string;
}

const ManageProfile: React.FC = () => {
  const location = useLocation();

  // ✅ Read header from route state (menu → page)
  const header: HeaderState = (location.state as any)?.header ?? {
    title: "Manage Profile",
    subtitle: "Update your personal details"
  };

  return (
    <IonPage>
      {/* COMMON HEADER */}
      <Header
        title={header.title}
        subtitle={header.subtitle}
      />

      <IonContent fullscreen className="manage-profile">
        {/* AVATAR */}
        <div className="avatar-section">
          <div className="avatar">BS</div>
          <button className="change-photo">Change Photo</button>
        </div>

        {/* PERSONAL INFORMATION */}
        <div className="card">
          <div className="card-title">
            <IonIcon icon={personOutline} />
            <span>Personal Information</span>
          </div>

          <div className="manage__field">
            <IonText className="label">Full Name</IonText>
            <div className="manage__input">
              <IonInput value="Balwant Singh" />
            </div>
          </div>

          <div className="manage__field">
            <IonText className="label">Email</IonText>
            <div className="manage__input">
              <IonIcon icon={mailOutline} />
              <IonInput value="balwant.singh@email.com" />
            </div>
          </div>

          <div className="manage__field">
            <IonText className="label">Phone</IonText>
            <div className="manage__input">
              <IonIcon icon={callOutline} />
              <IonInput value="+1 234-567-8900" />
            </div>
          </div>

          <div className="row">
            <div className="manage__field">
              <IonText className="label">Date of Birth</IonText>
              <div className="manage__input">
                <IonIcon icon={calendarOutline} />
                <IonInput value="15/06/1985" />
              </div>
            </div>

            <div className="manage__field">
              <IonText className="label">Gender</IonText>
              <div className="manage__input">
                <IonSelect value="Male">
                  <IonSelectOption value="Male">Male</IonSelectOption>
                  <IonSelectOption value="Female">Female</IonSelectOption>
                </IonSelect>
              </div>
            </div>
          </div>

          <div className="manage__field">
            <IonText className="label">Blood Group</IonText>
            <div className="manage__input">
              <IonSelect value="O+">
                <IonSelectOption value="O+">O+</IonSelectOption>
                <IonSelectOption value="A+">A+</IonSelectOption>
                <IonSelectOption value="B+">B+</IonSelectOption>
              </IonSelect>
            </div>
          </div>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="card">
          <div className="card-title green">
            <IonIcon icon={locationOutline} />
            <span>Contact Information</span>
          </div>

          <div className="manage__field">
            <IonText className="label">Address</IonText>
            <div className="manage__input">
              <IonInput value="123 Main Street, New York, NY 10001" />
            </div>
          </div>

          <div className="manage__field">
            <IonText className="label">Emergency Contact Name</IonText>
            <div className="manage__input">
              <IonInput value="Jane Singh" />
            </div>
          </div>

          <div className="manage__field">
            <IonText className="label">Emergency Contact Phone</IonText>
            <div className="manage__input">
              <IonInput value="+1 234-567-8901" />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ManageProfile;
