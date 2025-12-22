import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonIcon,
    IonButton,
    IonText
  } from '@ionic/react';
  import {
    calendarOutline,
    timeOutline,
    star,
    locationOutline,
    chevronBack
  } from 'ionicons/icons';
  
  const BookAppointment: React.FC = () => {
    return (
      <IonPage className="book-appointment">
        {/* HEADER */}
        <IonHeader className="book-appointment__header">
          <IonToolbar className="book-appointment__toolbar">
            <div className="book-appointment__header-inner">
              <div className="book-appointment__header-row">
                <IonButton
                  fill="clear"
                  className="book-appointment__back-button"
                  onClick={() => window.history.back()}
                  aria-label="Go back"
                >
                  <IonIcon icon={chevronBack} />
                </IonButton>
  
                <div className="book-appointment__header-text">
                  <IonText className="book-appointment__header-title">
                    Book Appointment
                  </IonText>
                  <IonText className="book-appointment__header-subtitle">
                    Schedule your consultation
                  </IonText>
                </div>
              </div>
            </div>
          </IonToolbar>
        </IonHeader>
  
        {/* CONTENT */}
        <IonContent fullscreen className="book-appointment__content">
          <div className="book-appointment__container">
  
            {/* DOCTOR CARD */}
            <div className="book-appointment__doctor-card">
              <div className="book-appointment__doctor-main">
                <div
                  className="book-appointment__doctor-avatar"
                  style={{
                    backgroundImage:
                      'url(https://images.pexels.com/photos/8376234/pexels-photo-8376234.jpeg?auto=compress&cs=tinysrgb&w=400)'
                  }}
                />
  
                <div className="book-appointment__doctor-content">
                  <h2 className="book-appointment__doctor-name">
                    Dr. Ajay Nagpal
                  </h2>
  
                  <div className="book-appointment__doctor-speciality">
                    Physiotherapist
                  </div>
  
                  <div className="book-appointment__doctor-meta">
                    <div className="book-appointment__doctor-rating">
                      <IonIcon icon={star} />
                      <span>4.8</span>
                    </div>
  
                    <div className="book-appointment__doctor-experience">
                      <IonIcon icon={timeOutline} />
                      <span>10 Years</span>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="book-appointment__doctor-footer">
                <div className="book-appointment__doctor-divider" />
                <div className="book-appointment__doctor-location">
                  <IonIcon icon={locationOutline} />
                  <span>Hisar, Haryana</span>
                </div>
              </div>
            </div>
  
            {/* SELECT DATE */}
            <div className="book-appointment__card">
              <div className="book-appointment__section-title">
                <IonIcon className="book-appointment__section-icon" icon={calendarOutline} />
                Select Date
              </div>
  
              <p className="book-appointment__month">December 2025</p>
  
              <div className="book-appointment__date-scroll">
                <div className="book-appointment__date-row">
                  <div className="book-appointment__date-pill book-appointment__date-pill--active">
                    <span>Fri</span>
                    <strong>6</strong>
                  </div>
                  <div className="book-appointment__date-pill">
                    <span>Sat</span>
                    <strong>7</strong>
                  </div>
                  <div className="book-appointment__date-pill book-appointment__date-pill--disabled">
                    <span>Sun</span>
                    <strong>8</strong>
                  </div>
                  <div className="book-appointment__date-pill">
                    <span>Mon</span>
                    <strong>9</strong>
                  </div>
                  <div className="book-appointment__date-pill">
                    <span>Tue</span>
                    <strong>10</strong>
                  </div>
                </div>
  
                <div className="book-appointment__date-indicator" />
              </div>
            </div>
  
            {/* TIME SLOTS */}
            <div className="book-appointment__card">
              <div className="book-appointment__section-title">
                <IonIcon className="book-appointment__section-icon" icon={timeOutline} />
                Select Time Slot
              </div>
  
              <h4 className="book-appointment__slot-heading">Morning</h4>
              <div className="book-appointment__slot-grid">
                {['09:00 AM','09:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM'].map(t => (
                  <button key={t} className="book-appointment__slot">{t}</button>
                ))}
              </div>
  
              <h4 className="book-appointment__slot-heading">Afternoon</h4>
              <div className="book-appointment__slot-grid">
                {['02:00 PM','02:30 PM','03:00 PM','03:30 PM','04:00 PM','04:30 PM'].map(t => (
                  <button key={t} className="book-appointment__slot">{t}</button>
                ))}
              </div>
            </div>
  
            {/* FEE */}
            <div className="book-appointment__fee-card">
              <div className="book-appointment__fee-info">
                <span className="book-appointment__fee-label">Consultation Fee</span>
                <span className="book-appointment__fee-amount">₹500</span>
              </div>
              <span className="book-appointment__fee-discount">20% OFF</span>
            </div>
  
            {/* CONFIRM BUTTON */}
            <IonButton
              expand="block"
              disabled
              className="book-appointment__confirm-button"
            >
              Confirm Appointment
            </IonButton>
  
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default BookAppointment;
  