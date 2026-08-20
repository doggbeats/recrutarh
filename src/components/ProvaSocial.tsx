export default function ProvaSocial() {
  const numeros = [
    { valor: "500+", label: "Profissionais Contratados" },
    { valor: "98%", label: "Taxa de Satisfação" },
    { valor: "7 dias", label: "Tempo Médio de Resultado" },
    { valor: "50+", label: "Empresas Atendidas" },
  ];

  const depoimentos = [
    {
      nome: "Ricardo Souza",
      cargo: "CEO - TechSolutions",
      texto: "Estava há 3 meses com uma vaga de desenvolvedor aberta. Em 5 dias a Ana encontrou o candidato perfeito. Incrível!",
    },
    {
      nome: "Mariana Costa",
      cargo: "RH - Grupo Inovação",
      texto: "O método de tráfego pago mudou completamente nossa forma de recrutar. Candidatos de muito mais qualidade.",
    },
    {
      nome: "Pedro Lima",
      cargo: "Diretor Comercial - VendasMax",
      texto: "Contratei 3 vendedores em 2 semanas. O investimento se pagou no primeiro mês de vendas da equipe.",
    },
  ];

  return (
    <section className="bg-zinc-800 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Números Que Falam por Si
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {numeros.map((n) => (
            <div key={n.label} className="text-center">
              <span className="text-4xl md:text-5xl font-extrabold text-yellow-300 block mb-2">
                {n.valor}
              </span>
              <span className="text-indigo-200 text-sm">{n.label}</span>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-center mb-8">O Que Dizem Nossos Clientes</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((d) => (
            <div
              key={d.nome}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
            >
              <p className="text-indigo-100 mb-4 italic">&ldquo;{d.texto}&rdquo;</p>
              <div>
                <p className="font-bold text-yellow-300">{d.nome}</p>
                <p className="text-indigo-200 text-sm">{d.cargo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
