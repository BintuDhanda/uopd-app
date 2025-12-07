// src/pages/SearchResultsScreen.tsx
import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonBadge
} from '@ionic/react';
import { useNavigate } from 'react-router-dom';

const SearchResultsScreen: React.FC = () => {
  const navigate = useNavigate();

  const results: Array<
    | { type: 'doctor'; id: number; name: string; spec: string; distance?: string }
    | { type: 'hospital'; id: number; name: string; address?: string; distance?: string }
  > = [
    { type: 'doctor', id: 1, name: 'Dr. A. Sharma', spec: 'Dentist', distance: '1.2 km' },
    { type: 'hospital', id: 10, name: 'City Hospital', address: 'MG Road', distance: '2.5 km' },
    { type: 'doctor', id: 2, name: 'Dr. R. Verma', spec: 'Cardiologist', distance: '3.0 km' },
    { type: 'hospital', id: 11, name: 'HealthCare Clinic', address: 'Main St', distance: '4.1 km' },
  ];

  const onBookOPD = (doctorId: number) => {
    navigate('/tabs/appointments?doctor=' + doctorId);
  };

  const onViewHospitalDoctors = (hospitalId: number) => {
    navigate('/tabs/doctors?hospital=' + hospitalId);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search Results</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          {results.map(r =>
            r.type === 'doctor' ? (
              <IonItem key={`d-${r.id}`}>
                <IonLabel>
                  <h3>{r.name}</h3>
                  <p>{r.spec} {r.distance ? `— ${r.distance}` : ''}</p>
                </IonLabel>
                <IonBadge slot="end">{r.spec}</IonBadge>
                <IonButton slot="end" onClick={() => onBookOPD(r.id)}>Book OPD</IonButton>
              </IonItem>
            ) : (
              <IonItem key={`h-${r.id}`}>
                <IonLabel>
                  <h3>{r.name}</h3>
                  <p>{r.address ? r.address + ' • ' : ''}{r.distance ? r.distance : ''}</p>
                </IonLabel>
                <IonButton slot="end" onClick={() => onViewHospitalDoctors(r.id)}>View Doctors</IonButton>
              </IonItem>
            )
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SearchResultsScreen;
