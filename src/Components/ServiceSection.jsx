"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import videomaker from "../assets/videomaker.png"
import copywriter from "../assets/copywriter.png"
import socialmedia from '../assets/social.png'

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [hoveredService, setHoveredService] = useState(null)
  const carouselRef = useRef(null)

  // Cores do projeto
  const primaryBlue = "#223e63"
  const secondaryBlue = "#69abc3"

  // Dados dos serviços
  const services = [
    {
      id: "social-media",
      title: "Social Media",
      description: "Gestão de redes sociais com estratégia, identidade e conteúdo que engaja de verdade.",
      icon: (
        <svg
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
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
      color: primaryBlue,
      image:
        socialmedia,
      imageAlt: "Nicole com metade do rosto escondido pelo celular",
    },
    {
      id: "design",
      title: "Design",
      description:
        "Criação de identidade visual e peças gráficas inteligentes, que traduzem a essência da sua marca em cada detalhe.",
      icon: (
        <svg
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
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      ),
      color: secondaryBlue,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k3pCUMxMKT5nHcWiWTziaoqcHRuoXG.png",
      imageAlt: "Nicole sorrindo e falando ao telefone enquanto segura um tablet",
    },
    {
      id: "videomaker",
      title: "Videomaker",
      description: "Produções que contam histórias, geram conexão e elevam a imagem da sua marca.",
      icon: (
        <svg
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
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
      ),
      color: primaryBlue,
      image: videomaker,
      imageAlt: "Nicole sorrindo e segurando um gimbal",
    },
    {
      id: "copywriter",
      title: "Copywriter",
      description: "Textos com propósito, que despertam interesse, criam desejo e geram ação.",
      icon: (
        <svg
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
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      color: secondaryBlue,
      image: copywriter,
      imageAlt: "Nicole segurando o celular com a logo da Publi X",
    },
    {
      id: "programacao",
      title: "Programação",
      description: "Sites e soluções digitais funcionais, responsivos e com a sua identidade.",
      icon: (
        <svg
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
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      color: primaryBlue,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JiprmxqXWImEC8FLazy2dtkDb1B9j6.png",
      imageAlt: "Logo Publi X em branco sobre fundo azul escuro",
    },
    {
      id: "trafego",
      title: "Tráfego Pago",
      description: "Campanhas segmentadas que entregam resultados reais e colocam sua marca no radar certo.",
      icon: (
        <svg
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
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
      ),
      color: secondaryBlue,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JuferE6EC53IS1TojknNmu0xIOnN9H.png",
      imageAlt: "Nicole sorrindo e segurando um tablet, vestindo roupa branca",
    },
    {
      id: "fotografia",
      title: "Fotografia",
      description: "Imagens profissionais que capturam a alma do seu negócio com autenticidade e impacto.",
      icon: (
        <svg
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
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle cx="12" cy="13" r="4"></circle>
        </svg>
      ),
      color: primaryBlue,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mqGGaMZm5m3B4To1XsBpQpru2IIdLK.png",
      imageAlt: "Nicole sorrindo com fundo preto - fotografia profissional",
    },
  ]

  // Auto-rotação do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        nextSlide()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, isDragging])

  // Funções de navegação
  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
  }

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Manipuladores de eventos de toque/arrasto
  const handleDragStart = (e) => {
    setIsDragging(true)
    setStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0)
  }

  const handleDragEnd = (e) => {
    setIsDragging(false)
    const endX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0
    const diffX = endX - startX

    if (Math.abs(diffX) > 100) {
      if (diffX > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }
  }

  return (
    <section
      id="serviços"
      className="relative py-24 overflow-hidden"
      style={{
        background: "#ffffff",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle grid pattern - com opacidade explícita */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, #223e63 1px, transparent 1px), linear-gradient(to bottom, #223e63 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.01,
          }}
        ></div>

        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "5rem",
            left: "2.5rem",
            width: "16rem",
            height: "16rem",
            borderRadius: "9999px",
            backgroundColor: "#69abc3",
            opacity: 0.05,
            filter: "blur(24px)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "5rem",
            right: "2.5rem",
            width: "16rem",
            height: "16rem",
            borderRadius: "9999px",
            backgroundColor: "#223e63",
            opacity: 0.05,
            filter: "blur(24px)",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{
              color: "#4a6f8e",
            }}
          >
            Serviços
          </h2>
          <p className="text-lg text-gray-700">O branding certo transforma. Vamos dar voz à essência da sua marca.</p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative mb-20"
          style={{
            minHeight: "450px",
          }}
        >
          {/* Glassmorphism background panel */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "1.5rem",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.8)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.7)",
            }}
          ></div>

          {/* Carousel */}
          <div
            className="relative py-16 px-4 md:px-10 overflow-hidden"
            ref={carouselRef}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseLeave={(e) => isDragging && handleDragEnd(e)}
            style={{
              minHeight: "450px",
            }}
          >
            {/* Service Title Indicator */}
            <div
              style={{
                position: "absolute",
                top: "1rem",
                left: 0,
                right: 0,
                textAlign: "center",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg font-semibold"
                    style={{ color: services[currentIndex].color }}
                  >
                    {services[currentIndex].title}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Carousel Track */}
            <div
              style={{
                position: "relative",
                height: "400px",
                margin: "0 auto",
                maxWidth: "1280px",
              }}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0, scale: 0.8 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  exit={{ x: direction > 0 ? -1000 : 1000, opacity: 0, scale: 0.8 }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 },
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                  }}
                >
                  <ServiceCard
                    service={services[currentIndex]}
                    isHovered={hoveredService === services[currentIndex].id}
                    onHover={() => setHoveredService(services[currentIndex].id)}
                    onLeave={() => setHoveredService(null)}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 1rem",
                marginTop: "-1.5rem",
                pointerEvents: "none",
              }}
            >
              <motion.button
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "9999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "auto",
                  outline: "none",
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  color: "#223e63",
                }}
                onClick={prevSlide}
                whileHover={{ scale: 1.1, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 1, opacity: 0.7 }}
                aria-label="Serviço anterior"
              >
                <svg
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
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </motion.button>

              <motion.button
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "9999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "auto",
                  outline: "none",
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  color: "#223e63",
                }}
                onClick={nextSlide}
                whileHover={{ scale: 1.1, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 1, opacity: 0.7 }}
                aria-label="Próximo serviço"
              >
                <svg
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
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </motion.button>
            </div>

            {/* Indicators */}
            <div
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: 0,
                right: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.75rem",
                }}
              >
                {services.map((_, index) => (
                  <motion.button
                    key={index}
                    style={{
                      width: currentIndex === index ? "1.5rem" : "0.75rem",
                      height: "0.75rem",
                      borderRadius: "9999px",
                      backgroundColor:
                        currentIndex === index ? (index % 2 === 0 ? primaryBlue : secondaryBlue) : "#CBD5E0",
                      boxShadow:
                        currentIndex === index ? `0 0 10px ${index % 2 === 0 ? primaryBlue : secondaryBlue}80` : "none",
                      outline: "none",
                      transition: "all 0.3s ease",
                    }}
                    onClick={() => goToSlide(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Ir para serviço ${index + 1}`}
                    aria-current={currentIndex === index ? "true" : "false"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div
            style={{
              padding: "2rem",
              borderRadius: "1.5rem",
              margin: "0 auto",
              maxWidth: "56rem",
              position: "relative",
              overflow: "hidden",
              background: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.8)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.7)",
            }}
          >
            {/* Círculos azuis decorativos */}
            <div
              style={{
                position: "absolute",
                bottom: "-2.5rem",
                left: "-2.5rem",
                width: "10rem",
                height: "10rem",
                borderRadius: "9999px",
                backgroundColor: secondaryBlue,
                opacity: 0.3,
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "-2.5rem",
                right: "-2.5rem",
                width: "8rem",
                height: "8rem",
                borderRadius: "9999px",
                backgroundColor: primaryBlue,
                opacity: 0.3,
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                bottom: "5rem",
                right: "5rem",
                width: "4rem",
                height: "4rem",
                borderRadius: "9999px",
                backgroundColor: primaryBlue,
                opacity: 0.2,
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "5rem",
                left: "5rem",
                width: "6rem",
                height: "6rem",
                borderRadius: "9999px",
                backgroundColor: secondaryBlue,
                opacity: 0.2,
              }}
            ></div>

            {/* Conteúdo */}
            <div style={{ position: "relative", zIndex: 10 }}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#223e63]">
                Pronto para transformar sua presença digital?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Vamos criar uma estratégia personalizada que combine os serviços ideais para o seu negócio.
              </p>
              <a target="_blank" href="https://wa.me/+557181594454">
              <motion.button
                className="px-8 py-4 rounded-full shadow-xl text-white font-semibold transition-all duration-300 flex items-center space-x-2 relative overflow-hidden group mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "linear-gradient(135deg, #223e63, #69abc3)",
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
              </motion.button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente de cartão de serviço
const ServiceCard = ({ service, isHovered, onHover, onLeave }) => {
  return (
    <div
      className="w-full h-full flex flex-col md:flex-row items-center justify-center p-4 md:p-8"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        opacity: 1,
        transform: "translateY(0px)",
        transition: "opacity 0.5s, transform 0.5s",
      }}
    >
      {/* Imagem (se existir) */}
      {service.image && (
        <div
          className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-8"
          style={{
            opacity: 1,
            transform: "translateX(0px)",
            transition: "opacity 0.5s, transform 0.5s",
          }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            {/* Logo PX no canto superior direito - removido para programação */}
            {service.id !== "programacao" && (
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4Mfhy7L0NLkUKYPW8FqRBPR98iLrGK.png"
                    alt="Logo Publi X"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            )}

            <img
              src={service.image || "/placeholder.svg"}
              alt={service.imageAlt}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                maxHeight: "400px",
                objectPosition:
                  service.id === "videomaker"
                    ? "center 20%"
                    : service.id === "copywriter"
                      ? "center 20%"
                      : service.id === "trafego"
                        ? "center 20%"
                        : service.id === "design"
                          ? "center 30%"
                          : service.id === "fotografia"
                            ? "center 40%" // Alterado de "center" para "center 40%" para mostrar mais da parte superior
                            : "center",
                transition: "transform 0.5s",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            />
          </div>
        </div>
      )}

      {/* Conteúdo */}
      <div
        className={`w-full ${service.image ? "md:w-1/2" : ""} flex flex-col items-center md:items-start text-center md:text-left`}
        style={{
          opacity: 1,
          transform: service.image ? "translateX(0px)" : "translateY(0px)",
          transition: "opacity 0.5s, transform 0.5s",
        }}
      >
        <div
          style={{
            width: "5rem",
            height: "5rem",
            borderRadius: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.5rem",
            transition: "all 0.3s",
            backgroundColor: `${service.color}15`,
            color: service.color,
            border: `1px solid ${service.color}30`,
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            boxShadow: isHovered ? `0 10px 25px -5px ${service.color}40` : "none",
          }}
        >
          <div>{service.icon}</div>
        </div>

        <h3
          className="text-3xl font-bold mb-4"
          style={{
            color: isHovered ? service.color : "#223e63",
            transition: "color 0.3s",
          }}
        >
          {service.title}
        </h3>

        <div
          style={{
            padding: "1.5rem",
            borderRadius: "0.75rem",
            marginBottom: "1.5rem",
            maxWidth: "32rem",
            backgroundColor: isHovered ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(10px)",
            border: `1px solid ${isHovered ? service.color + "30" : "rgba(255, 255, 255, 0.5)"}`,
            boxShadow: isHovered
              ? `0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px ${service.color}20, 0 0 20px ${service.color}20`
              : "0 10px 30px rgba(0, 0, 0, 0.05)",
            transition: "all 0.3s",
          }}
        >
          <p className="text-lg text-gray-700">{service.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
