// src/screens/SearchResultsScreen.tsx
import React from 'react';
import {
  IonPage,
  IonContent,
  IonIcon,
  IonText
} from '@ionic/react';
import {
  chevronBack,
  funnelOutline,
  locationOutline,
  star,
  timeOutline,
  ribbonOutline
} from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

type SearchResult =
  | {
      kind: 'hospital';
      id: number;
      imageUrl: string;
      name: string;
      city: string;
      rating: string;
      reviews: string;
    }
  | {
      kind: 'doctor';
      id: number;
      imageUrl: string;
      name: string;
      speciality: string;
      degree: string;
      rating: string;
      experience: string;
      city: string;
    };

const results: SearchResult[] = [
  {
    kind: 'hospital',
    id: 1,
    imageUrl:
      'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: 'Saryodya Multispeciality Hospital',
    city: 'Hisar, Haryana',
    rating: '4.7',
    reviews: '500+ reviews'
  },
  {
    kind: 'doctor',
    id: 2,
    imageUrl:
      'https://images.pexels.com/photos/8376234/pexels-photo-8376234.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: 'Dr. Ajay Nagpal',
    speciality: 'Physiotherapist',
    degree: 'MBBS (AIIMS), MPT',
    rating: '4.8',
    experience: '10 Years',
    city: 'Hisar, Haryana'
  },
  {
    kind: 'doctor',
    id: 3,
    imageUrl:
      'https://images.pexels.com/photos/8460099/pexels-photo-8460099.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: 'Dr. Priya Sharma',
    speciality: 'Cardiologist',
    degree: 'MBBS, MD (Cardiology)',
    rating: '4.8',
    experience: '15 Years',
    city: 'Hisar, Haryana'
  },
  {
    kind: 'hospital',
    id: 4,
    imageUrl:
      'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: 'Apollo Medical Center',
    city: 'Hisar, Haryana',
    rating: '4.7',
    reviews: '500+ reviews'
  },
  {
    kind: 'doctor',
    id: 5,
    imageUrl:
      'https://images.pexels.com/photos/8460152/pexels-photo-8460152.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: 'Dr. Rahul Verma',
    speciality: 'Orthopedic Surgeon',
    degree: 'MBBS, MS (Ortho)',
    rating: '4.8',
    experience: '12 Years',
    city: 'Hisar, Haryana'
  }
];

const SearchResultsScreen: React.FC = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <IonPage>
      <IonContent
        fullscreen
        style={{ '--background': '#f5f6fa' } as React.CSSProperties}
      >
        {/* HEADER */}
        <div
          style={{
            background: '#ffffff',
            padding: '14px 20px 12px',
            borderBottom: '1px solid #e5e7eb',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <button
              onClick={goBack}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '999px',
                border: 'none',
                background: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                cursor: 'pointer'
              }}
            >
              <IonIcon
                icon={chevronBack}
                style={{ fontSize: '22px', color: '#111827' }}
              />
            </button>

            <div>
              <IonText
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#111827',
                  display: 'block',
                  marginBottom: '6px'
                }}
              >
                Search Results
              </IonText>
              <IonText
                style={{
                  fontSize: '14px',
                  color: '#6b7280'
                }}
              >
                5 results found
              </IonText>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div style={{ padding: '16px 16px 100px' }}>
          {/* FILTERS & SORT PILL – flat, like figma */}
          <div
            style={{
              background: '#f5f6fa',
              borderRadius: '18px',
              padding: '11px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '18px',
              border: '1px solid #f3f4f6'
            }}
          >
            <IonIcon
              icon={funnelOutline}
              style={{ fontSize: '18px', color: '#2563eb', marginRight: '8px' }}
            />
            <IonText
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: '#374151'
              }}
            >
              Filters &amp; Sort
            </IonText>
          </div>

          {/* RESULT CARDS (reusable) */}
          {results.map(result => (
            <ResultCard key={result.id} result={result} />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

/* ========== REUSABLE RESULT CARD COMPONENT ========== */

const cardBaseStyle: React.CSSProperties = {
  background: '#ffffff',
  borderRadius: '14px',
  padding: '16px 16px 14px',
  marginBottom: '18px',
  boxShadow: '0 18px 36px rgba(15,23,42,0.08)'
};

interface ResultCardProps {
  result: SearchResult;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  const isHospital = result.kind === 'hospital';

  return (
    <div style={cardBaseStyle}>
      {/* TOP ROW: image + main info */}
      <div
        style={{
          display: 'flex',
          marginBottom: '6px'
        }}
      >
        <div
          style={{
            width: '76px',
            height: '76px',
            borderRadius: '14px',
            overflow: 'hidden',
            background: `url(${result.imageUrl}) center/cover no-repeat`,
            marginRight: '12px'
          }}
        />
        <div style={{ flex: 1 }}>
          <IonText
            style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#111827',
              display: 'block',
              marginBottom: isHospital ? '10px' : '6px'
            }}
          >
            {result.name}
          </IonText>

          {isHospital ? (
            <>
              {/* Hospital: location + rating */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '14px',
                  color: '#4b5563',
                  marginBottom: '6px'
                }}
              >
                <IonIcon
                  icon={locationOutline}
                  style={{
                    fontSize: '16px',
                    color: '#6b7280',
                    marginRight: '6px'
                  }}
                />
                <span>{result.city}</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '14px',
                  color: '#4b5563'
                }}
              >
                <IonIcon
                  icon={star}
                  style={{
                    fontSize: '16px',
                    color: '#fbbf24',
                    marginRight: '4px'
                  }}
                />
                <span style={{ marginRight: '12px' }}>{result.rating}</span>
                <span>{result.reviews}</span>
              </div>
            </>
          ) : (
            <>
              {/* Doctor: speciality */}
              <IonText
                style={{
                  fontSize: '14px',
                  color: '#2563eb',
                  display: 'block',
                  marginBottom: '6px'
                }}
              >
                {result.speciality}
              </IonText>

              {/* Doctor: degree */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '13px',
                  color: '#4b5563',
                  marginBottom: '6px'
                }}
              >
                <IonIcon
                  icon={ribbonOutline}
                  style={{
                    fontSize: '16px',
                    color: '#16a34a',
                    marginRight: '6px'
                  }}
                />
                <span>{result.degree}</span>
              </div>

              {/* Doctor: rating + experience */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '13px',
                  color: '#4b5563'
                }}
              >
                <IonIcon
                  icon={star}
                  style={{
                    fontSize: '16px',
                    color: '#fbbf24',
                    marginRight: '4px'
                  }}
                />
                <span style={{ marginRight: '12px' }}>{result.rating}</span>
                <IonIcon
                  icon={timeOutline}
                  style={{
                    fontSize: '16px',
                    color: '#6b7280',
                    marginRight: '4px'
                  }}
                />
                <span>{result.experience}</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Location row (doctors only, hospitals already show it above) */}
      {!isHospital && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '14px',
            color: '#4b5563',
            marginBottom: '6px'
          }}
        >
          <IonIcon
            icon={locationOutline}
            style={{ fontSize: '16px', color: '#6b7280', marginRight: '6px' }}
          />
          <span>{result.city}</span>
        </div>
      )}

      {/* BUTTON ROW */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          marginTop: isHospital ? '10px' : '6px'
        }}
      >
        {isHospital ? (
          <>
            <button
              style={{
                flex: 1,
                borderRadius: '14px',
                border: 'none',
                background: '#2563eb',
                padding: '12px 0',
                fontSize: '15px',
                color: '#ffffff',
                fontWeight: 600,
                boxShadow: '0 16px 32px rgba(37,99,235,0.35)'
              }}
            >
              View Doctors
            </button>
            <button
              style={{
                flex: 1,
                borderRadius: '14px',
                border: 'none',
                background: '#dc2626',
                padding: '12px 0',
                fontSize: '15px',
                color: '#ffffff',
                fontWeight: 600,
                boxShadow: '0 16px 32px rgba(220,38,38,0.3)'
              }}
            >
              Emergency
            </button>
          </>
        ) : (
          <>
            <button
              style={{
                flex: 1,
                borderRadius: '14px',
                border: 'none',
                background: '#2563eb',
                padding: '12px 0',
                fontSize: '15px',
                color: '#ffffff',
                fontWeight: 600,
                boxShadow: '0 16px 32px rgba(37,99,235,0.35)'
              }}
            >
              Book Appointment
            </button>
            <button
              style={{
                flex: 1,
                borderRadius: '14px',
                border: '1px solid #2563eb',
                background: '#ffffff',
                padding: '12px 0',
                fontSize: '15px',
                color: '#2563eb',
                fontWeight: 600
              }}
            >
              View Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResultsScreen;
