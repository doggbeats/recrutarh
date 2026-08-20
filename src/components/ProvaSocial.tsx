export default function ProvaSocial() {
  const numeros = [
    { valor: "500+", label: "Profissionais Contratados", cor: "text-indigo-600" },
    { valor: "98%", label: "Taxa de Satisfação", cor: "text-purple-600" },
    { valor: "7 dias", label: "Tempo Médio de Resultado", cor: "text-pink-600" },
    { valor: "50+", label: "Empresas Atendidas", cor: "text-amber-600" },
  ];

  const depoimentos = [
    {
      nome: "Ricardo Souza",
      cargo: "CEO - TechSolutions",
      texto:
        "Estava há 3 meses com uma vaga de desenvolvedor aberta. Em 5 dias a Ana encontrou o candidato perfeito. Incrível!",
      avatar: "RS",
    },
    {
      nome: "Mariana Costa",
      cargo: "RH - Grupo Inovação",
      texto:
        "O método de recrutamento mudou completamente nossa forma de contratar. Candidatos de muito mais qualidade.",
      avatar: "MC",
    },
    {
      nome: "Pedro Lima",
      cargo: "Diretor Comercial - VendasMax",
      texto:
        "Contratei 3 vendedores em 2 semanas. O investimento se pagou no primeiro mês de vendas da equipe.",
      avatar: "PL",
    },
  ];

  return (
    <section className="relative bg-white py-20 px-4 overflow-hidden">
      {/* Decorações sutis */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="badge bg-indigo-50 text-indigo-600 border border-indigo-100 mx-auto mb-4">
            Números que comprovam
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resultados Que Falam por Si
          </h2>
        </div>

        {/* Números */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {numeros.map((n) => (
            <div key={n.label} className="text-center group">
              <div className={`text-4xl md:text-5xl font-extrabold ${n.cor} mb-2`}>
                {n.valor}
              </div>
              <span className="text-gray-500 text-sm block">{n.label}</span>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
          O Que Dizem Nossos Clientes
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((d) => (
            <div
              key={d.nome}
              className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 hover-lift shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
            >
              {/* Ícone de aspas */}
              <svg
                className="w-8 h-8 text-indigo-200 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
              </svg>

              <p className="text-gray-600 mb-6 leading-relaxed italic">
                &ldquo;{d.texto}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                  {d.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{d.nome}</p>
                  <p className="text-indigo-500 text-xs">{d.cargo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
