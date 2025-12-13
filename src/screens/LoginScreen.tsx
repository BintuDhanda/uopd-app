// import {
//   IonPage,
//   IonContent,
//   IonCard,
//   IonButton,
//   IonIcon,
//   IonText
// } from "@ionic/react";
// import {
//   documentTextOutline,
//   shieldCheckmarkOutline,
//   briefcaseOutline,
//   documentOutline,
//   shieldOutline
// } from "ionicons/icons";

// const fontFamily =
//   '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

// const RoleLogin = () => {
//   return (
//     <IonPage>
//       <IonContent
//         fullscreen
//         style={{
//           "--background": "#F8FAFC",
//           fontFamily
//         }}
//       >
//         {/* ================= CENTER LAYOUT ================= */}
//         <div
//           style={{
//             maxWidth: 520,          // 🔑 controls web width
//             margin: "0 auto",      // 🔑 centers on web
//             padding: "20px"
//           }}
//         >
//           {/* ================= HEADER ================= */}
//           <div style={{ textAlign: "center", marginTop: 24, marginBottom: 32 }}>
//             <div
//               style={{
//                 width: 64,
//                 height: 64,
//                 margin: "0 auto 12px",
//                 borderRadius: 18,
//                 background: "linear-gradient(135deg,#4F46E5,#6366F1)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center"
//               }}
//             >
//               <IonIcon
//                 icon={documentTextOutline}
//                 style={{ fontSize: 32, color: "#FFFFFF" }}
//               />
//             </div>

//             <h1
//               style={{
//                 margin: 0,
//                 fontSize: 22,
//                 fontWeight: 600,
//                 lineHeight: "28px",
//                 color: "#111827"
//               }}
//             >
//               Healthcare Platform
//             </h1>

//             <p
//               style={{
//                 marginTop: 6,
//                 marginBottom: 18,
//                 fontSize: 14,
//                 lineHeight: "20px",
//                 color: "#6B7280"
//               }}
//             >
//               Manage hospitals, doctors & appointments
//             </p>

//             <IonText style={{ fontSize: 15, fontWeight: 500, color: "#374151" }}>
//               Login As
//             </IonText>
//           </div>

//           {/* ================= APP ADMIN ================= */}
//           <IonCard
//             style={{
//               background: "#FFFFFF",
//               borderRadius: 18,
//               padding: 18,
//               marginBottom: 18,
//               border: "2px solid #E9D5FF",
//               boxShadow: "0 10px 24px rgba(0,0,0,0.06)"
//             }}
//           >
//             <div style={{ display: "flex", gap: 14, marginBottom: 18 }}>
//               <div
//                 style={{
//                   width: 44,
//                   height: 44,
//                   borderRadius: 12,
//                   background: "#F5F3FF",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "#7C3AED"
//                 }}
//               >
//                 <IonIcon icon={shieldCheckmarkOutline} />
//               </div>

//               <div>
//                 <h3 style={{ color: "oklch(21% .034 264.665)", margin: 0, fontSize: 16, fontWeight: 500 }}>
//                   App Admin
//                 </h3>
//                 <p style={{ marginTop: 4, fontSize: 13, color: "#6B7280" }}>
//                   Manage platform & process payments
//                 </p>
//               </div>
//             </div>

//             <IonButton
            
//               expand="block"
//               style={{
//                 "--background": "oklch(55.8% .288 302.321)",
//                 "--border-radius": "14px",
//                 "--box-shadow": "none",
//                 height: 46,
//                 fontSize: 15,
//                 fontWeight: 500
//               }}
//             >
//               Admin Login
//             </IonButton>
//           </IonCard>

//           {/* ================= SALES PARTNER ================= */}
//           <IonCard
//             style={{
//               background: "#FFFFFF",
//               borderRadius: 18,
//               padding: 18,
//               marginBottom: 18,
//               boxShadow: "0 10px 24px rgba(0,0,0,0.06)"
//             }}
//           >
//             <div style={{ display: "flex", gap: 14, marginBottom: 18 }}>
//               <div
//                 style={{
//                   width: 44,
//                   height: 44,
//                   borderRadius: 12,
//                   background: "#EFF6FF",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "#2563EB"
//                 }}
//               >
//                 <IonIcon icon={briefcaseOutline} />
//               </div>

//               <div>
//                 <h3 style={{ color: "oklch(21% .034 264.665)", margin: 0, fontSize: 16, fontWeight: 500 }}>
//                   Sales Partner
//                 </h3>
//                 <p style={{ marginTop: 4, fontSize: 13, color: "#6B7280" }}>
//                   Onboard hospitals & earn commission
//                 </p>
//               </div>
//             </div>

//             {/* Buttons: full width INSIDE fixed card */}
//             <div style={{ display: "flex", gap: 12 }}>
//               <IonButton
//                 expand="block"
//                 style={{
//                   "--background": "#2563EB",
//                   "--border-radius": "14px",
//                   "--box-shadow": "none",
//                   height: 44,
//                   width: "-webkit-fill-available",
//                   fontSize: 15,
//                   fontWeight: 500
//                 }}
//               >
//                 Login
//               </IonButton>

//               <IonButton
//                 expand="block"
//                 fill="outline"
//                 style={{
//                   "--border-color": "#2563EB",
//                   "--color": "#2563EB",
//                   "--border-radius": "14px",
//                   "--border-width": "1px",
//                   "--box-shadow": "none",
//                   height: 44,
//                   width: "-webkit-fill-available",
//                   fontSize: 15,
//                   fontWeight: 500
//                 }}
//               >
//                 Register
//               </IonButton>
//             </div>
//           </IonCard>

//           {/* ================= HOSPITAL ADMIN ================= */}
//           <IonCard
//             style={{
//               background: "#FFFFFF",
//               borderRadius: 18,
//               padding: 18,
//               marginBottom: 22,
//               boxShadow: "0 10px 24px rgba(0,0,0,0.06)"
//             }}
//           >
//             <div style={{ display: "flex", gap: 14, marginBottom: 18 }}>
//               <div
//                 style={{
//                   width: 44,
//                   height: 44,
//                   borderRadius: 12,
//                   background: "#ECFDF5",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "#16A34A"
//                 }}
//               >
//                 <IonIcon icon={documentOutline} />
//               </div>

//               <div>
//                 <h3 style={{ color: "oklch(21% .034 264.665)", margin: 0, fontSize: 16, fontWeight: 500 }}>
//                   Hospital Admin
//                 </h3>
//                 <p style={{ marginTop: 4, fontSize: 13, color: "#6B7280" }}>
//                   Manage doctors & view earnings
//                 </p>
//               </div>
//             </div>

//             <IonButton
//               expand="block"
//               style={{
//                 "--background": "#16A34A",
//                 "--border-radius": "14px",
//                 "--box-shadow": "none",
//                 height: 46,
//                 fontSize: 15,
//                 fontWeight: 500
//               }}
//             >
//               Login
//             </IonButton>
//           </IonCard>

//           {/* ================= DEMO ACCESS ================= */}
//           <IonCard
//             style={{
//               backgroundColor:"#eff6ff" ,
//               border: "1px solid oklch(93.2% .032 255.585)",
//               borderRadius: 14,
//               padding: 16
//             }}
//           >
//             <div style={{ display: "flex", gap: 10 }}>
//               <IonIcon icon={shieldOutline} style={{ color: "#2563EB" }} />
//               <p style={{ margin: 0, fontSize: 13, color: "#2563EB" }}>
//                 <strong>Demo Access</strong>
//                 <br />
//                 Click any role to explore the platform features with demo data.
//               </p>
//             </div>
//           </IonCard>
//         </div>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default RoleLogin;

import {
  IonPage,
  IonContent,
  IonCard,
  IonButton,
  IonIcon,
  IonText
} from "@ionic/react";
import {
  documentTextOutline,
  shieldCheckmarkOutline,
  briefcaseOutline,
  documentOutline,
  shieldOutline
} from "ionicons/icons";


const RoleLogin: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="role-login">
        <div className="role-login__container">
          {/* Header */}
          <div className="role-login__header">
            <div className="role-login__logo">
              <IonIcon icon={documentTextOutline} />
            </div>

            <h1>Healthcare Platform</h1>
            <p>Manage hospitals, doctors & appointments</p>

            <IonText className="role-login__subtitle">
              Login As
            </IonText>
          </div>

          {/* App Admin */}
          <IonCard className="role-card role-card--admin">
            <div className="role-card__info">
              <div className="role-card__icon admin">
                <IonIcon icon={shieldCheckmarkOutline} />
              </div>
              <div>
                <h3>App Admin</h3>
                <p>Manage platform & process payments</p>
              </div>
            </div>

            <IonButton expand="block" className="btn btn--admin">
              Admin Login
            </IonButton>
          </IonCard>

          {/* Sales Partner */}
          <IonCard className="role-card">
            <div className="role-card__info">
              <div className="role-card__icon sales">
                <IonIcon icon={briefcaseOutline} />
              </div>
              <div>
                <h3>Sales Partner</h3>
                <p>Onboard hospitals & earn commission</p>
              </div>
            </div>

            <div className="role-card__actions">
              <IonButton expand="block" className="btn btn--sales">
                Login
              </IonButton>

              <IonButton
                expand="block"
                fill="outline"
                className="btn btn--sales-outline"
              >
                Register
              </IonButton>
            </div>
          </IonCard>

          {/* Hospital Admin */}
          <IonCard className="role-card">
            <div className="role-card__info">
              <div className="role-card__icon hospital">
                <IonIcon icon={documentOutline} />
              </div>
              <div>
                <h3>Hospital Admin</h3>
                <p>Manage doctors & view earnings</p>
              </div>
            </div>

            <IonButton expand="block" className="btn btn--hospital">
              Login
            </IonButton>
          </IonCard>

          {/* Demo Access */}
          <IonCard className="demo-card">
            <IonIcon icon={shieldOutline} />
            <p>
    <strong>Demo Access</strong>
    Click any role to explore the platform features with demo data.
  </p>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RoleLogin;

