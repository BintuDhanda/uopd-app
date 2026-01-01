import {
  IonPage,
  IonContent,
  IonIcon,
  IonText
} from "@ionic/react";
import {
  notificationsOutline,
  calendarOutline,
  alertCircleOutline
} from "ionicons/icons";

import Header from "../components/common/Header";
import { useHeader } from "../hooks/useHeader";

interface NotificationItem {
  id: number;
  title: string;
  description: string;
  time: string;
  type?: "info" | "alert";
}

const notifications: NotificationItem[] = [
  {
    id: 1,
    title: "Appointment Confirmed",
    description: "Your appointment with Dr. Ajay Nagpal is confirmed.",
    time: "2 hours ago",
    type: "info"
  },
  {
    id: 2,
    title: "Upcoming Appointment",
    description: "You have an appointment scheduled for tomorrow at 10:00 AM.",
    time: "Yesterday",
    type: "info"
  },
  {
    id: 3,
    title: "Profile Incomplete",
    description: "Please complete your profile to get better recommendations.",
    time: "2 days ago",
    type: "alert"
  }
];

const Notification: React.FC = () => {
  const header = useHeader({
    title: "Notifications",
    subtitle: "Stay updated with latest alerts"
  });

  return (
    <IonPage>
      <Header title={header.title} subtitle={header.subtitle} />

      <IonContent fullscreen className="notification">
        <div className="notification__container">

          {notifications.length === 0 ? (
            <div className="notification__empty">
              <IonIcon icon={notificationsOutline} />
              <IonText>No notifications yet</IonText>
            </div>
          ) : (
            notifications.map((item) => (
              <div
                key={item.id}
                className={[
                  "notification__item",
                  item.type === "alert" && "notification__item--alert"
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="notification__icon">
                  <IonIcon
                    icon={
                      item.type === "alert"
                        ? alertCircleOutline
                        : calendarOutline
                    }
                  />
                </div>

                <div className="notification__content">
                  <IonText className="notification__title">
                    {item.title}
                  </IonText>
                  <IonText className="notification__description">
                    {item.description}
                  </IonText>
                  <IonText className="notification__time">
                    {item.time}
                  </IonText>
                </div>
              </div>
            ))
          )}

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Notification;
