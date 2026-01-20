function Bullet({ text, color }) {
  return (
    <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <span style={{ color, marginTop: 2 }}>✓</span>
      <span style={{ color: "rgba(255,255,255,0.78)", fontSize: 14 }}>{text}</span>
    </li>
  );
}

function AccessCard({
  title,
  subtitle,
  accent,
  border,
  tag,
  buttonText,
  bullets,
  icon,
  onClick,
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" ? onClick?.() : null)}
      style={{
        flex: 1,
        minWidth: 360,
        borderRadius: 18,
        padding: 26,
        background: "rgba(10, 10, 14, 0.78)",
        border: `2px solid ${border}`,
        position: "relative",
        boxShadow: `0 0 22px rgba(0,0,0,0.55)`,
        transform: "translateY(0px)",
        transition:
          "transform 180ms ease, box-shadow 180ms ease, background 180ms ease, border-color 180ms ease",
        cursor: "pointer",
        userSelect: "none",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.background = `linear-gradient(180deg, ${accent}, rgba(10,10,14,0.78))`;
        e.currentTarget.style.boxShadow = `0 0 40px ${border}, 0 0 18px rgba(255,255,255,0.06)`;
        e.currentTarget.style.borderColor = border;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.background = "rgba(10, 10, 14, 0.78)";
        e.currentTarget.style.boxShadow = "0 0 22px rgba(0,0,0,0.55)";
        e.currentTarget.style.borderColor = border;
      }}
    >
      {/* glow suave de fondo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: -120,
          background: `radial-gradient(circle at 30% 10%, ${border}, transparent 55%)`,
          opacity: 0.12,
          pointerEvents: "none",
        }}
      />

      {tag ? (
        <div
          style={{
            position: "absolute",
            right: 16,
            top: 16,
            background: "rgba(255, 215, 0, 0.95)",
            color: "rgba(0,0,0,0.9)",
            fontWeight: 700,
            fontSize: 12,
            padding: "6px 12px",
            borderRadius: 999,
            letterSpacing: 0.4,
          }}
        >
          {tag}
        </div>
      ) : null}

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <div style={{ fontSize: 22, color: border }}>{icon}</div>
        <h3 style={{ margin: 0, color: border, fontWeight: 700, fontSize: 24 }}>
          {title}
        </h3>
      </div>

      <p style={{ marginTop: 10, marginBottom: 18, color: "rgba(255,255,255,0.7)" }}>
        {subtitle}
      </p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
        style={{
          width: "100%",
          border: "none",
          borderRadius: 12,
          padding: "14px 16px",
          background: border,
          color: "rgba(0,0,0,0.9)",
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: `0 0 18px ${border}`,
          marginBottom: 18,
        }}
      >
        {buttonText}
      </button>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
        {bullets.map((b) => (
          <Bullet key={b} text={b} color={border} />
        ))}
      </ul>
    </div>
  );
}

function BigActionButton({ title, subtitle, border, href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none", flex: 1, minWidth: 320 }}
    >
      <div
        style={{
          borderRadius: 16,
          padding: "18px 20px",
          background: "rgba(0, 255, 255, 0.10)",
          border: `2px solid ${border}`,
          boxShadow: `0 0 18px rgba(0,0,0,0.45)`,
          transform: "translateY(0px)",
          transition: "transform 180ms ease, box-shadow 180ms ease, filter 180ms ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = `0 0 26px ${border}, 0 0 10px rgba(255,255,255,0.06)`;
          e.currentTarget.style.filter = "brightness(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0px)";
          e.currentTarget.style.boxShadow = "0 0 18px rgba(0,0,0,0.45)";
          e.currentTarget.style.filter = "brightness(1)";
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: border, fontSize: 16 }}>{icon}</span>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: border, fontWeight: 700, fontSize: 18 }}>{title}</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>{subtitle}</div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function AccessCards() {
  // IMPORTANTE: cambia estos enlaces por los tuyos
  const whatsappDonateLink = "https://api.whatsapp.com/send/?phone=573187767326&text=Quiero+informaci%C3%B3n+sobre+productos+y+wearables&type=phone_number&app_absent=0";
  const whatsappStoreLink = "https://wa.me/573000000000?text=Hola%20quiero%20informaci%C3%B3n%20sobre%20la%20Tienda%20de%20Wearables";

  return (
    <section style={{ marginTop: 34 }}>
      <div
        style={{
          display: "flex",
          gap: 22,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <AccessCard
          title="Ingreso Freemium"
          subtitle="Para jugadores, estudiantes y curiosos que quieren explorar el oráculo verde"
          accent="rgba(0, 255, 255, 0.10)"
          border="rgba(0, 255, 255, 0.85)"
          icon="✦"
          buttonText="Comenzar Transformación 🌱"
          bullets={[
            "Acceso al juego móvil",
            "Energía Vital limitada",
            "Rol: Polinizador aprendiz",
          ]}
          onClick={() => {
            
          }}
        />

        <AccessCard
          title="Ingreso Premium"
          subtitle="Para instituciones, aliados estratégicos y portadores de semillas"
          accent="rgba(255, 210, 60, 0.12)"
          border="rgba(255, 210, 60, 0.90)"
          icon="👑"
          tag="PREMIUM"
          buttonText="Acceso Institucional 👑"
          bullets={[
            "Energía Vital ilimitada",
            "Dashboard de impacto",
            "Alianzas estratégicas",
          ]}
          onClick={() => {
            
          }}
        />
      </div>

      <div style={{ height: 26 }} />

      <div
        style={{
          display: "flex",
          gap: 22,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <BigActionButton
          title="Tienda de WhatsApp"
          subtitle="Mide y genera Energía Vital"
          border="rgba(0, 255, 255, 0.75)"
          icon="🛍️"
          href={whatsappStoreLink}
        />

        <BigActionButton
          title="Donar vía WhatsApp"
          subtitle="Apoya la transformación"
          border="rgba(255, 70, 200, 0.70)"
          icon="❤"
          href={whatsappDonateLink}
        />
      </div>
    </section>
  );
}
