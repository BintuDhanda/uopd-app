import { useState } from "react";
import PublicRoutes from "../routes/PublicRoutes";
import PrivateRoutes from "../routes/PrivateRoutes";

const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("user")
  );

  const login = () => {
    localStorage.setItem("user", "true");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };
  
  return isLoggedIn ? (
    <PrivateRoutes onLogout={logout} />
  ) : (
    <PublicRoutes onLogin={login} />
  );
};

export default AppRoutes;
