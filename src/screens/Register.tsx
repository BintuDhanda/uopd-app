import {
  IonPage,
  IonContent,
  IonText,
  IonInput,
  IonButton,
  IonIcon
} from "@ionic/react";
import {
  businessOutline,
  personOutline,
  callOutline,
  mailOutline,
  locationOutline,
  cloudUploadOutline,
  cardOutline
} from "ionicons/icons";
import { useState } from "react";

const Register: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <IonPage>
      <IonContent fullscreen className="sales-partner">
        <div className="sales-partner__container">

          {/* Header */}
          <div className="sales-partner__header">
            <div className="sales-partner__logo">
              <IonIcon icon={businessOutline} />
            </div>

            <h1>Sales Partner Registration</h1>
            <p>Join our healthcare network</p>

            <div className="sales-partner__stepper">
              <div className={`step ${step >= 1 ? "active" : ""}`}>1</div>
              <div className={`line ${step === 2 ? "active" : ""}`} />
              <div className={`step ${step === 2 ? "active" : ""}`}>2</div>
            </div>
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <div className="sales-partner__card">
                <IonText className="sales-partner__title">
                  Personal Details
                </IonText>

                <div className="sales-partner__field">
                  <IonText className="label">Full Name *</IonText>
                  <div className="input">
                    <IonIcon icon={personOutline} />
                    <IonInput placeholder="Enter your full name" />
                  </div>
                </div>

                <div className="sales-partner__field">
                  <IonText className="label">Mobile Number *</IonText>
                  <div className="input">
                    <IonIcon icon={callOutline} />
                    <IonInput value="+91 9876543210" />
                  </div>
                </div>

                <div className="sales-partner__field">
                  <IonText className="label">Email Address *</IonText>
                  <div className="input">
                    <IonIcon icon={mailOutline} />
                    <IonInput placeholder="your.email@example.com" />
                  </div>
                </div>

                <div className="sales-partner__field">
                  <IonText className="label">City *</IonText>
                  <div className="input">
                    <IonIcon icon={locationOutline} />
                    <IonInput placeholder="Enter your city" />
                  </div>
                </div>

                <div className="sales-partner__field">
                  <IonText className="label">Referral Code (Optional)</IonText>
                  <div className="input">
                    <IonInput placeholder="Enter referral code" />
                  </div>
                </div>

                <div className="sales-partner__upload">
                  <IonIcon icon={cloudUploadOutline} />
                  <strong>Upload ID Proof</strong>
                  <span>Aadhaar, PAN, or Driver’s License</span>
                </div>
              </div>

              <IonButton
                expand="block"
                className="sales-partner__btn"
                onClick={() => setStep(2)}
              >
                Continue
              </IonButton>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <div className="sales-partner__card">
                <IonText className="sales-partner__title">
                  Bank Account Details
                </IonText>

                <div className="sales-partner__field">
                  <IonText className="label">Account Holder Name *</IonText>
                  <div className="input">
                    <IonIcon icon={personOutline} />
                    <IonInput placeholder="As per bank records" />
                  </div>
                </div>

                <div className="sales-partner__field">
                  <IonText className="label">Bank Name *</IonText>
                  <div className="input">
                    <IonIcon icon={businessOutline} />
                    <IonInput placeholder="Enter bank name" />
                  </div>
                </div>

                <div className="sales-partner__field">
                  <IonText className="label">Account Number *</IonText>
                  <div className="input">
                    <IonIcon icon={cardOutline} />
                    <IonInput placeholder="Enter account number" />
                  </div>
                </div>

                <div className="sales-partner__field">
                  <IonText className="label">IFSC Code *</IonText>
                  <div className="input">
                    <IonInput value="ABCD0123456" />
                  </div>
                </div>

                <div className="info-box">
                  <IonText>
                    Your commission will be transferred to this account after each
                    settlement cycle.
                  </IonText>
                </div>
              </div>

              <div className="sales-partner__actions">
                <IonButton
                  fill="outline"
                  className="sales-partner__btn sales-partner__btn--outline"
                  onClick={() => setStep(1)}
                >
                  Back
                </IonButton>

                <IonButton className="sales-partner__btn">
                  Complete Registration
                </IonButton>
              </div>
            </>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
