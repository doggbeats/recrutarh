export default function CtaFinal() {
  return (
    <section
      id="contato"
      className="bg-zinc-900 from-indigo-600 to-purple-600 text-white py-16 px-4"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto Para Encontrar os Melhores Profissionais?
        </h2>
        <p className="text-indigo-100 text-lg mb-8 max-w-xl mx-auto">
          Cada dia com a vaga aberta é um dia de oportunidade perdida. Vamos mudar isso agora.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5561982473176"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            💬 FALAR NO WHATSAPP
          </a>
         
        </div>
      </div>
    </section>
  );
}
