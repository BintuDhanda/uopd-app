import { useState } from "react";

type Errors<T> = Partial<Record<keyof T, string>>;

export const useForm = <T extends Record<string, string>>(
  initialValues: T,
  validate: (values: T) => Errors<T>
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Errors<T>>({});

  const setField = <K extends keyof T>(field: K, value: T[K]) => {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const submit = (onSuccess: () => void) => {
    const newErrors = validate(values);
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
