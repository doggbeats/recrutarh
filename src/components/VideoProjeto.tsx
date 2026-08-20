export default function VideoProjeto() {
  return (
    <section className="relative bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Conheça Nosso <span className="text-gradient">Trabalho</span>
        </h2>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
          Veja como conectamos profissionais qualificados às melhores empresas.
        </p>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-gray-100">
          <video
            className="w-full h-auto"
            controls
            playsInline
            preload="metadata"
            poster="/logo.jpeg"
          >
            <source src="/recrutaana.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeos.
          </video>
        </div>
      </div>
    </section>
  );
}
