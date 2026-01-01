import {
  IonPage,
  IonContent,
  IonIcon,
  IonButton
} from "@ionic/react";
import {
  personOutline,
  locationOutline,
  calendarOutline,
  callOutline,
  mailOutline,
  saveOutline
} from "ionicons/icons";

import Header from "../components/common/Header";
import { useHeader } from "../hooks/useHeader";
import TextField from "../components/core/TextField";
import SelectField from "../components/core/SelectField";
import { useForm } from "../hooks/useForm";
import { validateManageProfile } from "../validation/manageProfile.validation";

const ManageProfile: React.FC = () => {
  const header = useHeader({
    title: "Manage Profile",
    subtitle: "Update your personal details"
  });

  const { values, errors, setField, submit } = useForm(
    {
      fullName: "Balwant Singh",
      email: "balwant.singh@email.com",
      phone: "+1 234-567-8900",
      dob: "",
      gender: "Male",
      bloodGroup: "O+",
      address: "123 Main Street, New York, NY 10001",
      emergencyName: "Jane Singh",
      emergencyPhone: "+1 234-567-8901",
      allergies: "Penicillin",
      chronicConditions: "None",
      insuranceProvider: "Blue Cross Blue Shield",
      insuranceNumber: "BCBS-123456789"
    },
    validateManageProfile
  );

  const handleSave = () => {
    submit(() => {
      console.log("Saving profile", values);
    });
  };

  return (
    <IonPage>
      <Header
        title={header.title}
        subtitle={header.subtitle}
        rightContent={
          <IonButton className="header-save-btn" onClick={handleSave}>
            <IonIcon icon={saveOutline} slot="start" />
            Save
          </IonButton>
        }
      />

      <IonContent fullscreen className="manage-profile">
        {/* PERSONAL INFO */}
        <div className="card">
          <div className="card-title">
            <IonIcon icon={personOutline} />
            <span>Personal Information</span>
          </div>

          <TextField
            label="Full Name"
            required
            value={values.fullName}
            onChange={(v) => setField("fullName", v)}
            leftIcon={personOutline}
            error={errors.fullName}
          />

          <TextField
            label="Email"
            value={values.email}
            onChange={(v) => setField("email", v)}
            leftIcon={mailOutline}
            error={errors.email}
          />

          <TextField
            label="Phone"
            value={values.phone}
            onChange={(v) => setField("phone", v)}
            leftIcon={callOutline}
            error={errors.phone}
          />

          <div className="row">
            <TextField
              label="Date of Birth"
              type="date"
              value={values.dob}
              onChange={(v) => setField("dob", v)}
              leftIcon={calendarOutline}
              error={errors.dob}
            />

            <SelectField
              label="Gender"
              value={values.gender}
              required
              onChange={(v) => setField("gender", v)}
              options={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" }
              ]}
              error={errors.gender}
            />
          </div>

          <SelectField
            label="Blood Group"
            value={values.bloodGroup}
            required
            onChange={(v) => setField("bloodGroup", v)}
            options={[
              { label: "O+", value: "O+" },
              { label: "A+", value: "A+" },
              { label: "B+", value: "B+" }
            ]}
            error={errors.bloodGroup}
          />
        </div>

        {/* CONTACT INFO */}
        <div className="card">
          <div className="card-title green">
            <IonIcon icon={locationOutline} />
            <span>Contact Information</span>
          </div>

          <TextField
            label="Address"
            value={values.address}
            onChange={(v) => setField("address", v)}
            error={errors.address}
          />

          <TextField
            label="Emergency Contact Name"
            value={values.emergencyName}
            onChange={(v) => setField("emergencyName", v)}
            error={errors.emergencyName}
          />

          <TextField
            label="Emergency Contact Phone"
            value={values.emergencyPhone}
            onChange={(v) => setField("emergencyPhone", v)}
            error={errors.emergencyPhone}
          />
        </div>

        {/* MEDICAL INFO */}
        <div className="card">
          <div className="card-title green">
            <span>Medical Information</span>
          </div>

          <TextField
            label="Allergies"
            value={values.allergies}
            onChange={(v) => setField("allergies", v)}
          />

          <TextField
            label="Chronic Conditions"
            value={values.chronicConditions}
            onChange={(v) => setField("chronicConditions", v)}
          />
        </div>

        {/* INSURANCE */}
        <div className="card">
          <div className="card-title green">
            <span>Insurance Information</span>
          </div>

          <TextField
            label="Insurance Provider"
            value={values.insuranceProvider}
            onChange={(v) => setField("insuranceProvider", v)}
          />

          <TextField
            label="Insurance Number"
            value={values.insuranceNumber}
            onChange={(v) => setField("insuranceNumber", v)}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ManageProfile;
