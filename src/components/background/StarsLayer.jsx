export default function StarsLayer() {
  return (
    <div className="stars-layer">
      {Array.from({ length: 80 }).map((_, i) => {
        const style = {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          transform: `scale(${0.5 + Math.random()})`
        };

        return <span key={i} className="star" style={style} />;
      })}

      <span className="comet comet-1" />
      <span className="comet comet-2" />
    </div>
  );
}


