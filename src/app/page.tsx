import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Dor from "@/components/Dor";
import Solucao from "@/components/Solucao";
import Beneficios from "@/components/Beneficios";
import ComoFunciona from "@/components/ComoFunciona";
import Oferta from "@/components/Oferta";
import CtaFinal from "@/components/CtaFinal";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div id="inicio">
        <Hero />
      </div>
      <Dor />
      <div id="sobre">
        <Solucao />
      </div>
      <div id="servicos">
        <Beneficios />
        <Oferta />
      </div>
      <div id="como-funciona">
        <ComoFunciona />
      </div>
      <CtaFinal />
      <Rodape />
    </main>
  );
}
