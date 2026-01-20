export default function LandingLayout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b0b0f",
        display: "flex",
        justifyContent: "center",
        padding: "40px 16px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1100 }}>
        {children}
      </div>
    </div>
  );
}
