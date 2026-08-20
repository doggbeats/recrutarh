export default function Solucao() {
  return (
    <section className="relative bg-white py-20 px-4 overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
       

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Conheça a{" "}
          <span className="text-gradient">Ana Paula RH</span>
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-14 leading-relaxed">
          Sou Ana Paula, profissional de Recursos Humanos e fundadora da{" "}
          <strong className="text-gray-800">Ana Paula RH</strong>, especializada em
          recrutamento e seleção, triagem de currículos e divulgação de oportunidades.
          Meu trabalho nasceu do propósito de{" "}
          <strong className="text-gray-800">
            aproximar empresas de profissionais
          </strong>{" "}
          que realmente tenham potencial para fazer parte de suas equipes, tornando o
          processo de contratação mais organizado, estratégico e humanizado.
        </p>

        {/* Cards Empresa / Candidato */}
        <div className="grid md:grid-cols-2 gap-6 text-left mb-14">
          <div className="group relative bg-gradient-to-br from-indigo-50 to-indigo-100/50 border border-indigo-100 rounded-2xl p-8 hover-lift">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/25">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-indigo-900 mb-3">
              Para as Empresas
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Suporte na divulgação de vagas, atração e triagem de candidatos e condução
              de processos seletivos. Conecto as necessidades da sua empresa aos talentos
              certos, com profissionalismo e organização.
            </p>
          </div>

          <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-100 rounded-2xl p-8 hover-lift">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/25">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-purple-900 mb-3">
              Para os Candidatos
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Disponibilizo oportunidades e um espaço para cadastro no nosso banco de
              talentos, facilitando o acesso a novas possibilidades profissionais.
            </p>
          </div>
        </div>

        {/* Serviços */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2">O Que Fazemos</h3>
        <div className="decorative-line mx-auto mb-10" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { icon: "📋", titulo: "Recrutamento & Seleção" },
            { icon: "📄", titulo: "Triagem de Currículos" },
            { icon: "📢", titulo: "Divulgação de Vagas" },
            { icon: "💼", titulo: "Banco de Talentos" },
            { icon: "🎯", titulo: "Atração de Candidatos" },
          ].map((servico, i) => (
            <div
              key={servico.titulo}
              className="group bg-white border border-gray-100 rounded-2xl p-6 text-center hover-lift shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
            >
              <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform duration-300">
                {servico.icon}
              </span>
              <p className="font-bold text-gray-800 text-sm">{servico.titulo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
