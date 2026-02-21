export default function CherryTreesLayer() {
  return (
    <div className="trees-layer">

      {/* LADO IZQUIERDO */}

      <img
        src="textures/arbol_cerezo.png"
        className="tree tree-close"
        style={{ left: "-5%" }}
      />

      <img
        src="textures/arbol_cerezo.png"
        className="tree tree-mid"
        style={{ left: "10%" }}
      />

      <img
        src="textures/arbol_cerezo.png"
        className="tree tree-far"
        style={{ left: "18%" }}
      />

      {/* LADO DERECHO */}

      <img
        src="textures/arbol_cerezo.png"
        className="tree tree-close"
        style={{ right: "-5%" }}
      />

      <img
        src="textures/arbol_cerezo.png"
        className="tree tree-mid"
        style={{ right: "10%" }}
      />

      <img
        src="textures/arbol_cerezo.png"
        className="tree tree-far"
        style={{ right: "18%" }}
      />

    </div>
  );
}
