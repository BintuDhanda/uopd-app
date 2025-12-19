import React, { useEffect, useRef, useState } from "react";
import {
  IonPage,
  IonContent,
  IonText,
  IonIcon,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import {
  locationOutline,
  chevronDownOutline,
  notificationsOutline,
  heartOutline,
  medkitOutline,
  femaleOutline,
  pulseOutline,
  gridOutline,
  documentTextOutline,
  flaskOutline,
  eyeOutline,
} from "ionicons/icons";
import Drawer from "../components/Drawer";
import { useHistory } from "react-router";

const Home: React.FC<{ onLogout?: () => void }> = ({ onLogout }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const history = useHistory();

  const goToSearch = () => history.push("/search");

  const offers = [
    {
      icon: "🏥",
      title: "Free Health Checkup",
      subtitle: "Get your first consultation absolutely free",
      className: "offer--blue",
    },
    {
      icon: "🔬",
      title: "20% OFF on Lab Tests",
      subtitle: "Valid on all diagnostic tests this month",
      className: "offer--green",
    },
    {
      icon: "🚑",
      title: "Emergency Care 24/7",
      subtitle: "Round the clock medical support available",
      className: "offer--red",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      const width = sliderRef.current.clientWidth;
      const next = (activeSlide + 1) % offers.length;
      sliderRef.current.scrollTo({ left: next * width, behavior: "smooth" });
      setActiveSlide(next);
    }, 3500);

    return () => clearInterval(interval);
  }, [activeSlide, offers.length]);

  return (
    <IonPage>
      <IonContent fullscreen className="home">
        {/* HEADER */}
        <div className="home-header">
          <div className="home-header__top">
            <div>
              <IonText className="home-header__greeting">
                Hi, Sikandar 👋
              </IonText>

              <div className="home-header__location">
                <IonIcon
                  icon={locationOutline}
                  className="home-header__location-icon"
                />
                <IonText className="home-header__location-text">
                  Aonla, UP
                  <IonIcon
                    icon={chevronDownOutline}
                    className="home-header__chevron"
                  />
                </IonText>
              </div>
            </div>

            <div
              className="home-header__notification"
              onClick={() => setDrawerOpen(true)}
            >
              <IonIcon icon={notificationsOutline} />
              <span className="home-header__dot" />
            </div>
          </div>

          <IonSearchbar
            className="home-header__search"
            placeholder="Search Doctor, Hospital & Labs"
            onClick={goToSearch}
            onIonFocus={goToSearch}
          />
        </div>

        {/* OFFERS */}
        <div
          className="home__offers"
          ref={sliderRef}
          onScroll={() => {
            if (!sliderRef.current) return;
            const width = sliderRef.current.clientWidth;
            setActiveSlide(Math.round(sliderRef.current.scrollLeft / width));
          }}
        >
          {offers.map((offer, i) => (
            <div key={i} className={`offer ${offer.className}`}>
              <div className="offer__content">
                <div className="offer__icon">{offer.icon}</div>

                <div className="offer__text">
                  <h3>{offer.title}</h3>
                  <p>{offer.subtitle}</p>
                </div>
              </div>

              <div className="offer__dots">
                {offers.map((_, d) => (
                  <span key={d} className={activeSlide === d ? "active" : ""} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SPECIALTIES */}
        <div className="home__section">
          <div className="home__section-header">
            <IonText>Specialties</IonText>
            <IonText className="link">See all</IonText>
          </div>

          <IonGrid className="home__grid">
            <IonRow>
              {[
                { icon: heartOutline, label: "Cardiology", cls: "pink" },
                { icon: medkitOutline, label: "Dentist", cls: "blue" },
                { icon: femaleOutline, label: "Gynecology", cls: "purple" },
                { icon: pulseOutline, label: "Physiotherapy", cls: "green" },
                { icon: eyeOutline, label: "Orthopedic", cls: "orange" },
                { icon: gridOutline, label: "View All", cls: "indigo" },
              ].map((s, i) => (
                <IonCol size="4" sizeXs="6" sizeSm="4" key={i}>
                  <IonCard className="specialty-card">
                    <IonCardContent>
                      <div className={`icon ${s.cls}`}>
                        <IonIcon icon={s.icon} />
                      </div>
                      <IonText>{s.label}</IonText>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </div>

        {/* QUICK ACTIONS */}
        <div className="home__section">
          <IonText className="home__section-title">Quick Actions</IonText>

          <div className="quick-actions">
            <div className="quick quick--blue">
              <IonIcon icon={documentTextOutline} />
              <span>Lab Reports</span>
            </div>

            <div className="quick quick--purple">
              <IonIcon icon={flaskOutline} />
              <span>Medicines</span>
            </div>
          </div>
        </div>

        <Drawer
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onLogout={onLogout}
          user={{ name: "User" }}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
