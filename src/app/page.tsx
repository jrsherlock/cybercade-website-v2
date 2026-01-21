import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import GameShowcase from "@/components/GameShowcase";
import Integrations from "@/components/Integrations";
import Pillars from "@/components/Pillars";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <GameShowcase />
      <Integrations />
      <Pillars />
      <Pricing />
      <Footer />
    </main>
  );
}
