import { isRequired, isEmail } from "./rules";

export interface LoginFormValues {
  email: string;
  password: string;
}

export const validateLogin = (
  values: LoginFormValues
): Record<string, string> => {
  const errors: Record<string, string> = {};

  const emailRequired = isRequired(values.email);
  if (emailRequired) {
    errors.email = emailRequired;
  } else {
    const emailInvalid = isEmail(values.email);
    if (emailInvalid) errors.email = emailInvalid;
  }

  const passwordRequired = isRequired(values.password);
  if (passwordRequired) {
    errors.password = passwordRequired;
  }

  return errors;
};
