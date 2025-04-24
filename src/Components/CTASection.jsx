"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const CTASection = () => {
  // Cores do projeto
  const primaryBlue = "#223e63"
  const secondaryBlue = "#69abc3"

  // Estado para os ícones flutuantes
  const [icons, setIcons] = useState([])

  // Gerar ícones flutuantes aleatórios
  useEffect(() => {
    const iconTypes = [
      // Megafone
      <svg
        key="megaphone"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 11 18-5v12L3 14v-3z"></path>
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
      </svg>,
      // Gráfico
      <svg
        key="graph"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18"></path>
        <path d="m19 9-5 5-4-4-3 3"></path>
      </svg>,
      // Lupa
      <svg
        key="search"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>,
      // Smartphone
      <svg
        key="smartphone"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
        <path d="M12 18h.01"></path>
      </svg>,
      // Computador
      <svg
        key="computer"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
        <line x1="8" x2="16" y1="21" y2="21"></line>
        <line x1="12" x2="12" y1="17" y2="21"></line>
      </svg>,
      // Câmera
      <svg
        key="camera"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
        <circle cx="12" cy="13" r="3"></circle>
      </svg>,
      // Paleta
      <svg
        key="palette"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="13.5" cy="6.5" r=".5"></circle>
        <circle cx="17.5" cy="10.5" r=".5"></circle>
        <circle cx="8.5" cy="7.5" r=".5"></circle>
        <circle cx="6.5" cy="12.5" r=".5"></circle>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
      </svg>,
      // Engrenagem
      <svg
        key="gear"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
        <path d="M12 2v2"></path>
        <path d="M12 22v-2"></path>
        <path d="m17 20.66-1-1.73"></path>
        <path d="M11 10.27 7 3.34"></path>
        <path d="m20.66 17-1.73-1"></path>
        <path d="m3.34 7 1.73 1"></path>
        <path d="M14 12h8"></path>
        <path d="M2 12h2"></path>
        <path d="m20.66 7-1.73 1"></path>
        <path d="m3.34 17 1.73-1"></path>
        <path d="m17 3.34-1 1.73"></path>
        <path d="m7 20.66 1-1.73"></path>
      </svg>,
      // Foguete
      <svg
        key="rocket"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
      </svg>,
      // Formas geométricas
      <svg
        key="shapes"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
        <path d="M11 13h10l-4 9H7z"></path>
      </svg>,
    ]

    const newIcons = []
    for (let i = 0; i < 15; i++) {
      const iconType = iconTypes[Math.floor(Math.random() * iconTypes.length)]
      const size = Math.random() * 20 + 20 // Tamanho entre 20 e 40
      const left = Math.random() * 100 // Posição horizontal (0-100%)
      const top = Math.random() * 100 // Posição vertical (0-100%)
      const opacity = Math.random() * 0.15 + 0.05 // Opacidade entre 0.05 e 0.2
      const rotation = Math.random() * 360 // Rotação aleatória
      const animationDuration = Math.random() * 20 + 30 // Duração da animação entre 30 e 50 segundos
      const delay = Math.random() * 10 // Atraso na animação
      const color = Math.random() > 0.5 ? primaryBlue : secondaryBlue // Cor aleatória entre as duas cores do projeto

      newIcons.push({
        icon: iconType,
        style: {
          position: "absolute",
          left: `${left}%`,
          top: `${top}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity,
          color,
          transform: `rotate(${rotation}deg)`,
          animation: `float ${animationDuration}s infinite ease-in-out ${delay}s`,
        },
      })
    }

    setIcons(newIcons)
  }, [])

  return (
    <section id="contato" className="relative py-24 overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, #223e6308 1px, transparent 1px), linear-gradient(to bottom, #223e6308 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Floating marketing icons */}
        {icons.map((item, index) => (
          <div key={index} style={item.style}>
            {item.icon}
          </div>
        ))}

        {/* Decorative elements */}
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, ${secondaryBlue} 0%, transparent 70%)`,
            filter: "blur(50px)",
          }}
        ></div>

        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, ${primaryBlue} 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        ></div>

        {/* Formas geométricas em azul */}
        <div
          className="absolute top-20 left-[10%]"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            background: primaryBlue,
            opacity: 0.1,
            transform: "rotate(15deg)",
          }}
        ></div>

        <div
          className="absolute bottom-40 right-[15%]"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: `2px solid ${secondaryBlue}`,
            opacity: 0.15,
          }}
        ></div>

        <div
          className="absolute top-[40%] right-[20%]"
          style={{
            width: "50px",
            height: "50px",
            background: secondaryBlue,
            opacity: 0.1,
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        ></div>

        <div
          className="absolute bottom-[30%] left-[25%]"
          style={{
            width: "70px",
            height: "30px",
            background: primaryBlue,
            opacity: 0.08,
            borderRadius: "40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          className="rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            boxShadow: "0 20px 80px rgba(34, 62, 99, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.7)",
          }}
        >
          <div className="p-8 md:p-16 relative">
            {/* Decorative circles */}
            <div
              className="absolute -top-20 -left-20 w-40 h-40 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${primaryBlue}40, ${secondaryBlue}40)`,
                filter: "blur(40px)",
                opacity: 0.6,
              }}
            ></div>
            <div
              className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${secondaryBlue}40, ${primaryBlue}40)`,
                filter: "blur(40px)",
                opacity: 0.6,
              }}
            ></div>

            {/* Logo watermark */}
            <div className="absolute bottom-8 right-8 opacity-5 w-40 h-40">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PX%20Logo%201-G8TSejoVtoGsv91n9ndtZmojlxze6C.png"
                alt="Publi X Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="text-center max-w-3xl mx-auto relative z-10">
              <div className="inline-block mb-6">
                <div
                  className="px-6 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: `linear-gradient(135deg, ${primaryBlue}, ${secondaryBlue})`,
                    color: "white",
                  }}
                >
                  VAMOS CONVERSAR?
                </div>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: primaryBlue }}>
                Pronto para transformar sua presença digital?
              </h2>

              <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "#4a6f8e" }}>
                Vamos criar uma estratégia personalizada que combine criatividade, estratégia e resultados para o seu
                negócio. Entre em contato agora mesmo!
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  href="https://instagram.com/publixagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full shadow-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: `linear-gradient(135deg, ${primaryBlue}, ${secondaryBlue})`,
                    color: "white",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="relative z-10">Siga no Instagram</span>
                </motion.a>

                <motion.a
                  href="https://wa.me/+557181594454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full shadow-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    backgroundColor: "white",
                    color: primaryBlue,
                    border: `1px solid ${primaryBlue}20`,
                    boxShadow: "0 10px 30px rgba(34, 62, 99, 0.1)",
                  }}
                >
                  <span className="relative z-10">Solicite um orçamento</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>
              </div>

              {/* Contact info pills */}
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <div
                  className="flex items-center px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={primaryBlue}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span style={{ color: primaryBlue }}>publixagencybusiness@gmail.com</span>
                </div>

                <div
                  className="flex items-center px-4 py-2 rounded-full cursor-pointer"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                  }}
                  onClick={() => window.open("https://wa.me/+557181594454", "_blank")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={primaryBlue}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span style={{ color: primaryBlue }}>7198159-4454</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS para animações */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-15px, 15px) rotate(5deg);
          }
          50% {
            transform: translate(15px, 30px) rotate(-5deg);
          }
          75% {
            transform: translate(25px, 15px) rotate(5deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
      `}</style>
    </section>
  )
}

export default CTASection
