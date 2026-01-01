import {
  IonPage,
  IonContent,
  IonIcon,
  useIonRouter,
} from '@ionic/react';
import {
  bookOutline,
  personOutline,
  calendarOutline,
  documentTextOutline,
  cardOutline,
  chevronForwardOutline,
} from 'ionicons/icons';
import Header from '../components/common/Header';


const menuItems = [
  {
    label: "Patient Book",
    icon: bookOutline,
    route: "/patient-book",
    header: {
      title: "Patient Book",
      subtitle: "View and manage patients",
    },
  },
  {
    label: "Manage Profile",
    icon: personOutline,
    route: "/manage-profile",
    header: {
      title: "Manage Profile",
      subtitle: "Update your personal details",
    },
  },
  {
    label: "My Appointments",
    icon: calendarOutline,
    route: "/appointments",
    header: {
      title: "My Appointments",
      subtitle: "Your scheduled consultations",
    },
  },
  {
    label: "My Lab Tests",
    icon: documentTextOutline,
    route: "/lab-tests",
    header: {
      title: "My Lab Tests",
      subtitle: "View lab test reports",
    },
  },
  {
    label: "Payment Methods",
    icon: cardOutline,
    route: "/payment-methods",
    header: {
      title: "Payment Methods",
      subtitle: "Manage your payments",
    },
  },
];


const Profile: React.FC = () => {
  const router = useIonRouter();

  const handleNavigation = (item: typeof menuItems[number]) => {
    router.push(item.route, "forward", "push", {
      header: item.header
    });
  }

    return (
      <IonPage>
        <Header
          title="Balwant Singh"
          subtitle="Manage Profile Here..."
        />
        <IonContent fullscreen className="profile-home">

          {/* <div className="header">
          <IonText className="title">
            Welcome, <strong>Balwant Singh</strong>
          </IonText>
          <IonText className="subtitle">
            Manage Profile Here...
          </IonText>
        </div> */}

          <div className="menu">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className="menu-card"
                onClick={() => handleNavigation(item)}
              >
                <div className="left">
                  <div className="icon-wrapper">
                    <IonIcon icon={item.icon} />
                  </div>
                  <span className="label">{item.label}</span>
                </div>

                <IonIcon icon={chevronForwardOutline} className="chevron" />
              </button>
            ))}

          </div>

        </IonContent>
      </IonPage>
    );
  };

  export default Profile;
