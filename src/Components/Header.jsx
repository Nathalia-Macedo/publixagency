"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const [activeItem, setActiveItem] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = ["Sobre", "Serviços", "Feedbacks", "Contato"]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Função para rolagem suave
  const handleSmoothScroll = (e, id) => {
    e.preventDefault()

    // Fechar o menu mobile se estiver aberto
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }

    const element = document.getElementById(id)
    if (element) {
      // Rolagem suave para o elemento
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Detectar seção ativa durante a rolagem
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset para considerar o header

      // Verificar qual seção está visível
      navItems.forEach((item, index) => {
        const section = document.getElementById(item.toLowerCase())
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveItem(index)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  return (
    <header
      style={{
        backgroundColor: "rgba(34, 62, 99, 0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
      className="fixed w-full z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <motion.div
            className="h-10 md:h-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Publi%20X%20resize-aVm3sYCdrUNkJ0jG9nlLEW0OMP6OGu.png"
              alt="Publi X"
              className="h-full object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <motion.ul
              className="flex space-x-10 mr-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <li key={index} className="relative">
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{
                      color: "#ffffff",
                      fontWeight: 500,
                    }}
                    className="hover:text-[#69abc3] transition-all duration-300 py-2 px-1"
                    onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
                    onMouseEnter={() => setActiveItem(index)}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    {item}
                    <AnimatePresence>
                      {activeItem === index && (
                        <motion.div
                          style={{ backgroundColor: "#69abc3" }}
                          className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                          layoutId="underline"
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          exit={{ scaleX: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </AnimatePresence>
                  </a>
                </li>
              ))}
            </motion.ul>

            {/* Social Icons - Desktop */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="https://instagram.com/publixagency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#69abc3] transition-colors duration-300"
                aria-label="Instagram"
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
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://wa.me/+557181594454"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#69abc3] transition-colors duration-300"
                aria-label="WhatsApp"
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
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
              <a
                href="mailto:publixagencybusiness@gmail.com"
                className="text-white hover:text-[#69abc3] transition-colors duration-300"
                aria-label="Email"
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
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              style={{ color: "#ffffff" }}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
              className="p-2 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </motion.div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: "rgba(34, 62, 99, 0.95)",
              backdropFilter: "blur(8px)",
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            }}
            className="md:hidden overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{ color: "#ffffff" }}
                    className="block py-2 hover:text-[#69abc3] transition-all duration-300 relative group"
                    onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#69abc3] group-hover:w-full transition-all duration-300 rounded-full"></span>
                  </a>
                </motion.li>
              ))}

              {/* Social Icons - Mobile */}
              <motion.div
                className="flex space-x-6 pt-4 border-t border-white/10 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navItems.length * 0.1 + 0.2 }}
              >
                <a
                  href="https://instagram.com/publixagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#69abc3] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="https://wa.me/557198159-4454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#69abc3] transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </a>
                <a
                  href="mailto:publixagencybusiness@gmail.com"
                  className="text-white hover:text-[#69abc3] transition-colors duration-300"
                  aria-label="Email"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
