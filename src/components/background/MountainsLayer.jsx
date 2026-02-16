export default function MountainsLayer() {
  return (
    <div className="mountains-layer">

      {/* LEJANAS */}
      <img src="textures/montanas.png" className="mountain mountain-far" style={{ left: "-10%" }} />
      <img src="textures/montanas.png" className="mountain mountain-far" style={{ left: "30%" }} />
      <img src="textures/montanas.png" className="mountain mountain-far" style={{ left: "70%" }} />

      {/* MEDIO */}
      <img src="textures/montanas.png" className="mountain mountain-mid" style={{ left: "10%" }} />
      <img src="textures/montanas.png" className="mountain mountain-mid" style={{ left: "55%" }} />

    </div>
  );
}
