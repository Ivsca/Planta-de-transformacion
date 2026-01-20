import LandingLayout from "../app/layout/LandingLayout";
import PulseOrb from "../components/common/PulseOrb";

export default function DashboardPIT() {
  return (
    <LandingLayout>
      <div style={{ textAlign: "center", marginTop: 10, marginBottom: 26 }}>
        <span
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 999,
            border: "1px solid rgba(0,255,255,0.35)",
            color: "rgba(0,255,255,0.85)",
            fontSize: 12,
            background: "rgba(0,255,255,0.06)",
          }}
        >
          Centro de Mando Biológico
        </span>

        <h1 style={{ color: "rgba(255,255,255,0.9)", margin: "14px 0 8px" }}>
          Dashboard <span style={{ color: "rgba(0,255,255,0.9)" }}>PIT</span>
        </h1>

        <p style={{ color: "rgba(120,255,200,0.75)", margin: 0, fontSize: 13 }}>
          "Mi Ecosistema de Flujo" — La interfaz de conexión entre tu cuerpo y el cuerpo planetario
        </p>
      </div>

      {/* Card donde va la esfera */}
      <div
        style={{
          maxWidth: 520,
          margin: "0 auto",
          padding: 28,
          borderRadius: 18,
          border: "1px solid rgba(0,255,255,0.18)",
          background: "rgba(10, 10, 14, 0.72)",
          boxShadow: "0 0 24px rgba(0,0,0,0.55)",
        }}
      >
        <h3 style={{ textAlign: "center", color: "rgba(0,255,255,0.8)", marginTop: 0 }}>
          Pulso de la PIT
        </h3>

        <PulseOrb percent={78} label="Frecuencia Vibratoria" />

        <div style={{ marginTop: 18, textAlign: "center", color: "rgba(255,255,255,0.55)", fontSize: 12 }}>
          Calculado mediante coherencia cardiaca (HRV) y movimiento
        </div>

        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 12 }}>
          <span
            style={{
              padding: "6px 10px",
              borderRadius: 999,
              background: "rgba(0,255,140,0.10)",
              border: "1px solid rgba(0,255,140,0.30)",
              color: "rgba(0,255,140,0.85)",
              fontSize: 12,
            }}
          >
            Flujo Activo
          </span>
          <span
            style={{
              padding: "6px 10px",
              borderRadius: 999,
              background: "rgba(255, 210, 60, 0.10)",
              border: "1px solid rgba(255, 210, 60, 0.30)",
              color: "rgba(255, 210, 60, 0.9)",
              fontSize: 12,
            }}
          >
            Resonancia Alta
          </span>
        </div>
      </div>
    </LandingLayout>
  );
}
