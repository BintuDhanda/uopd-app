import React from 'react';
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
  IonCol
} from '@ionic/react';
import {
  location,
  person,
  heart,
  medical,
  fitness,
  eye,
  apps
} from 'ionicons/icons';

const HomeTab: React.FC = () => {
  const history = useHistory();

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
          <div>
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
      </IonContent>
    </IonPage>
  );
};

export default HomeTab;
