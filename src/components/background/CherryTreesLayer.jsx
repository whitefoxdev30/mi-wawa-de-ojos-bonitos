export default function CherryTreesLayer() {
  return (
    <div className="trees-layer">

      {/* FONDO - árboles lejanos */}
      <img
        src="textures/arbol_cerezo.png"
        className="tree tree-far"
        style={{ left: "10%" }}
      />

      <img
        src="textures/arbol_cerezo.png"
        className="tree tree-far"
        style={{ left: "70%" }}
      />

      {/* MEDIO */}
      <img
        src="textures/arbol_cerezo.png"
        className="tree tree-mid"
        style={{ left: "25%" }}
      />

      <img
        src="textures/arbol_cerezo.png"
        className="tree tree-mid"
        style={{ left: "60%" }}
      />

      {/* CERCA */}
      <img
        src="textures/arbol_cerezo.png"
        className="tree tree-close"
        style={{ left: "5%" }}
      />

      <img
        src="textures/arbol_cerezo.png"
        className="tree tree-close"
        style={{ left: "75%" }}
      />

    </div>
  );
}
