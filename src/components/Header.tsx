import { useState, useEffect } from "react";
import { Wifi, Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            id="nav-logo"
          >
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center group-hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/10">
              <Wifi className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-tighter text-blue-900">
              Fibra<span className="text-blue-600 underline decoration-orange-500 decoration-2 underline-offset-4">Net</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-bold text-sm"
              id="btn-nav-inicio"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-bold text-sm"
              id="btn-nav-beneficios"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("equipos")}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-bold text-sm"
              id="btn-nav-equipos"
            >
              Equipos
            </button>
            <button
              onClick={() => scrollToSection("calculadora")}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-bold text-sm"
              id="btn-nav-calculadora"
            >
              Calculadora
            </button>
            <button
              onClick={() => scrollToSection("planes")}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-bold text-sm"
              id="btn-nav-planes"
            >
              Planes
            </button>
            <button
              onClick={() => scrollToSection("cobertura")}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-bold text-sm"
              id="btn-nav-cobertura"
            >
              Cobertura
            </button>
          </nav>

          {/* CTA & Contact Button */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://wa.me/593987654321?text=Hola%20FibraNet!%20Me%20interesa%20contratar%20el%20servicio%20de%20Internet."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200 text-sm font-bold"
              id="link-header-whatsapp"
            >
              <Phone className="w-4 h-4 text-orange-500" />
              <span>098 765 4321</span>
            </a>
            <button
              onClick={() => scrollToSection("planes")}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-lg shadow-orange-500/10"
              id="btn-header-cta"
            >
              CONTRATA
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-blue-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Abrir menú"
              id="btn-mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-2xl backdrop-blur-lg">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all font-bold text-base"
            id="btn-mob-inicio"
          >
            Inicio
          </button>
          <button
            onClick={() => {
              scrollToSection("beneficios");
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all font-bold text-base"
            id="btn-mob-beneficios"
          >
            Beneficios
          </button>
          <button
            onClick={() => {
              scrollToSection("equipos");
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all font-bold text-base"
            id="btn-mob-equipos"
          >
            Catálogo de Equipos
          </button>
          <button
            onClick={() => {
              scrollToSection("calculadora");
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all font-bold text-base"
            id="btn-mob-calculadora"
          >
            Calculadora de Plan
          </button>
          <button
            onClick={() => {
              scrollToSection("planes");
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all font-bold text-base"
            id="btn-mob-planes"
          >
            Planes de Fibra
          </button>
          <button
            onClick={() => {
              scrollToSection("cobertura");
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all font-bold text-base"
            id="btn-mob-cobertura"
          >
            Verificar Cobertura
          </button>
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3 px-3">
            <a
              href="https://wa.me/593987654321?text=Hola%20FibraNet!%20Me%20interesa%20contratar%20el%20servicio%20de%20Internet."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors py-1"
              id="link-mob-whatsapp"
            >
              <Phone className="w-5 h-5 text-orange-500" />
              <span className="font-bold">098 765 4321</span>
            </a>
            <button
              onClick={() => {
                scrollToSection("cobertura");
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-all text-center shadow-lg shadow-orange-500/10"
              id="btn-mob-cta"
            >
              Consultar Cobertura Gratis
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
