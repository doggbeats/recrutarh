import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-24 px-4">
      {/* Decorações de fundo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-100/60 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-100/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-3xl" />

      {/* Padrão decorativo sutil */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
        backgroundSize: "24px 24px"
      }} />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="animate-fade-in-down">
          <Image
            src="/logo.jpeg"
            alt="Ana Paula RH"
            width={120}
            height={120}
            className="mx-auto mb-8 rounded-full object-cover border-4 border-white shadow-elegant-lg"
            priority
          />
        </div>

        {/* Badge */}
        <div className="animate-fade-in-up delay-100">
          <span className="badge bg-green-50 text-green-700 border border-green-200 mx-auto mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse" />
            Atendimento Disponível
          </span>
        </div>

        {/* Título principal */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-gray-900 animate-fade-in-up delay-200">
          Conectando Talentos às{" "}
          <span className="text-gradient">Oportunidades Certas</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
          Soluções em recrutamento e seleção para empresas que buscam profissionais
          qualificados e candidatos que desejam encontrar novas oportunidades.
        </p>

        {/* CTA Principal */}
        <div className="animate-fade-in-up delay-400">
          <a
            href="#contato"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-indigo-500/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]"
          >
            QUERO ENCONTRAR MEUS PRÓXIMOS FUNCIONÁRIOS
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 animate-fade-in-up delay-400">
          {[
            "Atendimento gratuito",
            "Resultados em até 7 dias",
            "Multi-nicho",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
