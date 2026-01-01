export const isRequired = (value: string) =>
  value.trim() ? "" : "This field is required";

export const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ? ""
    : "Enter a valid email address";

export const minLength = (value: string, length: number) =>
  value.length >= length
    ? ""
    : `Must be at least ${length} characters`;

export const isPhone = (value: string) =>
  /^[0-9]{8,15}$/.test(value)
    ? ""
    : "Enter a valid mobile number";
