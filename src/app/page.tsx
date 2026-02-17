import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import GameShowcase from "@/components/GameShowcase";
import EscapeRooms from "@/components/EscapeRooms";
import Integrations from "@/components/Integrations";
import Pillars from "@/components/Pillars";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <GameShowcase />
      <EscapeRooms />
      <Integrations />
      <Pillars />
      <About />
      <Footer />
    </main>
  );
}
