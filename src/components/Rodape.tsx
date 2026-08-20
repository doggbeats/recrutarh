import Image from "next/image";

export default function Rodape() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <Image
          src="/logo.jpeg"
          alt="Logo"
          width={80}
          height={80}
          className="mx-auto mb-4 rounded-full object-cover"
        />
        <p className="text-white font-bold text-lg mb-2">Ana Recrutadora</p>
        <p className="text-sm mb-4">
          Recrutamento inteligente com tráfego pago para empresas que querem crescer rápido.
        </p>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            WhatsApp
          </a>
        </div>
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Pagina criada por Paulo Henrique. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
