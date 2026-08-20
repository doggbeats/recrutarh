export default function CtaFinal() {
  return (
    <section
      id="contato"
      className="relative bg-gray-50 py-24 px-4 overflow-hidden"
    >
      {/* Decorações sutis */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-3xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Pronto Para Encontrar os{" "}
          <span className="text-gradient">Melhores Profissionais?</span>
        </h2>

        <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Cada dia com a vaga aberta é um dia de oportunidade perdida. Vamos mudar
          isso agora.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pela%20landing%20page%20e%20quero%20saber%20mais%20sobre%20o%20recrutamento."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-green-500 text-white font-bold text-lg px-8 py-5 rounded-full transition-all duration-300 hover:bg-green-600 hover:scale-105 shadow-xl shadow-green-500/30"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            FALAR NO WHATSAPP
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* E-mail */}
          <a
            href="mailto:contato@anapaularh.com.br"
            className="group relative inline-flex items-center gap-3 bg-white text-gray-700 border border-gray-200 font-bold text-lg px-8 py-5 rounded-full transition-all duration-300 hover:bg-gray-50 hover:scale-105 shadow-elegant"
          >
            <svg
              className="w-6 h-6 text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            ENVIAR E-MAIL
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
