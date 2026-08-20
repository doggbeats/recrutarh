export default function ComoFunciona() {
  const passos = [
    {
      passo: "1",
      titulo: "Análise da Vaga",
      descricao: "Entendo profundamente o perfil que você precisa, a cultura da empresa e os requisitos da vaga.",
    },
    {
      passo: "2",
      titulo: "Estratégia de Tráfego",
      descricao: "Crio campanhas segmentadas nos canais ideais para alcançar os profissionais certos.",
    },
    {
      passo: "3",
      titulo: "Captação de Leads",
      descricao: "Os candidatos qualificados chegam até você via formulário, WhatsApp ou e-mail.",
    },
    {
      passo: "4",
      titulo: "Entrega dos Candidatos",
      descricao: "Você recebe os perfis pré-avaliodos e pronto para iniciar o processo seletivo.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Como funciona?
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          Um processo simples e transparente, do primeiro contato à contratação.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {passos.map((p) => (
            <div key={p.passo} className="text-center relative">
              <div className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
