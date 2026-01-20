const stats = [
  {
    icon: "∞",
    label: "Polinizadores Activos",
    value: null, // si después quieres números
    glow: "rgba(0, 255, 255, 0.35)", // cyan
    border: "rgba(0, 255, 255, 0.35)",
  },
  {
    icon: "🌱",
    label: "Semillas Sembradas",
    value: null,
    glow: "rgba(0, 255, 140, 0.28)", // verde
    border: "rgba(0, 255, 140, 0.28)",
  },
  {
    icon: "⚡",
    label: "Energía Vital Generada",
    value: null,
    glow: "rgba(255, 0, 200, 0.24)", // magenta
    border: "rgba(255, 0, 200, 0.24)",
  },
];

function StatCard({ icon, label, glow, border }) {
  return (
    <div
      style={{
        width: 220,
        height: 95,
        borderRadius: 12,
        background: "rgba(15, 15, 20, 0.65)",
        border: `1px solid ${border}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        color: "rgba(255,255,255,0.78)",
        boxShadow: `0 0 0 rgba(0,0,0,0)`,
        transform: "translateY(0px)",
        transition: "transform 180ms ease, box-shadow 180ms ease, filter 180ms ease",
        cursor: "default",
        userSelect: "none",
        backdropFilter: "blur(6px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = `0 0 35px ${glow}, 0 0 10px rgba(255,255,255,0.06)`;
        e.currentTarget.style.filter = "brightness(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow = `0 0 18px rgba(0,0,0,0.45)`;
        e.currentTarget.style.filter = "brightness(1)";
      }}
    >
      <div style={{ fontSize: 20, opacity: 0.95 }}>{icon}</div>
      <div style={{ fontSize: 13, opacity: 0.9 }}>{label}</div>
    </div>
  );
}

export default function StatsCards() {
  return (
    <section style={{ marginTop: 28 }}>
      <h2
        style={{
          textAlign: "center",
          color: "#d65cff",
          fontWeight: 500,
          marginBottom: 18,
        }}
      >
        Un juego de vida o muerte
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 22,
          flexWrap: "wrap",
        }}
      >
        {stats.map((s) => (
          <StatCard
            key={s.label}
            icon={s.icon}
            label={s.label}
            glow={s.glow}
            border={s.border}
          />
        ))}
      </div>

      {/* “0” centrado debajo (como tu captura) */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 14 }}>
        <div
          style={{
            width: 32,
            height: 42,
            borderRadius: 12,
            border: "2px solid rgba(0, 255, 255, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "rgba(0,255,255,0.9)",
            boxShadow: "0 0 16px rgba(0,255,255,0.25)",
            background: "rgba(0,0,0,0.25)",
            fontSize: 16,
          }}
        >
          0
        </div>
      </div>
    </section>
  );
}
