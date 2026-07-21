import { ShieldAlert, Router, Headphones, Zap, Signal, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const BENEFITS = [
  {
    title: "Internet 100% Simétrico",
    description: "La misma velocidad para subir y descargar. Ideal para streaming 4K, gaming y teletrabajo sin interrupciones ni cuellos de botella.",
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    tag: "Subida = Bajada",
    bgClass: "bg-blue-50 border-blue-200",
    hoverClass: "hover:border-blue-400 hover:shadow-blue-500/20",
    iconBg: "bg-white border-blue-100 shadow-sm",
    textColor: "text-blue-900",
    tagColor: "text-blue-700 bg-blue-100/50"
  },
  {
    title: "Equipos de Alta Gama",
    description: "No solo te damos internet. Proveemos Routers WiFi de doble banda, ONTs de última generación y antenas profesionales para máxima potencia.",
    icon: <Router className="w-8 h-8 text-orange-600" />,
    tag: "Hardware Avanzado",
    bgClass: "bg-orange-50 border-orange-200",
    hoverClass: "hover:border-orange-400 hover:shadow-orange-500/20",
    iconBg: "bg-white border-orange-100 shadow-sm",
    textColor: "text-orange-900",
    tagColor: "text-orange-700 bg-orange-100/50"
  },
  {
    title: "Red Mesh: Cobertura Total",
    description: "Elimina las zonas sin WiFi en tu casa u oficina con nuestros sistemas de red Mesh inteligentes que amplifican la señal en cada rincón.",
    icon: <Signal className="w-8 h-8 text-emerald-600" />,
    tag: "Cero Zonas Muertas",
    bgClass: "bg-emerald-50 border-emerald-200",
    hoverClass: "hover:border-emerald-400 hover:shadow-emerald-500/20",
    iconBg: "bg-white border-emerald-100 shadow-sm",
    textColor: "text-emerald-900",
    tagColor: "text-emerald-700 bg-emerald-100/50"
  },
  {
    title: "Asesoría y Soporte Local",
    description: "Expertos en telecomunicaciones físicamente en Quevedo. Olvídate de los call centers automatizados, te brindamos atención humana e inmediata.",
    icon: <Headphones className="w-8 h-8 text-purple-600" />,
    tag: "Respuesta Inmediata",
    bgClass: "bg-purple-50 border-purple-200",
    hoverClass: "hover:border-purple-400 hover:shadow-purple-500/20",
    iconBg: "bg-white border-purple-100 shadow-sm",
    textColor: "text-purple-900",
    tagColor: "text-purple-700 bg-purple-100/50"
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Background grids */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-3xl glow-bg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold bg-blue-100 px-3 py-1 rounded-full">Fibra + Equipos</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-6 leading-tight">
            Nuestra Fórmula para el Internet Perfecto
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg font-medium">
            Combinamos fibra óptica real directa al hogar (FTTH) con equipos de telecomunicación de última generación para garantizar la mejor experiencia.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {BENEFITS.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`border p-8 sm:p-10 rounded-3xl transition-all duration-300 group flex flex-col justify-between shadow-sm relative overflow-hidden ${benefit.bgClass} ${benefit.hoverClass}`}
            >
              {/* Large faded icon in background */}
              <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                {benefit.icon}
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  {/* Icon block */}
                  <div className={`w-16 h-16 border rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${benefit.iconBg}`}>
                    {benefit.icon}
                  </div>
                  
                  {/* Tag */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20 ${benefit.tagColor}`}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{benefit.tag}</span>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className={`font-display text-2xl sm:text-3xl font-black mb-4 ${benefit.textColor}`}>
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-700 font-medium text-base sm:text-lg leading-relaxed max-w-sm">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison banner */}
        <div className="mt-16 bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow for banner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
          
          <div className="flex items-center gap-6 text-center md:text-left flex-col md:flex-row relative z-10">
            <div className="p-4 bg-orange-500/10 border border-orange-500/20 text-orange-500 rounded-2xl">
              <ShieldAlert className="w-10 h-10" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-black text-white">¿Tu proveedor actual se corta cuando llueve?</h4>
              <p className="text-base text-slate-400 mt-2 max-w-xl">Nuestra infraestructura es inmune a las interferencias del clima y las tormentas de Quevedo. Internet estable 24/7 garantizado.</p>
            </div>
          </div>
          <button 
            onClick={() => document.getElementById("cobertura")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-500/30 hover:-translate-y-1 shrink-0 w-full md:w-auto text-center cursor-pointer relative z-10 text-lg"
            id="btn-benefits-cobertura"
          >
            Comprobar Factibilidad
          </button>
        </div>

      </div>
    </section>
  );
}
