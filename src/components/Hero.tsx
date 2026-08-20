import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-zinc-100 from-indigo-600  text-zinc-900 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Image
          src="/logo.jpeg"
          alt="Logo"
          width={160}
          height={160}
          className="mx-auto mb-8 rounded-full shadow-lg object-cover"
          priority
        />
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Conectando talentos às oportunidades certas.
        </h1>
        <p className="text-xl md:text-2xl text-zinc-900 mb-8 max-w-2xl mx-auto">
          A Ana Paula RH aproxima empresas de profissionais com potencial, tornando o processo de recrutamento mais organizado, estratégico e humanizado.
        </p>
        <a
          href="#contato"
          className="inline-block bg-yellow-400 text-gray-900 font-bold text-lg px-10 py-4 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          SOU UM PROFISSIONAL E QUERO ENCONTRAR MINHA PRÓXIMA OPORTUNIDADE
        </a>
        <br/>
        <br/>
         <a
          href="#contato"
          className="inline-block bg-yellow-400 text-gray-900 font-bold text-lg px-10 py-4 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          SOU UMA EMPRESA E QUERO ENCONTRAR MEUS PRÓXIMOS FUNCIONÁRIOS
        </a>
        <p className="mt-6 zinc-900 text-sm">
          ✅ Atendimento gratuito · ✅ Resultados em até 7 dias · ✅ Multi-nicho
        </p>
      </div>
    </section>
  );
}
