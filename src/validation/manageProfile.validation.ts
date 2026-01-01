/* =========================================================
   Manage Profile – Validation
   ========================================================= */

export interface ManageProfileFormValues {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  bloodGroup: string;
  address: string;
  emergencyName: string;
  emergencyPhone: string;

  // Optional medical / insurance fields
  allergies?: string;
  chronicConditions?: string;
  insuranceProvider?: string;
  insuranceNumber?: string;
}

export const validateManageProfile = (
  values: ManageProfileFormValues
): Record<string, string> => {
  const errors: Record<string, string> = {};

  /* ---------- PERSONAL INFORMATION ---------- */

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
  ) {
    errors.email = "Enter a valid email address";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (
    !/^[0-9+\-\s]{8,15}$/.test(values.phone)
  ) {
    errors.phone = "Enter a valid phone number";
  }

  if (!values.dob) {
    errors.dob = "Date of birth is required";
  }

  if (!values.gender) {
    errors.gender = "Gender is required";
  }

  if (!values.bloodGroup) {
    errors.bloodGroup = "Blood group is required";
  }

  /* ---------- CONTACT INFORMATION ---------- */

  if (!values.address.trim()) {
    errors.address = "Address is required";
  }

  if (!values.emergencyName.trim()) {
    errors.emergencyName = "Emergency contact name is required";
  }

  if (!values.emergencyPhone.trim()) {
    errors.emergencyPhone = "Emergency contact phone is required";
  } else if (
    !/^[0-9+\-\s]{8,15}$/.test(values.emergencyPhone)
  ) {
    errors.emergencyPhone = "Enter a valid emergency phone number";
  }

  /* ---------- MEDICAL INFORMATION (OPTIONAL) ---------- */
  // No required validation – optional fields

  /* ---------- INSURANCE INFORMATION (OPTIONAL) ---------- */
  // Add validation here later if required by business rules

  return errors;
};
