import { useState, ChangeEvent, FormEvent } from "react";
import { Search, MapPin, CheckCircle, Smartphone, AlertCircle, Sparkles, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LeadData {
  nombre: string;
  telefono: string;
  direccion: string;
  sector: string;
  plan: string;
}

export default function CoverageChecker() {
  const [formData, setFormData] = useState<LeadData>({
    nombre: "",
    telefono: "",
    direccion: "",
    sector: "centro",
    plan: "familiar"
  });

  const [scanStep, setScanStep] = useState<number>(0); // 0: Idle, 1: Connecting, 2: Mapping, 3: Verifying, 4: Done
  const [errorMessage, setErrorMessage] = useState<string>("");

  const SECTORES = [
    { value: "centro", label: "Quevedo Centro" },
    { value: "sancamilo", label: "San Camilo" },
    { value: "elguayacan", label: "El Guayacán" },
    { value: "venus", label: "La Venus" },
    { value: "7deoctubre", label: "7 de Octubre" },
    { value: "sanrafael", label: "San Rafael" },
    { value: "alrededores", label: "Zonas Aledañas / Recintos" }
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage("");
  };

  const handleScanStart = (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.nombre.trim()) {
      setErrorMessage("Por favor ingresa tu nombre completo.");
      return;
    }
    if (!formData.telefono.trim() || formData.telefono.length < 8) {
      setErrorMessage("Ingresa un número de teléfono o WhatsApp válido.");
      return;
    }
    if (!formData.direccion.trim()) {
      setErrorMessage("Por favor ingresa tu dirección exacta.");
      return;
    }

    setScanStep(1);

    // Simulate tech mapping steps
    setTimeout(() => {
      setScanStep(2);
    }, 1200);

    setTimeout(() => {
      setScanStep(3);
    }, 2400);

    setTimeout(() => {
      setScanStep(4);
      // Store in localStorage as demo of persistence
      const currentInquiries = JSON.parse(localStorage.getItem("fibranet_leads") || "[]");
      currentInquiries.push({
        ...formData,
        date: new Date().toLocaleString(),
        status: "Factible"
      });
      localStorage.setItem("fibranet_leads", JSON.stringify(currentInquiries));
    }, 3800);
  };

  const claimInstallation = () => {
    const selectedSectorLabel = SECTORES.find(s => s.value === formData.sector)?.label || formData.sector;
    const text = `¡Hola FibraNet! Verifiqué mi cobertura en la web y salió FACTIBLE.\n\n👤 Nombre: ${formData.nombre}\n📞 Teléfono: ${formData.telefono}\n📍 Sector: ${selectedSectorLabel}\n🏠 Dirección: ${formData.direccion}\n⚡ Plan de interés: ${formData.plan.toUpperCase()}\n🎁 Cupón de Instalación: FIBRANET2026_GRATIS`;
    window.open(`https://wa.me/593987654321?text=${encodeURIComponent(text)}`, "_blank");
  };

  const resetForm = () => {
    setFormData({
      nombre: "",
      telefono: "",
      direccion: "",
      sector: "centro",
      plan: "familiar"
    });
    setScanStep(0);
  };

  return (
    <section id="cobertura" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Visual cyber mesh background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-orange-500/[0.02] rounded-full blur-3xl glow-bg"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/[0.02] rounded-full blur-3xl glow-bg" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Persuasive Text and Location Banner */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">Cobertura Local</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-3 leading-tight">
              Verifica cobertura en tu domicilio
            </h2>
            <p className="text-slate-600 mt-4 text-base leading-relaxed">
              Estamos expandiendo nuestra red ultrarrápida de fibra óptica FTTH por todo <strong className="text-slate-900 font-black">Quevedo y zonas aledañas</strong>. Consulta la disponibilidad técnica de tu sector en tiempo real.
            </p>

            {/* Local sector tags */}
            <div className="mt-8">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-3 font-bold">Sectores activos en Quevedo:</span>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {SECTORES.slice(0, 6).map((sector) => (
                  <span key={sector.value} className="bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 hover:border-slate-300 transition-all">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    {sector.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Dynamic Interactive Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-10 rounded-3xl max-w-xl mx-auto shadow-lg relative">
              
              {/* Form header / indicator */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">Consulta de Factibilidad</h3>
                  <p className="text-xs text-slate-500 font-medium">Verificador automático FibraNet</p>
                </div>
              </div>

              {/* Steps Animation / Content */}
              <AnimatePresence mode="wait">
                {scanStep === 0 && (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleScanStart}
                    className="space-y-4"
                  >
                    {/* Error message */}
                    {errorMessage && (
                      <div className="bg-red-50 border border-red-200 text-red-600 p-3.5 rounded-lg text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Nombre */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-1.5 font-bold">Nombre Completo</label>
                      <input
                        type="text"
                        name="nombre"
                        placeholder="Ej. Juan Pérez"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none transition-all placeholder:text-slate-400"
                        id="input-cov-nombre"
                      />
                    </div>

                    {/* Teléfono / WhatsApp */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-1.5 font-bold">Teléfono o WhatsApp</label>
                      <input
                        type="tel"
                        name="telefono"
                        placeholder="Ej. 0987654321"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none transition-all placeholder:text-slate-400"
                        id="input-cov-telefono"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Sector */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-1.5 font-bold">Sector en Quevedo</label>
                        <select
                          name="sector"
                          value={formData.sector}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none transition-all cursor-pointer"
                          id="select-cov-sector"
                        >
                          {SECTORES.map((sector) => (
                            <option key={sector.value} value={sector.value} className="bg-white text-slate-950">
                              {sector.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Plan de interés */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-1.5 font-bold">Plan de interés</label>
                        <select
                          name="plan"
                          value={formData.plan}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none transition-all cursor-pointer"
                          id="select-cov-plan"
                        >
                          <option value="basico" className="bg-white text-slate-950">Plan Esencial (500M - $20)</option>
                          <option value="familiar" className="bg-white text-slate-950">Plan Familiar (700M - $30)</option>
                          <option value="pro" className="bg-white text-slate-950">Plan Pro Gamer (900M - $50)</option>
                        </select>
                      </div>
                    </div>

                    {/* Dirección */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-1.5 font-bold">Dirección Exacta</label>
                      <input
                        type="text"
                        name="direccion"
                        placeholder="Ej. Calle Décima y Av. Guayaquil, frente a la farmacia"
                        value={formData.direccion}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none transition-all placeholder:text-slate-400"
                        id="input-cov-direccion"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-200 cursor-pointer"
                      id="btn-cov-submit"
                    >
                      <span>Verificar Cobertura Gratis</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </motion.form>
                )}

                {/* Loading / Scanning Simulator steps */}
                {scanStep > 0 && scanStep < 4 && (
                  <motion.div
                    key="scanning"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <Loader2 className="w-16 h-16 text-blue-600 animate-spin mb-6" />
                    
                    <div className="space-y-2 h-20">
                      {scanStep === 1 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          <h4 className="text-slate-900 font-bold text-lg">Estableciendo conexión...</h4>
                          <p className="text-sm text-slate-500">Accediendo a la base de redes de Quevedo...</p>
                        </motion.div>
                      )}
                      {scanStep === 2 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          <h4 className="text-slate-900 font-bold text-lg">Mapeando infraestructura FTTH...</h4>
                          <p className="text-sm text-slate-500">Verificando cercanía de cajas de distribución...</p>
                        </motion.div>
                      )}
                      {scanStep === 3 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          <h4 className="text-slate-900 font-bold text-lg">Verificando puertos disponibles...</h4>
                          <p className="text-sm text-slate-500">Buscando factibilidad directa para tu dirección...</p>
                        </motion.div>
                      )}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden border border-slate-100 max-w-xs mt-6">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full"
                        initial={{ width: "0%" }}
                        animate={{ width: scanStep === 1 ? "30%" : scanStep === 2 ? "65%" : "90%" }}
                        transition={{ duration: 1.2 }}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Done / Super high-converting Voucher Claim */}
                {scanStep === 4 && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-6 text-center"
                  >
                    {/* Glowing Check Icon */}
                    <div className="bg-emerald-100 p-4 rounded-full border border-emerald-200 text-emerald-600 mb-6 relative">
                      <CheckCircle className="w-12 h-12 stroke-[2.5]" />
                      <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-xl animate-ping opacity-60"></div>
                    </div>

                    <h4 className="text-slate-900 font-black text-2xl tracking-tight mb-2">
                      ¡Felicidades, {formData.nombre}!
                    </h4>
                    
                    <p className="text-slate-600 text-sm max-w-md leading-relaxed mb-6 font-medium">
                      Hemos verificado disponibilidad para el sector de <strong className="text-blue-600 font-bold">{SECTORES.find(s => s.value === formData.sector)?.label}</strong>. ¡Estás listo para navegar al máximo nivel!
                    </p>

                    {/* Coupon Box Design */}
                    <div className="w-full bg-white border border-slate-200 rounded-2xl p-6 mb-8 relative overflow-hidden border-dashed">
                      <div className="absolute top-0 right-0 w-8 h-8 bg-slate-50 border-b border-l border-slate-200 rounded-bl-full"></div>
                      <div className="absolute top-0 left-0 w-8 h-8 bg-slate-50 border-b border-r border-slate-200 rounded-br-full"></div>
                      
                      <span className="text-slate-400 font-mono text-[10px] uppercase tracking-widest block mb-1 font-bold">Tu beneficio exclusivo web</span>
                      <span className="font-display font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 tracking-wide block">
                        INSTALACIÓN 100% GRATIS
                      </span>
                      
                      {/* Promo Code Box */}
                      <div className="inline-block mt-4 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 font-mono text-xs text-slate-700">
                        Código: <strong className="text-orange-500 tracking-wide font-bold">FIBRANET_COMPROBADO</strong>
                      </div>
                    </div>

                    {/* Submit Claims */}
                    <div className="w-full flex flex-col gap-3">
                      <button
                        onClick={claimInstallation}
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-200 cursor-pointer"
                        id="btn-claim-install-whatsapp"
                      >
                        <Smartphone className="w-5 h-5 fill-current" />
                        <span>Reclamar Instalación por WhatsApp</span>
                      </button>
                      <button
                        onClick={resetForm}
                        className="text-slate-400 hover:text-slate-600 text-xs font-bold underline py-1 cursor-pointer"
                        id="btn-re-verify-coverage"
                      >
                        Verificar otra dirección
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
