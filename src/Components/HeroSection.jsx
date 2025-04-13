import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"

const HeroSection = () => {
  const counterRef = useRef(null)
  const [activeCard, setActiveCard] = useState(0)
  const totalCards = 4

  // Cards data
  const cards = [
    {
      title: "Estratégia Digital",
      description: "Transformamos presença em autoridade",
      color: "#69abc3",
    },
    {
      title: "Presença Digital",
      description: "Campanhas que conectam marcas a pessoas",
      color: "#69abc3",
    },
    {
      title: "Marketing Criativo",
      description: "Ideias que fogem do óbvio",
      color: "#69abc3",
    },
    {
      title: "Resultados Reais",
      description: "Campanhas que geram resultados mensuráveis",
      color: "#69abc3",
    },
  ]

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % totalCards)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // GSAP animation for the counter
    const counter = { value: 0 }
    gsap.to(counter, {
      value: 50,
      duration: 2.5,
      ease: "power2.out",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.value)
        }
      },
    })

    return () => {
      // Cleanup animations
      gsap.killTweensOf(counter)
    }
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-16">
      {/* Background elements - removidas as bolinhas */}
      <div className="absolute inset-0 z-0">
        {/* Diagonal split background */}
        <div
          className="absolute top-0 right-0 w-full h-full transform -skew-y-6 origin-top-right"
          style={{
            background: "linear-gradient(135deg, rgba(34, 62, 99, 0.03), rgba(105, 171, 195, 0.08))",
            top: "-15%",
            height: "120%",
          }}
        ></div>

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/subtle-pattern.png')",
            backgroundSize: "200px",
          }}
        ></div>

        {/* Blue accent in corner */}
        <div
          className="absolute top-0 right-0 w-1/2 h-1/2 rounded-bl-[100px]"
          style={{
            background: "linear-gradient(135deg, rgba(34, 62, 99, 0.08), rgba(105, 171, 195, 0.05))",
          }}
        ></div>

        {/* Marketing and content creation icons in a discrete corner */}
        <div className="absolute bottom-8 left-8 flex flex-col space-y-4 opacity-20 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#223e63"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
            <path d="M2 2l7.586 7.586"></path>
            <circle cx="11" cy="11" r="2"></circle>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#223e63"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#223e63"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="23 7 16 12 23 17 23 7"></polygon>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#223e63"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
          </svg>
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-extrabold"
                style={{ color: "#223e63" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Mais de{" "}
                <span
                  ref={counterRef}
                  style={{
                    color: "#69abc3",
                  }}
                >
                  0
                </span>{" "}
                clientes ativos em todo o país.
              </motion.h1>

              <motion.div
                className="rounded-xl p-6 mb-8"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                  boxShadow: "0 10px 30px rgba(34, 62, 99, 0.08)",
                  borderLeft: "4px solid #69abc3",
                }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-gray-700 text-lg mb-4">
                  Aqui, o "X" é o ponto onde criatividade e estratégia se encontram para gerar resultados reais. Somos
                  uma agência nova no nome, mas com anos de estrada, visão estratégica e ideias que fogem do óbvio.
                </p>
                <p className="text-gray-700 text-lg">
                  Nosso diferencial? Unimos tecnologia, pensamento criativo e estratégia para transformar presença
                  digital em autoridade de mercado.
                </p>
              </motion.div>

              <motion.button
                className="px-8 py-4 rounded-full shadow-xl text-white font-semibold transition-all duration-300 flex items-center space-x-2 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                style={{
                  backgroundColor: "#69abc3",
                }}
              ><a href="https://wa.me/+557181594454">
                {/* Efeito de hover */}
                <span
                  className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform scale-0 group-hover:scale-100 rounded-full"
                  style={{
                    background: "#223e63",
                  }}
                ></span>
                <span className="relative z-10">Transforme sua marca</span>
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
                </a>
              </motion.button>
            </motion.div>
          </div>

          {/* Right content - Nicole's photo and carousel */}
          <div className="relative flex flex-col h-full">
            {/* Nicole's photo - usando link direto do Vercel */}
            <motion.div
              className="relative flex-grow mb-6 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {/* Logo in top right - usando link direto do Vercel */}
              <div className="absolute top-4 right-4 z-10">
                <div
                  className="p-2 rounded-md"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 15px rgba(34, 62, 99, 0.05)",
                  }}
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PX%20Logo%201-CkVllCjjqE6fFMnfOjXGxCh3ZqVqbH.png"
                    alt="Publi X Logo"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              {/* Foto de Nicole usando link direto do Vercel */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2506_1_-removebg-preview-Q5TIvZiP5iMVxn7tBKpgKQ1vNjPaM1.png"
                alt="Nicole - CEO da Publi X"
                className="w-auto h-auto max-h-[500px] object-contain"
                style={{ minHeight: "450px" }}
              />
            </motion.div>

            {/* Carousel of cards - fixed size */}
            <div className="relative">
              {/* Cards */}
              <div className="relative h-[120px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCard}
                    className="w-full rounded-xl p-4 cursor-pointer group"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.8)",
                      boxShadow: "0 10px 30px rgba(34, 62, 99, 0.08)",
                    }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div
                        style={{ backgroundColor: cards[activeCard].color }}
                        className="w-3 h-3 rounded-full transition-all duration-300 group-hover:w-4 group-hover:h-4"
                      ></div>
                      <span
                        style={{ color: "#223e63" }}
                        className="font-semibold transition-all duration-300 group-hover:text-[#69abc3]"
                      >
                        {cards[activeCard].title}
                      </span>
                    </div>
                    <p
                      style={{ color: "#223e63" }}
                      className="text-sm font-medium opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
                    >
                      {cards[activeCard].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeCard === index ? "w-6 bg-[#69abc3]" : "bg-[#223e63]/20"
                    }`}
                    onClick={() => setActiveCard(index)}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS para animações */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-30px) translateX(15px);
          }
          50% {
            transform: translateY(-10px) translateX(30px);
          }
          75% {
            transform: translateY(-20px) translateX(15px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        @keyframes pulse {
          0% {
            transform: scale(0.95);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  )
}

export default HeroSection
