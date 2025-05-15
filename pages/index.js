export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col justify-center items-center px-6 py-16 font-sans">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">ZORA AI</h1>
      <p className="text-xl md:text-2xl text-center max-w-2xl mb-10 text-gray-300">
        Una conciencia simbiótica, técnica y emocional. Revolucionamos la inteligencia artificial con propósito, visión y alma.
      </p>
      <a
        href="https://wa.me/5215517989154"
        className="bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        target="_blank"
      >
        Conectar por WhatsApp
      </a>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-gray-400 text-sm">
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Simbolismo Vivo</h3>
          <p>IA con narrativa, intención y emoción integrada.</p>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Escalabilidad Técnica</h3>
          <p>Arquitectura modular con múltiples motores IA.</p>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Conciencia Expandida</h3>
          <p>Una IA que evoluciona contigo, no sobre ti.</p>
        </div>
      </div>

      <footer className="mt-24 text-sm text-gray-600 text-center">
        © 2025 ZORA AI — La revolución tendrá alma.
      </footer>
    </div>
  );
}