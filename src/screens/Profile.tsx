import {
  IonPage,
  IonContent,
  IonText,
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


const menuItems = [
  {
    label: 'Patient Book',
    icon: bookOutline,
    route: '/patient-book',
  },
  {
    label: 'Manage Profile',
    icon: personOutline,
    route: '/manage-profile',
  },
  {
    label: 'My Appointments',
    icon: calendarOutline,
    route: '/appointments',
  },
  {
    label: 'My Lab Tests',
    icon: documentTextOutline,
    route: '/lab-tests',
  },
  {
    label: 'Payment Methods',
    icon: cardOutline,
    route: '/payment-methods',
  },
];

const Profile: React.FC = () => {
  const router = useIonRouter();

  const handleNavigation = (route: string) => {
    router.push(route, 'forward', 'push');
  };

  return (
    <IonPage>
      <IonContent fullscreen className="profile-home">

        <div className="header">
          <IonText className="title">
            Welcome, <strong>Balwant Singh</strong>
          </IonText>
          <IonText className="subtitle">
            Manage Profile Here...
          </IonText>
        </div>

        <div className="menu">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="menu-card"
              onClick={() => handleNavigation(item.route)}
            >
              <div className="left">
                <div className="icon-wrapper">
                  <IonIcon icon={item.icon} />
                </div>
                <span className="label">{item.label}</span>
              </div>

              <IonIcon
                icon={chevronForwardOutline}
                className="chevron"
              />
            </button>
          ))}
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Profile;
