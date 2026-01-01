import {
  IonHeader,
  IonToolbar,
  IonButton,
  IonIcon,
  IonText
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  rightContent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showBack = true,
  onBack,
  rightContent
}) => {
  return (
    <IonHeader className="header">
      <IonToolbar className="header__toolbar">
        <div className="header__inner">
          <div className="header__row">
            {showBack && (
              <IonButton
                fill="clear"
                className="header__back-button"
                onClick={onBack ?? (() => window.history.back())}
              >
                <IonIcon icon={chevronBack} />
              </IonButton>
            )}

            <div className="header__text">
              <IonText className="header__title">
                {title}
              </IonText>

              {subtitle && (
                <IonText className="header__subtitle">
                  {subtitle}
                </IonText>
              )}
            </div>

            {rightContent && (
              <div className="header__right">
                {rightContent}
              </div>
            )}
          </div>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
