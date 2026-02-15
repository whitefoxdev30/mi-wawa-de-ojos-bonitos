import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { asset } from "../utils/paths";

const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
];

export const pageAtom = atom(0);

export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];

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
    audio.play();
  }, [page]);

  return (
    <>
      {/* Fondo mágico estilo cuento */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#2b1b47] via-[#4a2d6e] to-[#1b0f2f]" />

      {/* Brillo mágico sutil */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-pink-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-rose-300/20 rounded-full blur-[120px]" />
      </div>

      {/* MENSAJE SUPERIOR */}
      <div className="fixed top-24 w-full text-center pointer-events-none z-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight 
        text-transparent bg-clip-text 
        bg-gradient-to-r from-pink-300 via-rose-200 to-yellow-200 
        drop-shadow-[0_0_30px_rgba(255,182,193,0.6)]">
          Mi Princesa 👑
        </h1>

        <p className="mt-4 text-rose-200 text-lg md:text-xl font-light italic">
          Mi niña de ojos bonitos ✨
        </p>
      </div>

      {/* LIBRO SE MANTIENE IGUAL */}

      {/* MENSAJE INFERIOR */}
      <div className="fixed bottom-40 w-full text-center pointer-events-none z-20">
        <h2 className="text-4xl md:text-6xl font-bold 
        text-transparent bg-clip-text 
        bg-gradient-to-r from-pink-300 to-yellow-200 
        drop-shadow-[0_0_25px_rgba(255,192,203,0.5)]">
          Te Amo 3 Millones 💖
        </h2>
      </div>

      {/* CAPÍTULOS ABAJO ESTILO PRINCESA */}
      <div className="fixed bottom-10 w-full flex justify-center pointer-events-auto z-30">
        <div className="flex flex-wrap justify-center gap-5 max-w-4xl px-6">

          {[...pages].map((_, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-sm tracking-wide transition-all duration-500 border backdrop-blur-md
            ${index === page
                  ? "bg-gradient-to-r from-pink-300 to-rose-400 text-white shadow-[0_0_25px_rgba(255,182,193,0.7)] scale-110 border-transparent"
                  : "bg-white/10 text-pink-100 border-pink-200/40 hover:bg-pink-300/30 hover:scale-105"
                }`}
              onClick={() => setPage(index)}
            >
              {index === 0 ? "Inicio" : `Capítulo ${index}`}
            </button>
          ))}

          <button
            className={`px-6 py-2 rounded-full text-sm tracking-wide transition-all duration-500 border backdrop-blur-md
          ${page === pages.length
                ? "bg-gradient-to-r from-pink-300 to-rose-400 text-white shadow-[0_0_25px_rgba(255,182,193,0.7)] scale-110 border-transparent"
                : "bg-white/10 text-pink-100 border-pink-200/40 hover:bg-pink-300/30 hover:scale-105"
              }`}
            onClick={() => setPage(pages.length)}
          >
            Nuestro Final ✨
          </button>

        </div>
      </div>
    </>
  );


};
