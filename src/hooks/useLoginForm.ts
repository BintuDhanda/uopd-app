import { useState } from "react";
import { validateLogin } from "../validation/login.validation";

export const useLoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const setField = (field: keyof typeof values, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const submit = (onSuccess: () => void) => {
    const newErrors = validateLogin(values);
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
