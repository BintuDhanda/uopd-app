import { isRequired, isEmail, isPhone, minLength } from "./rules";

export interface SignupFormValues {
  fullName: string;
  identifier: string;
  password: string;
  confirmPassword: string;
}

export const validateSignup = (
  values: SignupFormValues
): Record<string, string> => {
  const errors: Record<string, string> = {};

  const nameRequired = isRequired(values.fullName);
  if (nameRequired) {
    errors.fullName = nameRequired;
  }

  const identifierRequired = isRequired(values.identifier);
  if (identifierRequired) {
    errors.identifier = "Email or mobile number is required";
  } else {
    const emailValid = !isEmail(values.identifier);
    const phoneValid = !isPhone(values.identifier);

    if (!emailValid && !phoneValid) {
      errors.identifier = "Enter a valid email or mobile number";
    }
  }

  const passwordRequired = isRequired(values.password);
  if (passwordRequired) {
    errors.password = passwordRequired;
  } else {
    const passwordLength = minLength(values.password, 6);
    if (passwordLength) {
      errors.password = passwordLength;
    }
  }

  const confirmRequired = isRequired(values.confirmPassword);
  if (confirmRequired) {
    errors.confirmPassword = confirmRequired;
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};
