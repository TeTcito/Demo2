import { useState, useEffect, ReactNode } from "react";
import { Laptop, Gamepad2, Tv, Users, ArrowRight, Sparkles, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Activity {
  id: string;
  label: string;
  weight: number;
  icon: ReactNode;
}

export default function InteractiveCalculator() {
  const [devices, setDevices] = useState<number>(4);
  const [selectedActivities, setSelectedActivities] = useState<string[]>(["streaming"]);
  const [recommendedPlan, setRecommendedPlan] = useState<"basico" | "familiar" | "pro">("familiar");

  const ACTIVITIES: Activity[] = [
    {
      id: "social",
      label: "Navegación y Redes Sociales",
      weight: 10,
      icon: <Laptop className="w-5 h-5" />
    },
    {
      id: "streaming",
      label: "Streaming 4K / Smart TVs",
      weight: 35,
      icon: <Tv className="w-5 h-5" />
    },
    {
      id: "work",
      label: "Teletrabajo / Videollamadas",
      weight: 25,
      icon: <Users className="w-5 h-5" />
    },
    {
      id: "gaming",
      label: "Gaming competitivo / Ping Bajo",
      weight: 50,
      icon: <Gamepad2 className="w-5 h-5" />
    }
  ];

  const toggleActivity = (id: string) => {
    if (selectedActivities.includes(id)) {
      if (selectedActivities.length > 1) {
        setSelectedActivities(selectedActivities.filter((a) => a !== id));
      }
    } else {
      setSelectedActivities([...selectedActivities, id]);
    }
  };

  useEffect(() => {
    // Recommendation logic based on device load and activity weights
    let totalScore = devices * 12;
    
    ACTIVITIES.forEach((activity) => {
      if (selectedActivities.includes(activity.id)) {
        totalScore += activity.weight;
      }
    });

    if (totalScore < 90 && !selectedActivities.includes("gaming")) {
      setRecommendedPlan("basico");
    } else if (totalScore < 160) {
      setRecommendedPlan("familiar");
    } else {
      setRecommendedPlan("pro");
    }
  }, [devices, selectedActivities]);

  const plansDetails = {
    basico: {
      name: "Plan Esencial 500 Mbps",
      price: "$20",
      speed: "500 Mbps Simétricos",
      desc: "Excelente para hogares pequeños y navegación sin complicaciones.",
      features: ["Ideal para 1-3 dispositivos", "Soporte Local 24/7", "Navegación fluida y descargas rápidas"]
    },
    familiar: {
      name: "Plan Familiar 700 Mbps",
      price: "$30",
      speed: "700 Mbps Simétricos",
      desc: "El equilibrio perfecto para ver series en 4K y teletrabajar en simultáneo.",
      features: ["Ideal para 4-7 dispositivos", "Instalación express GRATIS", "Streaming simultáneo sin retraso"]
    },
    pro: {
      name: "Plan Gamer/Pro 900 Mbps",
      price: "$50",
      speed: "900+ Mbps Simétricos",
      desc: "Velocidad máxima para streamers, gamers profesionales y hogares multi-dispositivo.",
      features: ["Dispositivos ilimitados (8+)", "Latencia optimizada (Ping Premium)", "Atención técnica prioritaria"]
    }
  };

  const handleHirePlan = (planName: string) => {
    const text = `Hola FibraNet! Calculé mi velocidad ideal en la web y me recomendó el ${planName}. Me gustaría contratarlo.`;
    window.open(`https://wa.me/593987654321?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="calculadora" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Light highlights */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/[0.02] rounded-full blur-3xl glow-bg"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/[0.02] rounded-full blur-3xl glow-bg" style={{ animationDelay: "4s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">Asistente Virtual</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-3">
            ¿Cuál es tu velocidad ideal?
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Calcula la velocidad que realmente necesitas según tus dispositivos y tus actividades favoritas para que no pagues de más.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-slate-50 border border-slate-200 p-6 sm:p-10 rounded-3xl max-w-5xl mx-auto shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left: Input sliders and answers */}
            <div className="lg:col-span-7 space-y-8">
              {/* Device Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-slate-900 font-bold text-lg flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>¿Cuántos dispositivos se conectan?</span>
                  </label>
                  <span className="bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1 rounded-lg text-sm font-bold font-mono">
                    {devices === 10 ? "10+ dispositivos" : `${devices} dispositivos`}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={devices}
                  onChange={(e) => setDevices(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
                  id="devices-range-slider"
                />
                <div className="flex justify-between text-xs text-slate-500 font-mono">
                  <span>1 (Hogar individual)</span>
                  <span>5 (Familiar medio)</span>
                  <span>10+ (Smarthome completo)</span>
                </div>
              </div>

              {/* Activities selector */}
              <div className="space-y-4">
                <label className="text-slate-900 font-bold text-lg block">
                  ¿Qué actividades realizan principalmente?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ACTIVITIES.map((act) => {
                    const isSelected = selectedActivities.includes(act.id);
                    return (
                      <button
                        key={act.id}
                        onClick={() => toggleActivity(act.id)}
                        className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${
                          isSelected
                            ? "bg-blue-50 border-blue-500 text-blue-900"
                            : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                        }`}
                        id={`btn-act-${act.id}`}
                      >
                        <div className={`p-2 rounded-lg ${isSelected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"}`}>
                          {act.icon}
                        </div>
                        <span className="text-sm font-bold">{act.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Plan Display Box */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={recommendedPlan}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl relative shadow-lg flex flex-col justify-between"
                >
                  {/* Recommended badge */}
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md shadow-orange-500/10">
                    <Sparkles className="w-3 h-3 fill-current" />
                    <span>Plan Recomendado</span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-black text-slate-900 mt-2">
                      {plansDetails[recommendedPlan].name}
                    </h3>
                    
                    <div className="flex items-baseline gap-2 my-4">
                      <span className="text-5xl font-black text-blue-600 tracking-tight">
                        {plansDetails[recommendedPlan].price}
                      </span>
                      <span className="text-slate-500 text-sm font-bold">/mes (final)</span>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed border-b border-slate-200 pb-4 mb-4">
                      {plansDetails[recommendedPlan].desc}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-3 mb-6">
                      {plansDetails[recommendedPlan].features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
                          <div className="p-0.5 bg-emerald-100 rounded-full text-emerald-600 shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleHirePlan(plansDetails[recommendedPlan].name)}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2.5 shadow-lg shadow-orange-200"
                    id={`btn-calc-hire-${recommendedPlan}`}
                  >
                    <span>Contratar Recomendado</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
