import React from 'react';
import {
  IonContent,
  IonPage,
  IonText,
  IonIcon
} from '@ionic/react';
import {
  calendar,
  time,
  location,
  videocam,
  alertCircle,
  checkmarkCircle,
  refresh,
  close
} from 'ionicons/icons';

const MyAppointmentsTab: React.FC = () => {
  return (
    <IonPage>
      <IonContent
        fullscreen
        style={{ '--background': '#f5f6fa' } as React.CSSProperties}
      >
        {/* TOP HEADER */}
        <div
          style={{
            background: '#ffffff',
            padding: '16px 20px 14px',
            borderBottom: '1px solid #e5e7eb'
          }}
        >
          <IonText
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#111827',
              display: 'block',
              marginBottom: '4px'
            }}
          >
            My Appointments
          </IonText>
          <IonText
            style={{
              fontSize: '14px',
              color: '#6b7280'
            }}
          >
            Manage your healthcare schedule
          </IonText>
        </div>

        {/* BODY */}
        <div style={{ padding: '16px 20px 100px' }}>
          {/* STATS CARDS */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginBottom: '20px'
            }}
          >
            <div
              style={{
                flex: 1,
                background: '#2563eb',
                borderRadius: '20px',
                padding: '16px 16px 14px',
                color: '#ffffff',
                boxShadow: '0 10px 25px rgba(37,99,235,0.25)'
              }}
            >
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '4px'
                }}
              >
                2
              </div>
              <div
                style={{
                  fontSize: '14px'
                }}
              >
                Upcoming
              </div>
            </div>

            <div
              style={{
                flex: 1,
                background: '#16a34a',
                borderRadius: '20px',
                padding: '16px 16px 14px',
                color: '#ffffff',
                boxShadow: '0 10px 25px rgba(22,163,74,0.25)'
              }}
            >
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '4px'
                }}
              >
                1
              </div>
              <div
                style={{
                  fontSize: '14px'
                }}
              >
                Completed
              </div>
            </div>
          </div>

          {/* UPCOMING HEADER */}
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
                fontSize: '16px',
                fontWeight: 600,
                color: '#111827'
              }}
            >
              Upcoming
            </IonText>

            <div
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '999px',
                border: '1px solid #f97316',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <IonIcon
                icon={alertCircle}
                style={{ fontSize: '14px', color: '#f97316' }}
              />
            </div>
          </div>

          {/* FIRST UPCOMING APPOINTMENT */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '22px',
              padding: '16px 16px 14px',
              marginBottom: '16px',
              boxShadow: '0 10px 24px rgba(15,23,42,0.08)',
              borderLeft: '3px solid #2563eb'
            }}
          >
            {/* Top doctor row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '12px'
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background:
                    'url(https://images.pexels.com/photos/8376234/pexels-photo-8376234.jpeg?auto=compress&cs=tinysrgb&w=100) center/cover no-repeat',
                  marginRight: '12px'
                }}
              />
              <div style={{ flex: 1 }}>
                <IonText
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#111827',
                    display: 'block',
                    marginBottom: '2px'
                  }}
                >
                  Dr. Ajay Nagpal
                </IonText>
                <IonText
                  style={{
                    fontSize: '14px',
                    color: '#2563eb',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  Physiotherapist
                </IonText>

                <div
                  style={{
                    alignSelf: 'flex-start',
                    background: '#e5f0ff',
                    borderRadius: '999px',
                    padding: '4px 10px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <IonIcon
                    icon={location}
                    style={{ fontSize: '14px', color: '#2563eb' }}
                  />
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#2563eb'
                    }}
                  >
                    In-person
                  </span>
                </div>
              </div>
            </div>

            {/* Date/time/location block */}
            <div
              style={{
                background: '#f9fafb',
                borderRadius: '16px',
                padding: '10px 12px 8px',
                marginBottom: '12px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '6px'
                }}
              >
                <IonIcon
                  icon={calendar}
                  style={{
                    fontSize: '18px',
                    color: '#2563eb',
                    marginRight: '8px'
                  }}
                />
                <span
                  style={{
                    fontSize: '14px',
                    color: '#111827'
                  }}
                >
                  Dec 9, 2025
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '6px'
                }}
              >
                <IonIcon
                  icon={time}
                  style={{
                    fontSize: '18px',
                    color: '#2563eb',
                    marginRight: '8px'
                  }}
                />
                <span
                  style={{
                    fontSize: '14px',
                    color: '#111827'
                  }}
                >
                  09:00 AM
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <IonIcon
                  icon={location}
                  style={{
                    fontSize: '18px',
                    color: '#2563eb',
                    marginRight: '8px'
                  }}
                />
                <span
                  style={{
                    fontSize: '14px',
                    color: '#111827'
                  }}
                >
                  Hisar, Haryana
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '12px'
              }}
            >
              <button
                style={{
                  flex: 1,
                  borderRadius: '16px',
                  border: '1px solid #2563eb',
                  background: '#e5f0ff',
                  padding: '10px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  fontSize: '14px',
                  color: '#2563eb',
                  fontWeight: 500
                }}
              >
                <IonIcon
                  icon={refresh}
                  style={{ fontSize: '16px', color: '#2563eb' }}
                />
                Reschedule
              </button>

              <button
                style={{
                  flex: 1,
                  borderRadius: '16px',
                  border: '1px solid #fecaca',
                  background: '#fff1f2',
                  padding: '10px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  fontSize: '14px',
                  color: '#ef4444',
                  fontWeight: 500
                }}
              >
                <IonIcon
                  icon={close}
                  style={{ fontSize: '16px', color: '#ef4444' }}
                />
                Cancel
              </button>
            </div>
          </div>

          {/* SECOND UPCOMING APPOINTMENT */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '22px',
              padding: '16px 16px 14px',
              marginBottom: '20px',
              boxShadow: '0 10px 24px rgba(15,23,42,0.08)',
              borderLeft: '3px solid #2563eb'
            }}
          >
            {/* Top doctor row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '12px'
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background:
                    'url(https://images.pexels.com/photos/8460099/pexels-photo-8460099.jpeg?auto=compress&cs=tinysrgb&w=100) center/cover no-repeat',
                  marginRight: '12px'
                }}
              />
              <div style={{ flex: 1 }}>
                <IonText
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#111827',
                    display: 'block',
                    marginBottom: '2px'
                  }}
                >
                  Dr. Priya Sharma
                </IonText>
                <IonText
                  style={{
                    fontSize: '14px',
                    color: '#2563eb',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  Cardiologist
                </IonText>

                <div
                  style={{
                    alignSelf: 'flex-start',
                    background: '#e5f0ff',
                    borderRadius: '999px',
                    padding: '4px 10px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <IonIcon
                    icon={videocam}
                    style={{ fontSize: '14px', color: '#2563eb' }}
                  />
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#2563eb'
                    }}
                  >
                    Video Call
                  </span>
                </div>
              </div>
            </div>

            {/* Date/time/location block */}
            <div
              style={{
                background: '#f9fafb',
                borderRadius: '16px',
                padding: '10px 12px 8px',
                marginBottom: '12px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '6px'
                }}
              >
                <IonIcon
                  icon={calendar}
                  style={{
                    fontSize: '18px',
                    color: '#2563eb',
                    marginRight: '8px'
                  }}
                />
                <span
                  style={{
                    fontSize: '14px',
                    color: '#111827'
                  }}
                >
                  Dec 7, 2025
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '6px'
                }}
              >
                <IonIcon
                  icon={time}
                  style={{
                    fontSize: '18px',
                    color: '#2563eb',
                    marginRight: '8px'
                  }}
                />
                <span
                  style={{
                    fontSize: '14px',
                    color: '#111827'
                  }}
                >
                  02:30 PM
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <IonIcon
                  icon={location}
                  style={{
                    fontSize: '18px',
                    color: '#2563eb',
                    marginRight: '8px'
                  }}
                />
                <span
                  style={{
                    fontSize: '14px',
                    color: '#111827'
                  }}
                >
                  Hisar, Haryana
                </span>
              </div>
            </div>

            {/* Buttons: Join, Reschedule, Cancel */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '12px'
                }}
              >
                <button
                  style={{
                    flex: 1,
                    borderRadius: '16px',
                    border: 'none',
                    background: '#16a34a',
                    padding: '10px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    fontSize: '14px',
                    color: '#ffffff',
                    fontWeight: 500
                  }}
                >
                  <IonIcon
                    icon={videocam}
                    style={{ fontSize: '16px', color: '#ffffff' }}
                  />
                  Join Call
                </button>

                <button
                  style={{
                    flex: 1,
                    borderRadius: '16px',
                    border: '1px solid #2563eb',
                    background: '#e5f0ff',
                    padding: '10px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    fontSize: '14px',
                    color: '#2563eb',
                    fontWeight: 500
                  }}
                >
                  <IonIcon
                    icon={refresh}
                    style={{ fontSize: '16px', color: '#2563eb' }}
                  />
                  Reschedule
                </button>
              </div>

              <button
                style={{
                  borderRadius: '16px',
                  border: '1px solid #fecaca',
                  background: '#fff1f2',
                  padding: '10px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  fontSize: '14px',
                  color: '#ef4444',
                  fontWeight: 500
                }}
              >
                <IonIcon
                  icon={close}
                  style={{ fontSize: '16px', color: '#ef4444' }}
                />
                Cancel
              </button>
            </div>
          </div>

          {/* PAST APPOINTMENTS HEADER */}
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
                fontSize: '16px',
                fontWeight: 600,
                color: '#111827'
              }}
            >
              Past Appointments
            </IonText>

            <div
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '999px',
                border: '1px solid #22c55e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <IonIcon
                icon={checkmarkCircle}
                style={{ fontSize: '14px', color: '#22c55e' }}
              />
            </div>
          </div>

          {/* PAST APPOINTMENT CARD */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '22px',
              padding: '16px 16px 14px',
              marginBottom: '20px',
              boxShadow: '0 10px 24px rgba(15,23,42,0.06)',
              borderLeft: '3px solid #22c55e'
            }}
          >
            {/* Top row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '12px'
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background:
                    'url(https://images.pexels.com/photos/8460152/pexels-photo-8460152.jpeg?auto=compress&cs=tinysrgb&w=100) center/cover no-repeat',
                  marginRight: '12px'
                }}
              />
              <div style={{ flex: 1 }}>
                <IonText
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#111827',
                    display: 'block',
                    marginBottom: '2px'
                  }}
                >
                  Dr. Rahul Verma
                </IonText>
                <IonText
                  style={{
                    fontSize: '14px',
                    color: '#4b5563',
                    display: 'block',
                    marginBottom: '6px'
                  }}
                >
                  Orthopedic Surgeon
                </IonText>
              </div>

              <div
                style={{
                  background: '#dcfce7',
                  borderRadius: '999px',
                  padding: '4px 10px',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#15803d'
                  }}
                >
                  Completed
                </span>
              </div>
            </div>

            {/* Date/time row (compact) */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                marginBottom: '12px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <IonIcon
                  icon={calendar}
                  style={{ fontSize: '18px', color: '#4b5563' }}
                />
                <span
                  style={{
                    fontSize: '14px',
                    color: '#111827'
                  }}
                >
                  Nov 28, 2025
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <IonIcon
                  icon={time}
                  style={{ fontSize: '18px', color: '#4b5563' }}
                />
                <span
                  style={{
                    fontSize: '14px',
                    color: '#111827'
                  }}
                >
                  11:00 AM
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '12px'
              }}
            >
              <button
                style={{
                  flex: 1,
                  borderRadius: '16px',
                  border: '1px solid #bfdbfe',
                  background: '#eff6ff',
                  padding: '10px 0',
                  fontSize: '14px',
                  color: '#2563eb',
                  fontWeight: 500
                }}
              >
                View Details
              </button>

              <button
                style={{
                  flex: 1,
                  borderRadius: '16px',
                  border: '1px solid #bbf7d0',
                  background: '#dcfce7',
                  padding: '10px 0',
                  fontSize: '14px',
                  color: '#16a34a',
                  fontWeight: 500
                }}
              >
                Book Again
              </button>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MyAppointmentsTab;
