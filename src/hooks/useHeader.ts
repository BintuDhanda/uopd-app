import { useLocation } from "react-router-dom";

interface HeaderConfig {
  title: string;
  subtitle?: string;
}

export const useHeader = (fallback: HeaderConfig): HeaderConfig => {
  const location = useLocation();

  const stateHeader = (location.state as any)?.header;

  return stateHeader ?? fallback;
};
