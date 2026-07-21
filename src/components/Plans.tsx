import { useState } from "react";
import { Check, ShieldCheck, HelpCircle, ArrowRight, Zap, Flame } from "lucide-react";
import { motion } from "motion/react";

interface Plan {
  id: string;
  name: string;
  speed: string;
  priceMonthly: number;
  popular: boolean;
  desc: string;
  features: string[];
  color: string;
}

export default function Plans() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const PLANS: Plan[] = [
    {
      id: "basico",
      name: "Plan Esencial",
      speed: "500 Megas",
      priceMonthly: 20,
      popular: false,
      desc: "Perfecto para hogares independientes, teletrabajo y redes sociales sin límites.",
      features: [
        "Velocidad Simétrica (500 Mbps)",
        "Tecnología FTTH Fibra Directa",
        "Ideal para 1 a 3 dispositivos",
        "Router Gigabit de Doble Banda",
        "Soporte local vía WhatsApp"
      ],
      color: "border-slate-200 bg-white"
    },
    {
      id: "familiar",
      name: "Plan Familiar Plus",
      speed: "700 Megas",
      priceMonthly: 30,
      popular: true,
      desc: "Nuestra opción favorita. Diseñado para streaming simultáneo en 4K y múltiples pantallas.",
      features: [
        "Velocidad Simétrica (700 Mbps)",
        "Tecnología FTTH Fibra Directa",
        "Ideal para 4 a 7 dispositivos",
        "Router Dual Band Premium",
        "Instalación Express Gratis",
        "Soporte Técnico Prioritario"
      ],
      color: "border-orange-500 bg-white relative shadow-orange-500/5 shadow-2xl"
    },
    {
      id: "gamer",
      name: "Plan Pro / Gamer",
      speed: "900+ Megas",
      priceMonthly: 50,
      popular: false,
      desc: "Máxima velocidad con optimización de puertos y enrutamiento para latencia ultra baja.",
      features: [
        "Velocidad Simétrica (900+ Mbps)",
        "Tecnología FTTH Fibra Directa",
        "Dispositivos ilimitados (8+)",
        "Router Mesh Alta Densidad",
        "Enrutamiento VIP para Gaming",
        "Soporte Técnico Dedicado 24/7"
      ],
      color: "border-slate-200 bg-white"
    }
  ];

  const getPrice = (monthlyPrice: number) => {
    if (billingPeriod === "annual") {
      // 10% discount on annual plan
      return Math.round(monthlyPrice * 0.9);
    }
    return monthlyPrice;
  };

  const handleHirePlan = (plan: Plan) => {
    const periodText = billingPeriod === "annual" ? "Facturación Anual (con 10% de descuento)" : "Facturación Mensual";
    const finalPrice = getPrice(plan.priceMonthly);
    const text = `Hola FibraNet! Me interesa contratar el "${plan.name} de ${plan.speed}" con ${periodText} a un precio de $${finalPrice}/mes. ¿Me ayudan con la disponibilidad en mi zona?`;
    window.open(`https://wa.me/593987654321?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="planes" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Light highlights */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-orange-500/[0.02] rounded-full blur-3xl glow-bg"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">Nuestras Tarifas</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-3">
            Planes de Fibra al mejor precio
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Navega sin cuotas ocultas ni tarifas sorpresas. Todos nuestros planes incluyen IVA y soporte técnico especializado en Quevedo.
          </p>

          {/* Billing Switcher Button */}
          <div className="inline-flex items-center gap-1 bg-white p-1.5 rounded-2xl border border-slate-200 mt-8 shadow-sm">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                billingPeriod === "monthly"
                  ? "bg-orange-500 text-white shadow"
                  : "text-slate-500 hover:text-slate-900"
              }`}
              id="btn-billing-monthly"
            >
              Pago Mensual
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                billingPeriod === "annual"
                  ? "bg-orange-500 text-white shadow"
                  : "text-slate-500 hover:text-slate-900"
              }`}
              id="btn-billing-annual"
            >
              <span>Pago Anual</span>
              <span className="bg-emerald-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                -10%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS.map((plan) => {
            const displayPrice = getPrice(plan.priceMonthly);
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className={`border rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group relative ${
                  plan.popular 
                    ? "ring-2 ring-orange-500 ring-offset-2" 
                    : "hover:border-blue-500/30 shadow-sm"
                } ${plan.color}`}
              >
                <div>
                  {/* Top Header info */}
                  {plan.popular && (
                    <div className="absolute top-0 right-10 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-orange-500/20 z-10">
                      <Flame className="w-3.5 h-3.5 fill-current animate-bounce" />
                      <span>El Más Vendido</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-500 font-bold text-sm uppercase tracking-wider">
                      {plan.name}
                    </span>
                    <span className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-lg text-xs font-bold font-mono">
                      Fibra Directa (FTTH)
                    </span>
                  </div>

                  {/* Megas Display */}
                  <div className="mb-6">
                    <h3 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                      {plan.speed}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {plan.desc}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="flex items-baseline gap-2 mb-8 border-b border-slate-200 pb-6">
                    <span className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
                      ${displayPrice}
                    </span>
                    <div className="text-left">
                      <span className="text-slate-500 text-sm font-bold block">/ mes</span>
                      <span className="text-[10px] text-slate-400 font-bold font-mono uppercase block">Impuestos incluidos</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                        <div className="p-0.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 mt-0.5 shrink-0">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hire CTA */}
                <button
                  onClick={() => handleHirePlan(plan)}
                  className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5"
                      : "bg-slate-100 border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600"
                  }`}
                  id={`btn-plan-hire-${plan.id}`}
                >
                  <span>Contratar Ahora</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Extra guarantees */}
        <div className="mt-16 text-center max-w-xl mx-auto bg-slate-950/40 p-6 rounded-2xl border border-slate-800/60">
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed flex items-center justify-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
            <span>¿Tienes dudas? Consulta con nuestros técnicos de factibilidad. Todos nuestros planes tienen instalación en 24 horas laborables en Quevedo.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
