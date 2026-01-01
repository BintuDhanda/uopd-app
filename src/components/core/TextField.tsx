import { IonInput, IonIcon, IonText } from "@ionic/react";
import { useState } from "react";

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;

  leftIcon?: string;
  rightIcon?: string;
  onRightIconClick?: () => void;

  placeholder?: string;
  type?: "text" | "email" | "password" | "tel";
  inputMode?: "text" | "email" | "tel" | "numeric";

  required?: boolean;
  error?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  leftIcon,
  rightIcon,
  onRightIconClick,
  placeholder,
  type = "text",
  inputMode,
  required,
  error
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={[
        "text-field",
        error && "text-field--error",
        isFocused && "text-field--focused"
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <IonText className="text-field__label">
        {label}
        {required && <span className="text-field__required">*</span>}
      </IonText>

      <div className="text-field__control">
        {leftIcon && <IonIcon icon={leftIcon} />}

        <IonInput
          value={value}
          type={type}
          inputMode={inputMode}
          placeholder={placeholder}
          onIonInput={(e) => onChange(e.detail.value!)}
          onIonFocus={() => setIsFocused(true)}
          onIonBlur={() => setIsFocused(false)}
          required={required}
          aria-required={required}
          aria-invalid={!!error}
        />

        {rightIcon && (
           <IonIcon
    icon={rightIcon}
    className="text-field__action"
    onMouseDown={(e) => e.preventDefault()}
    onClick={onRightIconClick}
  />
        )}
      </div>

      {error && <IonText className="text-field__error">{error}</IonText>}
    </div>
  );
};

export default TextField;

