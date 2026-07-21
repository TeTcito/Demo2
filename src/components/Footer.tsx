import { Wifi, Phone, Mail, MapPin, Facebook, Instagram, MessageSquare, ArrowUp, Send } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 pt-16 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
              <div className="bg-blue-600 text-white p-2 rounded-xl">
                <Wifi className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900">
                Fibra<span className="text-blue-600">Net</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm font-medium">
              Proveedor líder de internet por fibra óptica de alta fidelidad (FTTH) en Quevedo. Comprometidos con la ultra velocidad simétrica, estabilidad sin caídas y soporte técnico local 24/7.
            </p>
            {/* Status Live */}
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-1.5 rounded-full text-xs">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-slate-700 font-bold font-mono uppercase tracking-wider">Soporte Quevedo: Online</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-slate-900 font-black text-sm uppercase tracking-wider">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm font-bold">
              <li>
                <button onClick={scrollToTop} className="text-slate-600 hover:text-blue-600 transition-colors py-1 cursor-pointer" id="footer-link-inicio">
                  Inicio (Portada)
                </button>
              </li>
              <li>
                <a href="#beneficios" className="block text-slate-600 hover:text-blue-600 transition-colors py-1" id="footer-link-beneficios">
                  Beneficios de la Fibra
                </a>
              </li>
              <li>
                <a href="#calculadora" className="block text-slate-600 hover:text-blue-600 transition-colors py-1" id="footer-link-calculadora">
                  Calculadora de Velocidad
                </a>
              </li>
              <li>
                <a href="#planes" className="block text-slate-600 hover:text-blue-600 transition-colors py-1" id="footer-link-planes">
                  Planes de Internet
                </a>
              </li>
              <li>
                <a href="#cobertura" className="block text-slate-600 hover:text-blue-600 transition-colors py-1" id="footer-link-cobertura">
                  Consultar Cobertura
                </a>
              </li>
              <li>
                <a href="#equipos" className="block text-slate-600 hover:text-blue-600 transition-colors py-1" id="footer-link-equipos">
                  Catálogo de Equipos
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Headquarters */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-slate-900 font-black text-sm uppercase tracking-wider">Atención y Ventas</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Oficina Central:</strong> Av. Walter Andrade y Calle Décima (Frente al Paseo Shopping), Quevedo, Los Ríos, Ecuador.
                </span>
              </li>
              <li className="flex items-center gap-3 font-bold">
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <a href="tel:+593987654321" className="text-slate-700 hover:text-blue-600 transition-colors" id="footer-phone-call">
                  098 765 4321 / (05) 276-5432
                </a>
              </li>
              <li className="flex items-center gap-3 font-bold">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <a href="mailto:soporte@fibranet.ec" className="text-slate-700 hover:text-blue-600 transition-colors" id="footer-email-link">
                  soporte@fibranet.ec
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-slate-700 cursor-pointer"
                aria-label="Siguenos en Facebook"
                id="footer-social-fb"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-slate-700 cursor-pointer"
                aria-label="Siguenos en Instagram"
                id="footer-social-ig"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/593987654321?text=Hola%20FibraNet!%20Me%20interesa%20saber%20más%20sobre%20sus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all text-slate-700 cursor-pointer"
                aria-label="Escríbenos por WhatsApp"
                id="footer-social-wa"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono tracking-wide text-slate-500">
          <p>© {currentYear} FibraNet S.A. Todos los derechos reservados. Quevedo, Ecuador.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="bg-white border border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 p-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer font-bold"
              id="btn-scroll-top-footer"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Floating Convert Widget (WhatsApp Lower Right Corner) */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <a
          href="https://wa.me/593987654321?text=Hola%20FibraNet!%20Me%20gustaría%20solicitar%20la%20instalación%20de%20Internet%20Fibra%20Óptica%20en%20Quevedo."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] flex items-center justify-center relative hover:scale-105 transition-all duration-300 cursor-pointer"
          title="Chatea con un asesor"
          id="btn-floating-whatsapp"
        >
          <svg className="w-8 h-8 fill-white relative z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
        </a>
      </div>

    </footer>
  );
}
