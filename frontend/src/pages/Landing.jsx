import LandingLayout from "../app/layout/LandingLayout";
import orchid from "../assets/orchid.png";
import StatsCards from "../components/common/StatsCards";
import AccessCards from "../components/common/AccessCards";
import DashboardPitSection from "../components/common/DashboardPitSection";



export default function Landing() {
  return (
    <LandingLayout>
      <div
        style={{
          height: 60,
          borderRadius: 6,
          background:
            "linear-gradient(90deg, #1de9ff, #6a7bff, #c83cff, #2aff8f)",
          marginBottom: 40,
        }}
      />

      <h1
        style={{
          textAlign: "center",
          color: "rgba(255,255,255,0.75)",
          fontWeight: 300,
          marginBottom: 32,
        }}
      >
        Poliniza el cambio, siembra conciencia
      </h1>

      
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={orchid}
          alt="Planta de Transformación"
          style={{
            maxWidth: "100%",
            borderRadius: 12,
          }}
        />
      </div>

      <StatsCards />
      <AccessCards />
      <DashboardPitSection />
    </LandingLayout>
    
  );
}
