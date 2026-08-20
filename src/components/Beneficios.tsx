export default function Beneficios() {
  const beneficios = [
    {
      numero: "01",
      titulo: "Vagas Preenchidas Mais Rápido",
      descricao: "Encontre o profissional certo em dias, não em meses.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      numero: "02",
      titulo: "Redução de Custo por Contratação",
      descricao: "Invista menos do que gastaria com portais de emprego tradicionais.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
    },
    {
      numero: "03",
      titulo: "Candidatos Pré-Filtrados",
      descricao: "Receba apenas profissionais que realmente se encaixam no perfil da vaga.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
        </svg>
      ),
    },
    {
      numero: "04",
      titulo: "Processo Transparente",
      descricao: "Acompanhe em tempo real os resultados com relatórios claros.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20 px-4 overflow-hidden">
      {/* Decoração */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
         
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Você Ganha Com Isso?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Resultados concretos que impactam diretamente no crescimento da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {beneficios.map((b, i) => (
            <div
              key={b.numero}
              className="group flex items-start gap-5 bg-white rounded-2xl p-6 border border-gray-100 shadow-elegant hover:shadow-elegant-lg hover-lift transition-all duration-300"
            >
              <div className="shrink-0 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                {b.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-indigo-400 tracking-wider">
                    PASSO {b.numero}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{b.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
