export default function PulseOrb({ percent = 78, label = "Frecuencia Vibratoria" }) {
  const size = 260;

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <div style={{ width: size, height: size, position: "relative" }}>
        {/* CSS del componente */}
        <style>
          {`
            @keyframes orbBeat {
              0%   { transform: scale(1);   filter: brightness(1); }
              12%  { transform: scale(1.03); filter: brightness(1.08); }
              24%  { transform: scale(1.00); filter: brightness(1.00); }
              38%  { transform: scale(1.05); filter: brightness(1.12); }
              52%  { transform: scale(1.00); filter: brightness(1.00); }
              100% { transform: scale(1);   filter: brightness(1); }
            }

            @keyframes ringExpand {
              0%   { transform: translate(-50%, -50%) scale(0.95); opacity: 0; }
              10%  { opacity: 0.55; }
              45%  { opacity: 0.25; }
              85%  { opacity: 0; }
              100% { transform: translate(-50%, -50%) scale(1.55); opacity: 0; }
            }

            @keyframes ringExpand2 {
              0%   { transform: translate(-50%, -50%) scale(1.00); opacity: 0; }
              12%  { opacity: 0.45; }
              50%  { opacity: 0.18; }
              100% { transform: translate(-50%, -50%) scale(1.75); opacity: 0; }
            }

            .orb-wrap {
              position: absolute;
              inset: 0;
              display: grid;
              place-items: center;
            }

            .orb-glow {
              width: 100%;
              height: 100%;
              border-radius: 999px;
              background:
                radial-gradient(circle at 35% 30%, rgba(150,255,255,0.95), rgba(0,255,255,0.55) 35%, rgba(0,160,255,0.22) 62%, rgba(0,0,0,0) 75%),
                radial-gradient(circle at 60% 65%, rgba(0,255,255,0.35), rgba(0,0,0,0) 60%);
              box-shadow:
                0 0 50px rgba(0,255,255,0.18),
                0 0 18px rgba(0,255,255,0.20);
              animation: orbBeat 1.9s ease-in-out infinite;
              position: relative;
              overflow: hidden;
            }

            .orb-core {
              position: absolute;
              inset: 18%;
              border-radius: 999px;
              background: radial-gradient(circle at 40% 35%, rgba(210,255,255,0.95), rgba(0,255,255,0.55) 45%, rgba(0,140,255,0.25) 70%);
              filter: blur(0.2px);
              box-shadow: inset 0 0 14px rgba(255,255,255,0.10);
            }

            .orb-ring {
              position: absolute;
              left: 50%;
              top: 50%;
              width: 92%;
              height: 92%;
              border-radius: 999px;
              border: 1px solid rgba(255,255,255,0.55);
              box-shadow: 0 0 10px rgba(255,255,255,0.10);
              pointer-events: none;
              animation: ringExpand 1.9s ease-out infinite;
            }

            .orb-ring.r2 {
              width: 88%;
              height: 88%;
              border-color: rgba(255,255,255,0.35);
              animation: ringExpand2 1.9s ease-out infinite;
              animation-delay: 0.18s;
            }

            .orb-text {
              position: absolute;
              inset: 0;
              display: grid;
              place-items: center;
              text-align: center;
              pointer-events: none;
              font-family: inherit;
            }

            .orb-text .pct {
              font-size: 34px;
              font-weight: 800;
              color: rgba(120,255,255,0.95);
              text-shadow: 0 0 18px rgba(0,255,255,0.22);
              margin-bottom: 6px;
            }

            .orb-text .lbl {
              font-size: 12px;
              letter-spacing: 0.2px;
              color: rgba(255,255,255,0.55);
            }
          `}
        </style>

        {/* Ondas finas (rayas circulares blancas) */}
        <div className="orb-ring" />
        <div className="orb-ring r2" />

        {/* Esfera */}
        <div className="orb-wrap">
          <div className="orb-glow">
            <div className="orb-core" />
          </div>
        </div>

        {/* Texto dentro */}
        <div className="orb-text">
          <div>
            <div className="pct">{percent}%</div>
            <div className="lbl">{label}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
