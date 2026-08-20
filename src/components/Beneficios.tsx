export default function Beneficios() {
  const beneficios = [
    {
      numero: "01",
      titulo: "Vagas Preenchidas Mais Rápido",
      descricao: "Encontre o profissional certo em dias, não em meses.",
    },
    {
      numero: "02",
      titulo: "Redução de Custo por Contratação",
      descricao: "Invista menos do que gastaria com portais de emprego tradicionais.",
    },
    {
      numero: "03",
      titulo: "Candidatos Pré-Filtrados",
      descricao: "Receba apenas profissionais que realmente se encaixam no perfil da vaga.",
    },
    {
      numero: "04",
      titulo: "Processo Transparente",
      descricao: "Acompanhe em tempo real os resultados das campanhas com relatórios claros.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          O Que Você Ganha Com Isso?
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          Resultados concretos que impactam diretamente no crescimento da sua empresa.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {beneficios.map((b) => (
            <div
              key={b.numero}
              className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-3xl font-extrabold text-indigo-600 shrink-0">
                {b.numero}
              </span>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{b.titulo}</h3>
                <p className="text-gray-500">{b.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
