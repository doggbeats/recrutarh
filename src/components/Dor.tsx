export default function Dor() {
  const dores = [
    {
      emoji: "😩",
      titulo: "Vagas Abertas por Meses",
      descricao: "Sua vaga fica aberta enquanto seus concorrentes já encontraram o profissional ideal.",
    },
    {
      emoji: "😤",
      titulo: "Currículos Desqualificados",
      descricao: "Centenas de currículos e nenhum candidato que realmente se encaixa na vaga.",
    },
    {
      emoji: "😰",
      titulo: "Perda de Dinheiro e Tempo",
      descricao: "Cada dia com a vaga aberta é um dia de produtividade perdida e custo para a empresa.",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Você Vive Alguma Dessas Situações?
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Se identificou? Você não está sozinho. A maioria das empresas enfrenta esses problemas todos os dias.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {dores.map((dor) => (
            <div
              key={dor.titulo}
              className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-colors duration-300"
            >
              <span className="text-5xl block mb-4">{dor.emoji}</span>
              <h3 className="text-xl font-bold mb-3 text-red-400">{dor.titulo}</h3>
              <p className="text-gray-300">{dor.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
