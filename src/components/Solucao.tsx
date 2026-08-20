export default function Solucao() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Quem é a
          <span className="text-indigo-600"> Ana Paula RH</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          Sou Ana Paula, profissional de Recursos Humanos e fundadora da{" "}
          <strong>Ana Paula RH</strong>, especializada em recrutamento e seleção,
          triagem de currículos e divulgação de oportunidades. Meu trabalho nasceu do
          propósito de <strong>aproximar empresas de profissionais</strong> que realmente
          tenham potencial para fazer parte de suas equipes, tornando o processo de
          contratação mais organizado, estratégico e humanizado.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
          <div className="bg-indigo-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-indigo-700 mb-3">🏢 Para as Empresas</h3>
            <p className="text-gray-600">
              Suporte na divulgação de vagas, atração e triagem de candidatos e condução
              de processos seletivos. Conecto as necessidades da sua empresa aos talentos
              certos, com profissionalismo e organização.
            </p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-purple-700 mb-3">👤 Para os Candidatos</h3>
            <p className="text-gray-600">
              Disponibilizo oportunidades e um espaço para cadastro no nosso banco de
              talentos, facilitando o acesso a novas possibilidades profissionais.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-8">O Que Fazemos</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: "📋", titulo: "Recrutamento & Seleção" },
            { icon: "📄", titulo: "Triagem de Currículos" },
            { icon: "📢", titulo: "Divulgação de Vagas" },
            { icon: "💼", titulo: "Banco de Talentos" },
            { icon: "🎯", titulo: "Atração de Candidatos" },
          ].map((servico) => (
            <div
              key={servico.titulo}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-indigo-50 transition-colors duration-300"
            >
              <span className="text-3xl block mb-3">{servico.icon}</span>
              <p className="font-bold text-gray-800">{servico.titulo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
