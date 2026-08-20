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
    <section className="relative bg-white py-20 px-4 overflow-hidden">
      {/* Decoração */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="badge bg-indigo-50 text-indigo-600 border border-indigo-100 mx-auto mb-4">
            Passo a passo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como Funciona?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Um processo completo e humanizado, do primeiro contato ao acompanhamento
            final.
          </p>
        </div>

        <div className="relative">
          {/* Linha conectora vertical (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200" />

          <div className="grid md:grid-cols-3 gap-8">
            {passos.map((p, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={p.passo}
                  className={`relative flex flex-col items-center text-center ${
                    isLeft ? "md:col-start-1" : "md:col-start-3"
                  }`}
                  style={{ gridColumn: undefined }}
                >
                  {/* Número do passo */}
                  <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-indigo-500/20 hover:scale-110 transition-transform duration-300">
                    {p.passo}
                  </div>

                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 w-full hover-lift shadow-elegant hover:shadow-elegant-lg transition-all duration-300">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {p.titulo}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {p.descricao}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
