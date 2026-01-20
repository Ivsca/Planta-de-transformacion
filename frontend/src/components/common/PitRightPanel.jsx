function StatMiniCard({ color, icon, value, title, subtitle }) {
  return (
    <div
      style={{
        borderRadius: 16,
        padding: 18,
        background: "rgba(10, 10, 14, 0.72)",
        border: `1px solid ${color}`,
        boxShadow: "0 0 18px rgba(0,0,0,0.55)",
        minHeight: 96,
      }}
    >
      <div style={{ color, fontSize: 16, marginBottom: 10 }}>{icon}</div>

      <div style={{ color, fontSize: 26, fontWeight: 800, lineHeight: 1 }}>
        {value}
      </div>

      <div style={{ marginTop: 8, color: "rgba(255,255,255,0.75)", fontSize: 13 }}>
        {title}
      </div>

      <div style={{ color: "rgba(120,255,200,0.6)", fontSize: 12 }}>{subtitle}</div>
    </div>
  );
}

function FlowBar({ label, value, color }) {
  return (
    <div style={{ marginTop: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ color: "rgba(180,255,220,0.8)", fontSize: 13 }}>{label}</span>
        <span style={{ color, fontSize: 13, fontWeight: 700 }}>{value}%</span>
      </div>

      <div
        style={{
          height: 8,
          borderRadius: 999,
          background: "rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            background: color,
          }}
        />
      </div>
    </div>
  );
}

export default function PitRightPanel() {
  return (
    <div style={{ width: "100%" }}>
      {/* Grid 2x2 de cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 14,
          marginBottom: 14,
        }}
      >
        <StatMiniCard
          color="rgba(0,255,255,0.35)"
          icon="〰️"
          value="4,823"
          title="Movimiento Hoy"
          subtitle="pasos"
        />
        <StatMiniCard
          color="rgba(255, 210, 60, 0.35)"
          icon="⚡"
          value="127"
          title="Energía Generada"
          subtitle="EV"
        />
        <StatMiniCard
          color="rgba(0,255,140,0.30)"
          icon="📈"
          value="+34%"
          title="Polinización"
          subtitle="semanal"
        />
        <StatMiniCard
          color="rgba(255, 70, 200, 0.28)"
          icon="🗺️"
          value="12"
          title="Nodos Activados"
          subtitle="usuarios"
        />
      </div>

      {/* Estado del Flujo */}
      <div
        style={{
          borderRadius: 16,
          padding: 20,
          background: "rgba(10, 10, 14, 0.72)",
          border: "1px solid rgba(0,255,255,0.18)",
          boxShadow: "0 0 18px rgba(0,0,0,0.55)",
        }}
      >
        <div
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: 18,
            fontWeight: 800,
            marginBottom: 6,
          }}
        >
          Estado del Flujo
        </div>

        <FlowBar label="Captación" value={85} color="rgba(0,255,255,0.85)" />
        <FlowBar label="Transformación" value={72} color="rgba(0,255,140,0.8)" />
        <FlowBar label="Polinización" value={63} color="rgba(255, 70, 200, 0.8)" />
      </div>
    </div>
  );
}
