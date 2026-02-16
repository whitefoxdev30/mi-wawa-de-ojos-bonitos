export default function CloudsLayer() {
  return (
    <>
      {/* IZQUIERDA */}
      <img
        src="textures/nubes1.png"
        className="cloud"
        style={{
          top: "8%",
          left: "-25%",
          opacity: 0.5,
          animation: "windLeftSlow 220s linear infinite, floatY 20s ease-in-out infinite"
        }}
      />

      <img
        src="textures/nubes1.png"
        className="cloud"
        style={{
          top: "12%",
          left: "-30%",
          opacity: 0.4,
          animation: "windLeftFast 160s linear infinite, floatY 24s ease-in-out infinite"
        }}
      />

      <img
        src="textures/nubes1.png"
        className="cloud"
        style={{
          top: "5%",
          left: "-35%",
          opacity: 0.3,
          animation: "windLeftSlow 260s linear infinite, floatY 28s ease-in-out infinite"
        }}
      />

      {/* DERECHA */}
      <img
        src="textures/nubes2.png"
        className="cloud"
        style={{
          top: "10%",
          right: "-25%",
          opacity: 0.5,
          animation: "windRightSlow 240s linear infinite, floatY 22s ease-in-out infinite"
        }}
      />

      <img
        src="textures/nubes2.png"
        className="cloud"
        style={{
          top: "15%",
          right: "-30%",
          opacity: 0.4,
          animation: "windRightFast 170s linear infinite, floatY 26s ease-in-out infinite"
        }}
      />

      <img
        src="textures/nubes2.png"
        className="cloud"
        style={{
          top: "6%",
          right: "-35%",
          opacity: 0.3,
          animation: "windRightSlow 300s linear infinite, floatY 30s ease-in-out infinite"
        }}
      />
    </>
  );
}
