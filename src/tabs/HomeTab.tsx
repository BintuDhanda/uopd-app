import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonContent,
  IonPage,
  IonSearchbar,
  IonIcon,
  IonText,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonItem,
  IonLabel
} from '@ionic/react';
import {
  location,
  person,
  heart,
  medical,
  fitness,
  eye,
  apps,
  logOut,
  close,
  settings,
  personCircle,
  calendar,
  documentText,
  wallet,
  notifications,
  helpCircle,
  call,
  chevronDown
} from 'ionicons/icons';

interface HomeTabProps {
  onLogout?: () => void;
}

const HomeTab: React.FC<HomeTabProps> = ({ onLogout }) => {
  const history = useHistory();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // slider state
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Get user from localStorage
  const getUser = () => {
    try {
      const userStr = localStorage.getItem('user');
      return userStr ? JSON.parse(userStr) : { name: 'User' };
    } catch {
      return { name: 'User' };
    }
  };

  const user = getUser();

  const handleLogout = () => {
    setIsDrawerOpen(false);
    if (onLogout) {
      onLogout();
    }
    history.push('/login');
  };

  const goToSearch = () => {
    history.push('/search');
  };

  // slider data
  const offers = [
    {
      emoji: '🏥',
      title: 'Free Health Checkup',
      subtitle: 'Get your first consultation absolutely free',
      bg: 'linear-gradient(135deg,#2667ff,#5a8cff)'
    },
    {
      emoji: '🔬',
      title: '20% OFF on Lab Tests',
      subtitle: 'Valid on all diagnostic tests this month',
      bg: 'linear-gradient(135deg,#27ae60,#1abc9c)'
    },
    {
      emoji: '🚑',
      title: 'Emergency Care 24/7',
      subtitle: 'Round the clock medical support available',
      bg: 'linear-gradient(135deg,#e53935,#d81b60)'
    }
  ];

  const handleSliderScroll = () => {
    const el = sliderRef.current;
    if (!el) return;

    const width = el.clientWidth;
    if (!width) return;

    const index = Math.round(el.scrollLeft / width);
    const clamped = Math.max(0, Math.min(offers.length - 1, index));
    setActiveSlide(clamped);
  };

  // auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const el = sliderRef.current;
      if (!el) return;

      const width = el.clientWidth;
      if (!width) return;

      setActiveSlide(prev => {
        const next = prev + 1 >= offers.length ? 0 : prev + 1;
        el.scrollTo({
          left: next * width,
          behavior: 'smooth'
        });
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [offers.length]);

  const serviceCategories = [
    { name: 'Cardiology', icon: heart, bg: 'linear-gradient(135deg,#ffdee9,#ff9ac1)' },
    { name: 'Dentist', icon: medical, bg: 'linear-gradient(135deg,#d2e9ff,#7ab9ff)' },
    { name: 'Gynecology', icon: medical, bg: 'linear-gradient(135deg,#ffd9fb,#ff9df2)' },
    { name: 'Physiotherapy', icon: fitness, bg: 'linear-gradient(135deg,#d6ffe4,#52d88b)' },
    { name: 'Orthopedic', icon: eye, bg: 'linear-gradient(135deg,#ffe6c9,#ffad58)' },
    { name: 'View All', icon: apps, bg: 'linear-gradient(135deg,#e4e6ff,#8c96ff)' }
  ];

  return (
    <IonPage>
      <IonContent
        style={{ '--background': '#f5f6fa' } as React.CSSProperties}
        fullscreen
      >
        {/* HEADER (hi user + location + bell) */}
        <div
          style={{
            background: '#ffffff',
            padding: '16px 20px 8px',
            boxShadow: '0 1px 0 rgba(0,0,0,0.03)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px'
            }}
          >
            <div>
              <IonText
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  display: 'block',
                  marginBottom: '4px',
                  color: '#111827'
                }}
              >
                Hi, {user.name || 'User'} 👋
              </IonText>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <IonIcon
                  icon={location}
                  style={{ fontSize: '16px', color: '#6b7280' }}
                />
                <IonText
                  style={{
                    fontSize: '14px',
                    color: '#6b7280',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px'
                  }}
                >
                  Hisar, Haryana
                  <IonIcon
                    icon={chevronDown}
                    style={{ fontSize: '14px', color: '#9ca3af' }}
                  />
                </IonText>
              </div>
            </div>

            {/* Right icon opens drawer */}
            <div
              onClick={() => setIsDrawerOpen(true)}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '999px',
                background: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              <IonIcon
                icon={notifications}
                style={{ fontSize: '22px', color: '#111827' }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: 6,
                  right: 6,
                  width: '8px',
                  height: '8px',
                  borderRadius: '999px',
                  background: '#ef4444'
                }}
              />
            </div>
          </div>

          {/* Search Bar */}
          <IonSearchbar
            placeholder="Search Doctor, Hospital & Labs"
            onClick={goToSearch}
            onIonFocus={goToSearch}
            style={{
              '--background': '#f3f4f6',
              '--border-radius': '12px',
              '--box-shadow': 'none',
              '--placeholder-color': '#6b7280',
              padding: 0
            } as React.CSSProperties}
          />
        </div>

        {/* MAIN BODY */}
        <div style={{ padding: '16px 20px 100px' }}>
          {/* OFFERS SLIDER */}
          <div
            ref={sliderRef}
            onScroll={handleSliderScroll}
            style={{
              display: 'flex',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              gap: '16px',
              paddingBottom: '6px',
              marginBottom: '20px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <style>
              {`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

            {offers.map((offer, index) => (
              <div
                key={index}
                style={{
                  flex: '0 0 100%',
                  scrollSnapAlign: 'center'
                }}
              >
                <IonCard
                  style={{
                    margin: 0,
                    borderRadius: '18px',
                    background: offer.bg,
                    boxShadow: '0 8px 8px rgba(0,0,0,0.20)'
                  }}
                >
                  <IonCardContent
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '20px'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '40px',
                        marginRight: '14px'
                      }}
                    >
                      {offer.emoji}
                    </div>
                    <div style={{ flex: 1 }}>
                      <IonText
                        style={{
                          fontSize: '20px',
                          fontWeight: 600,
                          color: '#ffffff',
                          display: 'block',
                          marginBottom: '6px'
                        }}
                      >
                        {offer.title}
                      </IonText>
                      <IonText
                        style={{
                          fontSize: '14px',
                          color: 'rgba(255,255,255,0.95)',
                          lineHeight: 1.4
                        }}
                      >
                        {offer.subtitle}
                      </IonText>

                      {/* dots */}
                      <div
                        style={{
                          marginTop: '16px',
                          display: 'flex',
                          justifyContent: 'center',
                          gap: '6px'
                        }}
                      >
                        {offers.map((_, dotIndex) => (
                          <span
                            key={dotIndex}
                            style={{
                              width:
                                activeSlide === dotIndex ? '18px' : '6px',
                              height: '6px',
                              borderRadius: '999px',
                              background:
                                activeSlide === dotIndex
                                  ? '#ffffff'
                                  : 'rgba(255,255,255,0.6)',
                              transition: 'all 0.2s ease'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </IonCardContent>
                </IonCard>
              </div>
            ))}
          </div>

          {/* SPECIALTIES */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px'
            }}
          >
            <IonText
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#111827'
              }}
            >
              Specialties
            </IonText>
            <IonText
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#2563eb'
              }}
            >
              See all
            </IonText>
          </div>

          <IonGrid style={{ padding: 0 }}>
            <IonRow>
              {serviceCategories.map((category, idx) => (
                <IonCol size="4" key={idx}>
                  <div
                    style={{
                      background: '#ffffff',
                      borderRadius: '20px',
                      padding: '10px 8px 8px',
                      marginBottom: '14px',
                      boxShadow: '0 4px 10px rgba(15,23,42,0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '18px',
                        background: category.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '6px'
                      }}
                    >
                      <IonIcon
                        icon={category.icon}
                        style={{ fontSize: '26px', color: '#ffffff' }}
                      />
                    </div>
                    <IonText
                      style={{
                        fontSize: '12px',
                        fontWeight: 500,
                        textAlign: 'center',
                        color: '#111827'
                      }}
                    >
                      {category.name}
                    </IonText>
                  </div>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>

          {/* QUICK ACTIONS */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '8px',
              marginBottom: '12px'
            }}
          >
            <IonText
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#111827'
              }}
            >
              Quick Actions
            </IonText>
          </div>

          <IonGrid style={{ padding: 0 }}>
            <IonRow>
              <IonCol size="6">
                <div
                  style={{
                    background:
                      'linear-gradient(135deg,#2563eb,#4f8dfd)',
                    borderRadius: '18px',
                    padding: '14px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: '0 8px 20px rgba(37,99,235,0.3)'
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '12px',
                      background: 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '10px'
                    }}
                  >
                    <IonIcon
                      icon={documentText}
                      style={{ fontSize: '22px', color: '#ffffff' }}
                    />
                  </div>
                  <IonText
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#ffffff'
                    }}
                  >
                    Lab Reports
                  </IonText>
                </div>
              </IonCol>

              <IonCol size="6">
                <div
                  style={{
                    background:
                      'linear-gradient(135deg,#a855f7,#ec4899)',
                    borderRadius: '18px',
                    padding: '14px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: '0 8px 20px rgba(236,72,153,0.35)'
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '12px',
                      background: 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '10px'
                    }}
                  >
                    <IonIcon
                      icon={medical}
                      style={{ fontSize: '22px', color: '#ffffff' }}
                    />
                  </div>
                  <IonText
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#ffffff'
                    }}
                  >
                    Medicines
                  </IonText>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        {/* Drawer Overlay (original) */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: isDrawerOpen ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
            zIndex: 9998,
            opacity: isDrawerOpen ? 1 : 0,
            transition: 'opacity 0.3s ease, background-color 0.3s ease',
            pointerEvents: isDrawerOpen ? 'auto' : 'none'
          }}
          onClick={() => setIsDrawerOpen(false)}
        />

        {/* Drawer (EXACT old one) */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: isDrawerOpen ? 0 : '-320px',
            width: '320px',
            height: '100%',
            backgroundColor: '#ffffff',
            zIndex: 9999,
            boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.15)',
            transition: 'right 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {/* Drawer Header with User Profile */}
          <div
            style={{
              background: 'linear-gradient(135deg, #2b8cff, #6b6bff)',
              padding: '24px 20px 32px 20px',
              color: 'white',
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '20px'
              }}
            >
              <IonText
                style={{ fontSize: '20px', fontWeight: 700, color: 'white' }}
              >
                Account
              </IonText>
              <IonButton
                fill="clear"
                onClick={() => setIsDrawerOpen(false)}
                style={{
                  '--color': 'white',
                  margin: 0,
                  padding: 0,
                  minWidth: 'auto',
                  height: 'auto'
                }}
              >
                <IonIcon icon={close} style={{ fontSize: '28px' }} />
              </IonButton>
            </div>

            {/* User Profile Section */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.25)',
                  border: '3px solid rgba(255, 255, 255, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <IonIcon
                  icon={personCircle}
                  style={{ fontSize: '50px', color: 'white' }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <IonText
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: 'white',
                    display: 'block',
                    marginBottom: '4px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {user.name || 'Guest User'}
                </IonText>
                <IonText
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    display: 'block',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {user.email || user.phone || 'Tap to add contact'}
                </IonText>
              </div>
            </div>
          </div>

          {/* Drawer Content */}
          <IonContent
            style={
              {
                '--background': '#f8f9fa',
                '--padding-top': '0',
                '--padding-bottom': '0'
              } as React.CSSProperties
            }
            scrollY={true}
          >
            <div style={{ padding: '0' }}>
              {/* Quick Stats Section */}
              <div
                style={{
                  background: 'white',
                  padding: '16px 20px',
                  marginBottom: '8px',
                  display: 'flex',
                  gap: '16px',
                  borderBottom: '1px solid #f0f0f0'
                }}
              >
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <IonText
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#2b8cff',
                      display: 'block'
                    }}
                  >
                    0
                  </IonText>
                  <IonText
                    style={{
                      fontSize: '12px',
                      color: '#666',
                      display: 'block',
                      marginTop: '4px'
                    }}
                  >
                    Appointments
                  </IonText>
                </div>
                <div style={{ width: '1px', background: '#e0e0e0' }} />
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <IonText
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#2b8cff',
                      display: 'block'
                    }}
                  >
                    0
                  </IonText>
                  <IonText
                    style={{
                      fontSize: '12px',
                      color: '#666',
                      display: 'block',
                      marginTop: '4px'
                    }}
                  >
                    Saved
                  </IonText>
                </div>
              </div>

              {/* Main Menu Items */}
              <div
                style={{
                  padding: '8px 0',
                  background: 'white',
                  marginBottom: '8px'
                }}
              >
                <IonItem
                  button
                  lines="none"
                  style={{
                    '--background': 'transparent',
                    '--padding-start': '20px',
                    '--padding-end': '20px',
                    '--inner-padding-end': '0',
                    minHeight: '56px'
                  }}
                >
                  <IonIcon
                    icon={calendar}
                    slot="start"
                    style={{
                      color: '#2b8cff',
                      fontSize: '24px',
                      marginRight: '16px'
                    }}
                  />
                  <IonLabel>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#333',
                        margin: 0
                      }}
                    >
                      My Appointments
                    </h3>
                  </IonLabel>
                </IonItem>

                <IonItem
                  button
                  lines="none"
                  style={{
                    '--background': 'transparent',
                    '--padding-start': '20px',
                    '--padding-end': '20px',
                    '--inner-padding-end': '0',
                    minHeight: '56px'
                  }}
                >
                  <IonIcon
                    icon={documentText}
                    slot="start"
                    style={{
                      color: '#2b8cff',
                      fontSize: '24px',
                      marginRight: '16px'
                    }}
                  />
                  <IonLabel>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#333',
                        margin: 0
                      }}
                    >
                      Medical Records
                    </h3>
                  </IonLabel>
                </IonItem>

                <IonItem
                  button
                  lines="none"
                  style={{
                    '--background': 'transparent',
                    '--padding-start': '20px',
                    '--padding-end': '20px',
                    '--inner-padding-end': '0',
                    minHeight: '56px'
                  }}
                >
                  <IonIcon
                    icon={heart}
                    slot="start"
                    style={{
                      color: '#2b8cff',
                      fontSize: '24px',
                      marginRight: '16px'
                    }}
                  />
                  <IonLabel>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#333',
                        margin: 0
                      }}
                    >
                      Saved Doctors
                    </h3>
                  </IonLabel>
                </IonItem>
              </div>

              {/* Account Section */}
              <div
                style={{
                  padding: '8px 0',
                  background: 'white',
                  marginBottom: '8px'
                }}
              >
                <div style={{ padding: '12px 20px 8px 20px' }}>
                  <IonText
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#999',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Account
                  </IonText>
                </div>
                <IonItem
                  button
                  lines="none"
                  style={{
                    '--background': 'transparent',
                    '--padding-start': '20px',
                    '--padding-end': '20px',
                    '--inner-padding-end': '0',
                    minHeight: '56px'
                  }}
                >
                  <IonIcon
                    icon={personCircle}
                    slot="start"
                    style={{
                      color: '#666',
                      fontSize: '24px',
                      marginRight: '16px'
                    }}
                  />
                  <IonLabel>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#333',
                        margin: 0
                      }}
                    >
                      Profile
                    </h3>
                  </IonLabel>
                </IonItem>

                <IonItem
                  button
                  lines="none"
                  style={{
                    '--background': 'transparent',
                    '--padding-start': '20px',
                    '--padding-end': '20px',
                    '--inner-padding-end': '0',
                    minHeight: '56px'
                  }}
                >
                  <IonIcon
                    icon={wallet}
                    slot="start"
                    style={{
                      color: '#666',
                      fontSize: '24px',
                      marginRight: '16px'
                    }}
                  />
                  <IonLabel>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#333',
                        margin: 0
                      }}
                    >
                      Payments
                    </h3>
                  </IonLabel>
                </IonItem>

                <IonItem
                  button
                  lines="none"
                  style={{
                    '--background': 'transparent',
                    '--padding-start': '20px',
                    '--padding-end': '20px',
                    '--inner-padding-end': '0',
                    minHeight: '56px'
                  }}
                >
                  <IonIcon
                    icon={notifications}
                    slot="start"
                    style={{
                      color: '#666',
                      fontSize: '24px',
                      marginRight: '16px'
                    }}
                  />
                  <IonLabel>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#333',
                        margin: 0
                      }}
                    >
                      Notifications
                    </h3>
                  </IonLabel>
                </IonItem>

                <IonItem
                  button
                  lines="none"
                  style={{
                    '--background': 'transparent',
                    '--padding-start': '20px',
                    '--padding-end': '20px',
                    '--inner-padding-end': '0',
                    minHeight: '56px'
                  }}
                >
                  <IonIcon
                    icon={settings}
                    slot="start"
                    style={{
                      color: '#666',
                      fontSize: '24px',
                      marginRight: '16px'
                    }}
                  />
                  <IonLabel>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#333',
                        margin: 0
                      }}
                    >
                      Settings
                    </h3>
                  </IonLabel>
                </IonItem>
              </div>

              {/* Support Section */}
              <div
                style={{
                  padding: '8px 0',
                  background: 'white',
                  marginBottom: '8px'
                }}
              >
                <div style={{ padding: '12px 20px 8px 20px' }}>
                  <IonText
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#999',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Support
                  </IonText>
                </div>
                <IonItem
                  button
                  lines="none"
                  style={{
                    '--background': 'transparent',
                    '--padding-start': '20px',
                    '--padding-end': '20px',
                    '--inner-padding-end': '0',
                    minHeight: '56px'
                  }}
                >
                  <IonIcon
                    icon={helpCircle}
                    slot="start"
                    style={{
                      color: '#666',
                      fontSize: '24px',
                      marginRight: '16px'
                    }}
                  />
                  <IonLabel>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#333',
                        margin: 0
                      }}
                    >
                      Help & Support
                    </h3>
                  </IonLabel>
                </IonItem>

                <IonItem
                  button
                  lines="none"
                  style={{
                    '--background': 'transparent',
                    '--padding-start': '20px',
                    '--padding-end': '20px',
                    '--inner-padding-end': '0',
                    minHeight: '56px'
                  }}
                >
                  <IonIcon
                    icon={call}
                    slot="start"
                    style={{
                      color: '#666',
                      fontSize: '24px',
                      marginRight: '16px'
                    }}
                  />
                  <IonLabel>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#333',
                        margin: 0
                      }}
                    >
                      Contact Us
                    </h3>
                  </IonLabel>
                </IonItem>
              </div>

              {/* Logout */}
              <div
                style={{
                  padding: '8px 0',
                  background: 'white',
                  marginTop: '8px'
                }}
              >
                <IonItem
                  button
                  lines="none"
                  onClick={handleLogout}
                  style={{
                    '--background': 'transparent',
                    '--padding-start': '20px',
                    '--padding-end': '20px',
                    '--inner-padding-end': '0',
                    minHeight: '56px'
                  }}
                >
                  <IonIcon
                    icon={logOut}
                    slot="start"
                    style={{
                      color: '#ff3b30',
                      fontSize: '24px',
                      marginRight: '16px'
                    }}
                  />
                  <IonLabel>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#ff3b30',
                        margin: 0
                      }}
                    >
                      Logout
                    </h3>
                  </IonLabel>
                </IonItem>
              </div>

              {/* App Version */}
              <div
                style={{
                  padding: '20px',
                  textAlign: 'center',
                  background: '#f8f9fa'
                }}
              >
                <IonText style={{ fontSize: '12px', color: '#999' }}>
                  Version 1.0.0
                </IonText>
              </div>
            </div>
          </IonContent>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomeTab;
