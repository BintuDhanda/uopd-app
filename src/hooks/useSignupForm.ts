import { useState } from "react";
import { validateSignup } from "../validation/signup.validation";

export const useSignupForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    identifier: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const setField = (field: keyof typeof values, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const submit = (onSuccess: () => void) => {
    const newErrors = validateSignup(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSuccess();
    }
  };

  return {
    values,
    errors,
    setField,
    submit
  };
};
