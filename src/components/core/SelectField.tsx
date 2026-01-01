// import { IonSelect, IonSelectOption, IonIcon, IonText } from "@ionic/react";
// import { useState } from "react";

// interface SelectOption {
//   label: string;
//   value: string;
// }

// interface SelectFieldProps {
//   label: string;
//   value: string;
//   options: SelectOption[];
//   onChange: (value: string) => void;

//   placeholder?: string;
//   leftIcon?: string;

//   required?: boolean;
//   error?: string;
// }

// const SelectField: React.FC<SelectFieldProps> = ({
//   label,
//   value,
//   options,
//   onChange,
//   placeholder = "Select",
//   leftIcon,
//   required,
//   error
// }) => {
//   const [isFocused, setIsFocused] = useState(false);

//   return (
//     <div
//       className={[
//         "text-field",
//         error && "text-field--error",
//         isFocused && "text-field--focused"
//       ]
//         .filter(Boolean)
//         .join(" ")}
//     >
//       <IonText className="text-field__label">
//         {label}
//         {required && <span className="text-field__required">*</span>}
//       </IonText>

//       <div className="text-field__control">
//         {leftIcon && <IonIcon icon={leftIcon} />}

//         <IonSelect
//           value={value}
//           placeholder={placeholder}
//           interface="popover"
//           onIonChange={(e) => onChange(e.detail.value)}
//           onIonFocus={() => setIsFocused(true)}
//           onIonBlur={() => setIsFocused(false)}
//           aria-required={required}
//           aria-invalid={!!error}
//         >
//           {options.map((opt) => (
//             <IonSelectOption key={opt.value} value={opt.value}>
//               {opt.label}
//             </IonSelectOption>
//           ))}
//         </IonSelect>
//       </div>

//       {error && <IonText className="text-field__error">{error}</IonText>}
//     </div>
//   );
// };

// export default SelectField;


import {
  IonSelect,
  IonSelectOption,
  IonIcon,
  IonText
} from "@ionic/react";
import { chevronDownOutline } from "ionicons/icons";
import { useRef } from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectFieldProps {
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;

  placeholder?: string;
  leftIcon?: string;
  required?: boolean;
  error?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  value,
  options,
  onChange,
  placeholder = "Select",
  leftIcon,
  required,
  error
}) => {
  const selectRef = useRef<HTMLIonSelectElement>(null);

  const openSelect = () => {
    selectRef.current?.open();
  };

  return (
    // <div className={["text-field", error && "text-field--error"].filter(Boolean).join(" ")}>
        <div
  className={[
    "text-field",
    "text-field--select",   // 👈 select-specific hook
    error && "text-field--error"
  ]
    .filter(Boolean)
    .join(" ")}
>
      <IonText className="text-field__label">
        {label}
        {required && <span className="text-field__required">*</span>}
      </IonText>

      <div className="text-field__control" onClick={openSelect}>
        {leftIcon && <IonIcon icon={leftIcon} />}

        <IonSelect
          ref={selectRef}
          value={value}
          placeholder={placeholder}
          interface="alert"   // ✅ consistent on Android
          onIonChange={(e) => onChange(e.detail.value)}
        >
          {options.map((opt) => (
            <IonSelectOption key={opt.value} value={opt.value}>
              {opt.label}
            </IonSelectOption>
          ))}
        </IonSelect>

        {/* Decorative Chevron */}
        <IonIcon
          icon={chevronDownOutline}
          className="text-field__action"
        />
      </div>

      {error && <IonText className="text-field__error">{error}</IonText>}
    </div>
  );
};

export default SelectField;
