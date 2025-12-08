import React, { useState } from 'react';
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
  IonList,
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
  star,
  card,
  shieldCheckmark,
  call,
  mail
} from 'ionicons/icons';

interface HomeTabProps {
  onLogout?: () => void;
}

const HomeTab: React.FC<HomeTabProps> = ({ onLogout }) => {
  const history = useHistory();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Get user from localStorage
  const getUser = () => {
    try {
      const userStr = localStorage.getItem("user");
      return userStr ? JSON.parse(userStr) : { name: "User" };
    } catch {
      return { name: "User" };
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

  const serviceCategories = [
    { name: 'Cardiology', icon: heart },
    { name: 'Dentist', icon: medical },
    { name: 'Gynochlogy', icon: medical },
    { name: 'Physiotherepy', icon: fitness },
    { name: 'Orthonology', icon: eye },
    { name: 'All', icon: apps }
  ];

  return (
    <IonPage>
      <IonContent style={{ '--background': '#f5f5f5' } as React.CSSProperties} fullscreen>
        {/* Top Section: Location and User */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 20px',
          background: 'linear-gradient(135deg, #2b8cff, #6b6bff)',
          color: 'white'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IonIcon icon={location} style={{ fontSize: '20px', color: 'white' }} />
            <IonText style={{ fontSize: '16px', fontWeight: 500, color: 'white' }}>
              Hisar, Haryana
            </IonText>
          </div>
          <div 
            onClick={() => setIsDrawerOpen(true)}
            style={{ cursor: 'pointer' }}
          >
            <IonIcon icon={person} style={{ fontSize: '28px', color: 'white' }} />
          </div>
        </div>

        {/* Search Bar */}
        <div style={{ padding: '16px 20px', background: 'white' }}>
          <IonSearchbar
            placeholder="Search Doctor, Hospital & Labs"
            onClick={goToSearch}
            onIonFocus={goToSearch}
            style={{
              '--background': '#f0f0f0',
              '--border-radius': '12px',
              '--box-shadow': 'none',
              '--placeholder-color': '#666'
            } as React.CSSProperties}
          />
        </div>

        {/* Offers/Slider Section */}
        <div style={{ padding: '0 20px 20px 20px' }}>
          <IonCard style={{
            margin: 0,
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            background: 'linear-gradient(135deg, #2b8cff, #6b6bff)',
            minHeight: '180px'
          }}>
            <IonCardContent style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '180px',
              padding: '20px'
            }}>
              <IonText style={{ color: 'white', fontSize: '18px', fontWeight: 500 }}>
                Offers/ Slider
              </IonText>
            </IonCardContent>
          </IonCard>
        </div>

        {/* Service Categories */}
        <div style={{ padding: '0 20px 100px 20px', background: 'white' }}>
          <IonGrid>
            <IonRow>
              {serviceCategories.map((category, index) => (
                <IonCol size="4" key={index}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    width: '100%',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #2b8cff, #6b6bff)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(43, 140, 255, 0.3)'
                    }}>
                      <IonIcon icon={category.icon} style={{ fontSize: '32px', color: 'white' }} />
                    </div>
                    <IonText style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#2b8cff',
                      textAlign: 'center',
                      wordBreak: 'break-word'
                    }}>
                      {category.name}
                    </IonText>
                  </div>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </div>

        {/* Drawer Overlay */}
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

        {/* Drawer */}
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
          <div style={{
            background: 'linear-gradient(135deg, #2b8cff, #6b6bff)',
            padding: '24px 20px 32px 20px',
            color: 'white',
            position: 'relative'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '20px'
            }}>
              <IonText style={{ fontSize: '20px', fontWeight: 700, color: 'white' }}>
                Account
              </IonText>
              <IonButton
                fill="clear"
                onClick={() => setIsDrawerOpen(false)}
                style={{ '--color': 'white', margin: 0, padding: 0, minWidth: 'auto', height: 'auto' }}
              >
                <IonIcon icon={close} style={{ fontSize: '28px' }} />
              </IonButton>
            </div>

            {/* User Profile Section */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.25)',
                border: '3px solid rgba(255, 255, 255, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <IonIcon icon={personCircle} style={{ fontSize: '50px', color: 'white' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <IonText style={{ 
                  fontSize: '20px', 
                  fontWeight: 600, 
                  color: 'white', 
                  display: 'block',
                  marginBottom: '4px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {user.name || 'Guest User'}
                </IonText>
                <IonText style={{ 
                  fontSize: '14px', 
                  color: 'rgba(255, 255, 255, 0.9)',
                  display: 'block',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {user.email || user.phone || 'Tap to add contact'}
                </IonText>
              </div>
            </div>
          </div>

          {/* Drawer Content */}
          <IonContent 
            style={{ 
              '--background': '#f8f9fa',
              '--padding-top': '0',
              '--padding-bottom': '0'
            } as React.CSSProperties}
            scrollY={true}
          >
            <div style={{ padding: '0' }}>
              {/* Quick Stats Section */}
              <div style={{
                background: 'white',
                padding: '16px 20px',
                marginBottom: '8px',
                display: 'flex',
                gap: '16px',
                borderBottom: '1px solid #f0f0f0'
              }}>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <IonText style={{ fontSize: '20px', fontWeight: 700, color: '#2b8cff', display: 'block' }}>
                    0
                  </IonText>
                  <IonText style={{ fontSize: '12px', color: '#666', display: 'block', marginTop: '4px' }}>
                    Appointments
                  </IonText>
                </div>
                <div style={{ width: '1px', background: '#e0e0e0' }} />
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <IonText style={{ fontSize: '20px', fontWeight: 700, color: '#2b8cff', display: 'block' }}>
                    0
                  </IonText>
                  <IonText style={{ fontSize: '12px', color: '#666', display: 'block', marginTop: '4px' }}>
                    Saved
                  </IonText>
                </div>
              </div>

              {/* Main Menu Items */}
              <div style={{ padding: '8px 0', background: 'white', marginBottom: '8px' }}>
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
                  <IonIcon icon={calendar} slot="start" style={{ color: '#2b8cff', fontSize: '24px', marginRight: '16px' }} />
                  <IonLabel>
                    <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#333', margin: 0 }}>My Appointments</h3>
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
                  <IonIcon icon={documentText} slot="start" style={{ color: '#2b8cff', fontSize: '24px', marginRight: '16px' }} />
                  <IonLabel>
                    <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#333', margin: 0 }}>Medical Records</h3>
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
                  <IonIcon icon={heart} slot="start" style={{ color: '#2b8cff', fontSize: '24px', marginRight: '16px' }} />
                  <IonLabel>
                    <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#333', margin: 0 }}>Saved Doctors</h3>
                  </IonLabel>
                </IonItem>
              </div>

              {/* Account Section */}
              <div style={{ padding: '8px 0', background: 'white', marginBottom: '8px' }}>
                <div style={{ padding: '12px 20px 8px 20px' }}>
                  <IonText style={{ fontSize: '12px', fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
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
                  <IonIcon icon={personCircle} slot="start" style={{ color: '#666', fontSize: '24px', marginRight: '16px' }} />
                  <IonLabel>
                    <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#333', margin: 0 }}>Profile</h3>
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
                  <IonIcon icon={wallet} slot="start" style={{ color: '#666', fontSize: '24px', marginRight: '16px' }} />
                  <IonLabel>
                    <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#333', margin: 0 }}>Payments</h3>
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
                  <IonIcon icon={notifications} slot="start" style={{ color: '#666', fontSize: '24px', marginRight: '16px' }} />
                  <IonLabel>
                    <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#333', margin: 0 }}>Notifications</h3>
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
                  <IonIcon icon={settings} slot="start" style={{ color: '#666', fontSize: '24px', marginRight: '16px' }} />
                  <IonLabel>
                    <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#333', margin: 0 }}>Settings</h3>
                  </IonLabel>
                </IonItem>
              </div>

              {/* Support Section */}
              <div style={{ padding: '8px 0', background: 'white', marginBottom: '8px' }}>
                <div style={{ padding: '12px 20px 8px 20px' }}>
                  <IonText style={{ fontSize: '12px', fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
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
                  <IonIcon icon={helpCircle} slot="start" style={{ color: '#666', fontSize: '24px', marginRight: '16px' }} />
                  <IonLabel>
                    <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#333', margin: 0 }}>Help & Support</h3>
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
                  <IonIcon icon={call} slot="start" style={{ color: '#666', fontSize: '24px', marginRight: '16px' }} />
                  <IonLabel>
                    <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#333', margin: 0 }}>Contact Us</h3>
                  </IonLabel>
                </IonItem>
              </div>

              {/* Logout */}
              <div style={{ padding: '8px 0', background: 'white', marginTop: '8px' }}>
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
                  <IonIcon icon={logOut} slot="start" style={{ color: '#ff3b30', fontSize: '24px', marginRight: '16px' }} />
                  <IonLabel>
                    <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#ff3b30', margin: 0 }}>Logout</h3>
                  </IonLabel>
                </IonItem>
              </div>

              {/* App Version */}
              <div style={{ 
                padding: '20px',
                textAlign: 'center',
                background: '#f8f9fa'
              }}>
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
