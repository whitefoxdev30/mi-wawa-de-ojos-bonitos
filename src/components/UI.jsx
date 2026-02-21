import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { asset } from "../utils/paths";

const pictures = [
  "DSC00680","DSC00933","DSC00966","DSC00983","DSC01011",
  "DSC01040","DSC01064","DSC01071","DSC01103","DSC01145",
  "DSC01420","DSC01461","DSC01489","DSC02031","DSC02064","DSC02069",
];

export const pageAtom = atom(0);

export const pages = [{ front: "book-cover", back: pictures[0] }];

for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio(asset("audios/page-flip-01a.mp3"));
    audio.volume = 0.3;
    audio.play().catch(() => {});
  }, [page]);

  return (
    <>
      {/* TÍTULO SUPERIOR — SIEMPRE DELANTE */}
      <div className="fixed top-10 md:top-24 w-full text-center pointer-events-none z-[9999] px-4">
        <h1 className="
          text-3xl sm:text-4xl md:text-7xl
          font-extrabold tracking-wide
          text-white
          drop-shadow-[0_0_10px_white]
          animate-glow
        ">
          Mi Princesa 👑
        </h1>

        <p className="
          mt-2 md:mt-4
          text-white
          text-sm sm:text-base md:text-xl
          italic
          drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]
        ">
          Mi niña de ojos bonitos ✨
        </p>
      </div>

      {/* MENSAJE INFERIOR */}
      <div className="fixed bottom-32 md:bottom-40 w-full text-center pointer-events-none z-[9999] px-4">
        <h2 className="
          text-2xl sm:text-3xl md:text-6xl
          font-bold 
          text-white
          drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]
          animate-glow-soft
        ">
          Te Amo 3 Millones 💖
        </h2>
      </div>

      {/* BOTONES ESTILO PRINCESA */}
      <div className="fixed bottom-4 md:bottom-10 w-full flex justify-center pointer-events-auto z-[9999] px-4">
        <div className="
          grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap
          gap-3 md:gap-5
          max-w-4xl
        ">
          {[...pages].map((_, index) => (
            <button
              key={index}
              className={`
                px-4 py-2 md:px-6 md:py-3
                rounded-full
                text-xs sm:text-sm md:text-base
                font-medium
                transition-all duration-500
                backdrop-blur-md
                border
                ${
                  index === page
                    ? "bg-gradient-to-r from-pink-300 to-rose-400 text-white shadow-[0_0_25px_rgba(255,182,193,0.9)] scale-105 border-transparent"
                    : "bg-white/10 text-pink-100 border-pink-200/40 hover:bg-pink-300/30 hover:scale-105"
                }
              `}
              onClick={() => setPage(index)}
            >
              {index === 0 ? "Inicio" : `Capítulo ${index}`}
            </button>
          ))}

          <button
            className={`
              px-4 py-2 md:px-6 md:py-3
              rounded-full
              text-xs sm:text-sm md:text-base
              font-medium
              transition-all duration-500
              backdrop-blur-md
              border
              ${
                page === pages.length
                  ? "bg-gradient-to-r from-pink-300 to-rose-400 text-white shadow-[0_0_25px_rgba(255,182,193,0.9)] scale-105 border-transparent"
                  : "bg-white/10 text-pink-100 border-pink-200/40 hover:bg-pink-300/30 hover:scale-105"
              }
            `}
            onClick={() => setPage(pages.length)}
          >
            Nuestro Final ✨
          </button>
        </div>
      </div>
    </>
  );
};
