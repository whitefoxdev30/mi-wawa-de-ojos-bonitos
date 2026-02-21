export default function FarTreesLayer() {

  const trees = [
    { left: 5, scale: 0.8 },
    { left: 15, scale: 1 },
    { left: 25, scale: 0.9 },
    { left: 35, scale: 1.1 },
    { left: 45, scale: 0.85 },
    { left: 55, scale: 1 },
    { left: 65, scale: 0.95 },
    { left: 75, scale: 1.05 },
    { left: 85, scale: 0.9 },
    { left: 95, scale: 0.8 },
  ];

  return (
    <div className="far-trees-layer">
      {trees.map((tree, i) => (
        <img
          key={i}
          src="textures/arbol_cerezo.png"
          className="far-tree"
          style={{
            left: `${tree.left}%`,
            transform: `translateX(-50%) scale(${tree.scale})`,
            zIndex: Math.floor(tree.scale * 10),
          }}
        />
      ))}
    </div>
  );
}
