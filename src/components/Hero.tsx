import { ArrowRight, CheckCircle, Zap, Shield, Play, Router, Wifi, Server, Smartphone, Laptop, Radio, Monitor, HardDrive, Tv, Tablet, Watch, Headphones, Speaker, Printer, Camera } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-16 flex items-center overflow-hidden bg-white text-slate-900 border-b border-slate-200">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/[0.03] rounded-full blur-3xl glow-bg"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/[0.03] rounded-full blur-3xl glow-bg" style={{ animationDelay: "5s" }}></div>
        {/* Abstract cyber grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Persuasive Copy Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full text-blue-700 text-xs sm:text-sm font-bold tracking-wide self-center lg:self-start mb-6"
            >
              <Zap className="w-4 h-4 fill-blue-600 text-blue-600 animate-pulse" />
              <span>Instalación Express 24 horas en Quevedo</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight lg:leading-[1.1] text-slate-950 mb-6"
              id="hero-title"
            >
              El Internet que vuela.<br className="hidden sm:inline" /> 
              <span className="text-blue-600 underline decoration-orange-500 decoration-4 underline-offset-8">
                Fibra Óptica Real
              </span> en Quevedo
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
              id="hero-subtitle"
            >
              Navega a velocidades extremas de hasta <strong className="text-slate-900 font-bold">900+ Mbps</strong> de velocidad simétrica (misma velocidad de subida y bajada). Olvídate de los microcortes por lluvia y disfruta del soporte 100% local más ágil.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <button
                onClick={() => scrollToSection("planes")}
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-orange-200 flex items-center justify-center gap-3 group text-base"
                id="btn-hero-planes"
              >
                <span>Ver Planes Disponibles</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("cobertura")}
                className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-bold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-base"
                id="btn-hero-cobertura"
              >
                <span>Consultar Cobertura</span>
              </button>
            </motion.div>

            {/* Micro-reassurance points */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-200 pt-6 max-w-xl mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm text-slate-500 font-bold">Sin cláusulas abusivas</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm text-slate-500 font-bold">Soporte Técnico 24/7</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm text-slate-500 font-bold">Precios fijos</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Immersive Interactive Speed dial / UI Showcase */}
          <div className="lg:col-span-5 flex justify-center mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-lg mx-auto"
            >
              <div className="relative aspect-square">
                {/* Central Element: Router/Connection */}
                <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-white border border-slate-100 rounded-full shadow-2xl flex items-center justify-center relative z-10">
                  <div className="absolute inset-2 border border-dashed border-blue-200 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute inset-10 border border-slate-100 rounded-full"></div>
                  
                  <div className="w-32 h-32 sm:w-40 sm:h-40 bg-blue-50 rounded-full flex items-center justify-center relative z-20">
                    <Router className="w-16 h-16 sm:w-20 sm:h-20 text-blue-600" />
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute -bottom-4 bg-slate-900 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 z-30">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                    Red Óptima Activa
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 left-0 sm:-left-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-30"
                >
                  <div className="bg-orange-100 p-2.5 rounded-lg text-orange-600">
                    <Wifi className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Fibra Óptica</div>
                    <div className="text-sm font-black text-slate-900 leading-none mt-1">1000 Mbps</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [10, -10, 10] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-20 right-0 sm:-right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-30"
                >
                  <div className="bg-emerald-100 p-2.5 rounded-lg text-emerald-600">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Equipos</div>
                    <div className="text-sm font-black text-slate-900 leading-none mt-1">Alta Gama</div>
                  </div>
                </motion.div>
                {/* Orbiting Icons */}
                {[
                  { Icon: Smartphone, color: "text-blue-500", delay: 0, duration: 25, radius: 140 },
                  { Icon: Monitor, color: "text-orange-500", delay: -2, duration: 28, radius: 160 },
                  { Icon: Laptop, color: "text-emerald-500", delay: -4, duration: 32, radius: 180 },
                  { Icon: Radio, color: "text-indigo-500", delay: -6, duration: 22, radius: 150 },
                  { Icon: HardDrive, color: "text-rose-500", delay: -8, duration: 26, radius: 170 },
                  { Icon: Tv, color: "text-purple-500", delay: -10, duration: 24, radius: 190 },
                  { Icon: Tablet, color: "text-pink-500", delay: -12, duration: 30, radius: 145 },
                  { Icon: Watch, color: "text-yellow-500", delay: -14, duration: 20, radius: 165 },
                  { Icon: Headphones, color: "text-cyan-500", delay: -16, duration: 27, radius: 185 },
                  { Icon: Speaker, color: "text-teal-500", delay: -18, duration: 29, radius: 155 },
                  { Icon: Printer, color: "text-red-500", delay: -20, duration: 31, radius: 175 },
                  { Icon: Camera, color: "text-fuchsia-500", delay: -22, duration: 23, radius: 195 },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 top-1/2 z-20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: item.duration, repeat: Infinity, ease: "linear", delay: item.delay }}
                  >
                    <div style={{ transform: `translateY(-${item.radius}px)` }}>
                      <motion.div 
                        animate={{ rotate: -360 }} 
                        transition={{ duration: item.duration, repeat: Infinity, ease: "linear", delay: item.delay }}
                        className={`p-3 bg-white rounded-xl shadow-lg border border-slate-100 ${item.color} flex items-center justify-center -ml-6 -mt-6`}
                        style={{ width: "48px", height: "48px" }}
                      >
                        <item.Icon className="w-6 h-6" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Decorative dots */}
                <div className="absolute top-1/4 right-10 w-3 h-3 bg-blue-400 rounded-full blur-sm"></div>
                <div className="absolute bottom-1/3 left-10 w-4 h-4 bg-orange-400 rounded-full blur-sm"></div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
