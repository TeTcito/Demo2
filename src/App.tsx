import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import EquipmentCatalog from "./components/EquipmentCatalog";
import InteractiveCalculator from "./components/InteractiveCalculator";
import Plans from "./components/Plans";
import CoverageChecker from "./components/CoverageChecker";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-blue-100 selection:text-blue-600">
      {/* Floating navigation bar */}
      <Header />

      {/* Main Page Layout Flow */}
      <main>
        {/* Section 1: Hero introduction with speed test dial */}
        <Hero />

        {/* Section 2: Interactive speed calculator to recommend plan */}
        <InteractiveCalculator />

        {/* Section 3: Technical Benefits (Symmetry, Low ping, FTTH) */}
        <Benefits />

        {/* Section 4: Three tier Plans (500M / 700M / 900M) with billing period switcher */}
        <Plans />

        {/* Section 5: Equipment Catalog */}
        <EquipmentCatalog />

        {/* Section 6: Geographical Coverage validation form with simulated scanner */}
        <CoverageChecker />
      </main>

      {/* Comprehensive footer and floating WhatsApp lead capture widget */}
      <Footer />
    </div>
  );
}
