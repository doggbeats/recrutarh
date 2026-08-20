export default function ComoFunciona() {
  const passos = [
    {
      passo: "1",
      titulo: "Entendimento da Vaga",
      descricao:
        "A empresa apresenta a necessidade de contratação e o perfil profissional desejado.",
    },
    {
      passo: "2",
      titulo: "Divulgação e Atração",
      descricao:
        "A vaga é divulgada para alcançar candidatos compatíveis com a oportunidade.",
    },
    {
      passo: "3",
      titulo: "Triagem de Currículos",
      descricao:
        "Os currículos recebidos são analisados de acordo com os requisitos e o perfil definido pela empresa.",
    },
    {
      passo: "4",
      titulo: "Entrevistas",
      descricao:
        "Os candidatos selecionados passam pelas etapas de entrevista e avaliação.",
    },
    {
      passo: "5",
      titulo: "Apresentação dos Candidatos",
      descricao:
        "Os profissionais mais alinhados ao perfil da vaga são apresentados à empresa.",
    },
    {
      passo: "6",
      titulo: "Acompanhamento",
      descricao:
        "A Ana Paula RH acompanha o processo até a etapa final, conforme o serviço contratado.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Como Funciona?
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          Um processo completo e humanizado, do primeiro contato ao acompanhamento final.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {passos.map((p) => (
            <div
              key={p.passo}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {p.passo}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{p.titulo}</h3>
              <p className="text-gray-500 text-sm">{p.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
