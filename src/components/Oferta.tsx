export default function Oferta() {
  const inclui = [
    "Divulgação de vagas",
    "Atração de candidatos",
    "Recebimento de currículos",
    "Triagem e análise de perfis",
    "Entrevistas e avaliação",
    "Seleção dos candidatos mais compatíveis",
    "Apresentação dos candidatos à empresa",
    "Acompanhamento do processo seletivo",
    "Banco de talentos para futuras oportunidades",
  ];

  return (
    <section className="relative bg-gray-50 py-20 px-4 overflow-hidden">
      {/* Decoração */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
         
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Está Incluso?
          </h2>
        </div>

        <div className="relative bg-white rounded-3xl shadow-elegant-lg border border-gray-100 p-8 md:p-12">
          {/* Badge decorativo */}
          <div className="absolute -top-4 left-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
            SERVIÇO COMPLETO
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mt-4 mb-10">
            {inclui.map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0"
              >
                <div className="shrink-0 w-7 h-7 bg-green-50 border border-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* Frase final */}
          <div className="text-center border-t border-gray-100 pt-8">
            <div className="decorative-line mx-auto mb-6" />
            <p className="text-gray-500 italic leading-relaxed max-w-xl mx-auto">
              Um processo organizado, estratégico e humanizado para conectar empresas
              aos talentos certos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
