import PulseOrb from "./PulseOrb";
import PitRightPanel from "./PitRightPanel";

export default function DashboardPitSection() {
  return (
    <section style={{ marginTop: 56 }}>
      <div style={{ textAlign: "center", marginBottom: 22 }}>
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

        <h2 style={{ color: "rgba(255,255,255,0.92)", margin: "14px 0 8px" }}>
          Dashboard <span style={{ color: "rgba(0,255,255,0.9)" }}>PIT</span>
        </h2>

        <p style={{ color: "rgba(120,255,200,0.75)", margin: 0, fontSize: 13 }}>
          "Mi Ecosistema de Flujo" — La interfaz de conexión entre tu cuerpo y el
          cuerpo planetario
        </p>
      </div>

     
      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: 18,
          alignItems: "start",
        }}
      >
        
        <div
          style={{
            padding: 28,
            borderRadius: 18,
            border: "1px solid rgba(0,255,255,0.18)",
            background: "rgba(10, 10, 14, 0.72)",
            boxShadow: "0 0 24px rgba(0,0,0,0.55)",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              color: "rgba(0,255,255,0.8)",
              marginTop: 0,
            }}
          >
            Pulso de la PIT
          </h3>

          <PulseOrb percent={78} label="Frecuencia Vibratoria" />

          <div
            style={{
              marginTop: 18,
              textAlign: "center",
              color: "rgba(255,255,255,0.55)",
              fontSize: 12,
            }}
          >
            Calculado mediante coherencia cardiaca (HRV) y movimiento
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "center",
              marginTop: 12,
            }}
          >
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

        
        <PitRightPanel />
      </div>
    </section>
  );
}
