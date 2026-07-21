import { useState } from "react";
import { ArrowRight, Router, Server, Wifi, Shield, Cpu, Cable, HardDrive, Camera } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const CATEGORIES = ["Todos", "Routers & Mesh", "Fibra & ONT", "Empresarial", "Cableado", "Accesorios"];

const EQUIPMENTS = [
  {
    id: "router-wifi6",
    name: "Router WiFi 6 Pro",
    category: "Routers & Mesh",
    desc: "Máxima velocidad inalámbrica con WiFi 6. Cobertura ampliada para casas de hasta 2 pisos y múltiples dispositivos conectados sin lag.",
    image: "/equipments/router.png",
    specs: "Doble Banda 2.4/5GHz • Hasta 1200 Mbps • 4 Antenas de alta ganancia",
    price: "45",
    pricePeriod: "",
    icon: <Router className="h-6 w-6 text-white/80" />
  },
  {
    id: "mesh-system",
    name: "Sistema Mesh Inteligente",
    category: "Routers & Mesh",
    desc: "El sistema Mesh crea una única red WiFi unificada que cubre cada rincón de tu casa sin interrupciones.",
    image: "/equipments/mesh.png",
    specs: "Roaming sin cortes • Cobertura 300m² • Control Parental App",
    price: "80",
    pricePeriod: "",
    icon: <Wifi className="h-6 w-6 text-white/80" />
  },
  {
    id: "ont-gpon",
    name: "Terminal Óptico ONT",
    category: "Fibra & ONT",
    desc: "Traduce la señal de luz de la fibra óptica en internet de alta velocidad estable y sin pérdidas.",
    image: "/equipments/ont.png",
    specs: "Puerto Gigabit • Baja latencia • Uso rudo 24/7",
    price: "0",
    pricePeriod: "en Planes",
    icon: <HardDrive className="h-6 w-6 text-white/80" />
  },
  {
    id: "switch-gigabit",
    name: "Switch Gigabit 8P",
    category: "Empresarial",
    desc: "Múltiples conexiones por cable de máxima velocidad sin pérdida de datos.",
    image: "/equipments/switch.png",
    specs: "8 Puertos 10/100/1000 • Carcasa Metálica • Plug & Play",
    price: "35",
    pricePeriod: "",
    icon: <Server className="h-6 w-6 text-white/80" />
  },
  {
    id: "cable-utp",
    name: "Bobina Cable UTP Cat6",
    category: "Cableado",
    desc: "Cable de red de alto rendimiento para instalaciones profesionales.",
    image: "/equipments/cable.png",
    specs: "305 Metros • Cobre 100% • 1000Mbps Soporte",
    price: "120",
    pricePeriod: "/ bobina",
    icon: <Cable className="h-6 w-6 text-white/80" />
  },
  {
    id: "patch-cord",
    name: "Patch Cord Cat6 2m",
    category: "Accesorios",
    desc: "Conecta tus dispositivos directamente al router o switch con la mejor calidad.",
    image: "/equipments/patch.png",
    specs: "2 Metros • Contactos bañados en oro • Flexible",
    price: "3",
    pricePeriod: "/ unidad",
    icon: <Cable className="h-6 w-6 text-white/80" />
  },
  {
    id: "faceplate",
    name: "Faceplate + Jack RJ45",
    category: "Accesorios",
    desc: "Dale un acabado estético y profesional a los puntos de red de tu oficina u hogar.",
    image: "/equipments/faceplate.png",
    specs: "Blanco • Cat 6 • Placa de pared sencilla",
    price: "5",
    pricePeriod: "/ set",
    icon: <Shield className="h-6 w-6 text-white/80" />
  },
  {
    id: "olt",
    name: "OLT GPON 4 Puertos",
    category: "Empresarial",
    desc: "Concentrador óptico para ISPs y grandes corporativos que buscan distribuir fibra.",
    image: "/equipments/olt.png",
    specs: "Soporta 512 ONTs • 4 Puertos PON • 2 Uplink 10G",
    price: "850",
    pricePeriod: "",
    icon: <Cpu className="h-6 w-6 text-white/80" />
  },
  {
    id: "camera-ip",
    name: "Cámara IP de Seguridad",
    category: "Accesorios",
    desc: "Vigila tu hogar o negocio en tiempo real con resolución Full HD y visión nocturna.",
    image: "/equipments/camera.png",
    specs: "Full HD 1080p • Visión Nocturna 30m • Detección Movimiento",
    price: "45",
    pricePeriod: "",
    icon: <Camera className="h-6 w-6 text-white/80" />
  }
];

const EquipmentCard = ({
  index,
  imageUrl,
  imageAlt,
  logo,
  title,
  category,
  overview,
  specs,
  price,
  pricePeriod,
  onBookNow,
}: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex aspect-square w-full max-w-md flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 mx-auto"
    >
      {/* Background Image with Zoom Effect on Hover */}
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      {/* Content Container */}
      <div className="relative flex h-full flex-col justify-between p-6 text-white">
        {/* Top Section: Logo */}
        <div className="flex h-20 items-start">
           {logo && (
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/50 bg-black/20 backdrop-blur-sm">
                 {logo}
              </div>
           )}
        </div>
        
        {/* Middle Section: Details (slides up on hover) */}
        <div className="space-y-3 transition-transform duration-500 ease-in-out group-hover:-translate-y-20">
          <div>
            <h3 className="text-2xl font-bold text-white leading-tight">{title}</h3>
            <p className="text-xs text-white/80 font-medium uppercase tracking-wider mt-1">{category}</p>
          </div>
          <div>
            <h4 className="font-semibold text-white/90 uppercase tracking-wider text-[10px] mb-1">ESPECIFICACIONES</h4>
            <p className="text-xs text-white/70 leading-relaxed font-medium">
              {overview}
            </p>
            <p className="text-[10px] text-emerald-400 font-bold mt-2 pt-2 border-t border-white/20">
              {specs}
            </p>
          </div>
        </div>

        {/* Bottom Section: Price and Button (revealed on hover) */}
        <div className="absolute -bottom-24 left-0 w-full p-6 opacity-0 transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:opacity-100">
          <div className="flex items-end justify-between">
            <div className="flex items-baseline">
              {price !== "0" && <span className="text-lg font-bold text-white/80 mr-1">$</span>}
              <span className="text-3xl font-bold text-white">{price === "0" ? "Gratis" : price}</span>
              {pricePeriod && <span className="text-white/80 text-xs ml-1 font-medium"> {pricePeriod}</span>}
            </div>
            <button 
              onClick={onBookNow} 
              className="bg-white text-slate-900 hover:bg-white/90 px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 font-bold transition-all shadow-lg text-sm"
            >
              Consultar <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function EquipmentCatalog() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredEquipments = EQUIPMENTS.filter(
    (eq) => activeCategory === "Todos" || eq.category === activeCategory
  );

  return (
    <section id="equipos" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl glow-bg pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold bg-blue-100 px-3 py-1 rounded-full shadow-sm">Hardware Profesional</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-6 leading-tight">
            Catálogo de Equipos
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg font-medium">
            Potencia tu conexión con hardware de última generación. Explora nuestros equipos disponibles para hogares, técnicos y empresas.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/30"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center min-h-[400px]">
          <AnimatePresence mode="wait">
            {filteredEquipments.map((eq, index) => (
              <EquipmentCard
                key={`${activeCategory}-${eq.id}`}
                index={index}
                imageUrl={eq.image}
                imageAlt={eq.name}
                logo={eq.icon}
                title={eq.name}
                category={eq.category}
                overview={eq.desc}
                specs={eq.specs}
                price={eq.price}
                pricePeriod={eq.pricePeriod}
                onBookNow={() => window.open(`https://wa.me/593987654321?text=Hola%20FibraNet!%20Me%20interesa%20consultar%20sobre%20el%20equipo:%20${eq.name}.`, "_blank")}
              />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
