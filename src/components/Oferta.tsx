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
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          O Que Está Incluso?
        </h2>
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <ul className="space-y-4 mb-8">
            {inclui.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-green-500 text-xl mt-0.5 shrink-0">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-center text-gray-500 italic border-t pt-8">
            Um processo organizado, estratégico e humanizado para conectar empresas aos
            talentos certos.
          </p>
        </div>
      </div>
    </section>
  );
}
