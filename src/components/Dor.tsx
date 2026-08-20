export default function Dor() {
  const dores = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titulo: "Vagas Abertas por Meses",
      descricao:
        "Sua vaga fica aberta enquanto seus concorrentes já encontraram o profissional ideal.",
      cor: "bg-red-50",
      corIcon: "text-red-500 bg-red-100",
      corBorder: "border-red-100",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      titulo: "Currículos Desqualificados",
      descricao:
        "Centenas de currículos e nenhum candidato que realmente se encaixa na vaga.",
      cor: "bg-amber-50",
      corIcon: "text-amber-500 bg-amber-100",
      corBorder: "border-amber-100",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
      titulo: "Perda de Dinheiro e Tempo",
      descricao:
        "Cada dia com a vaga aberta é um dia de produtividade perdida e custo para a empresa.",
      cor: "bg-purple-50",
      corIcon: "text-purple-500 bg-purple-100",
      corBorder: "border-purple-100",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20 px-4">
      <div className="relative max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Você Vive Alguma Dessas Situações?
        </h2>
        <p className="text-gray-500 text-center mb-14 max-w-2xl mx-auto">
          Se identificou? Você não está sozinho. A maioria das empresas enfrenta esses
          problemas todos os dias.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {dores.map((dor, i) => (
            <div
              key={dor.titulo}
              className={`group ${dor.cor} border ${dor.corBorder} rounded-2xl p-8 hover-lift transition-all duration-300`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className={`w-14 h-14 ${dor.corIcon} rounded-xl flex items-center justify-center mb-4`}>
                {dor.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{dor.titulo}</h3>
              <p className="text-gray-600 leading-relaxed">{dor.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
