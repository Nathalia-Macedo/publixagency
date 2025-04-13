"use client"

import { motion } from "framer-motion"

const Footer = () => {
  // Informações de contato
  const contactInfo = {
    instagram: "publixagency",
    email: "publixagencybusiness@gmail.com",
    phone: "7198159-4454",
  }

  // Cores do projeto
  const primaryBlue = "#223e63"
  const secondaryBlue = "#69abc3"

  return (
    <footer className="relative py-16 overflow-hidden" style={{ backgroundColor: primaryBlue }}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Decorative elements */}
        <div
          className="absolute top-0 left-0 w-full h-px opacity-20"
          style={{
            background: "linear-gradient(to right, transparent, #ffffff, transparent)",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and description */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2822%29-JlCXehUMSeIta9mex0rzadlnEXzekS.png"
                alt="Publi X Logo"
                className="h-12 mr-3"
              />
              <h3 className="text-2xl font-bold text-white">Publi X</h3>
            </div>
            <p className="text-white/70 mb-6">
              Criatividade encontra propósito e estratégia vira resultado. Somos uma agência de marketing digital com
              alma publicitária — e isso faz toda a diferença.
            </p>
            <div className="flex space-x-4">
              <a
                href={`https://instagram.com/${contactInfo.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
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
                href={`mailto:${contactInfo.email}`}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#sobre"
                  className="text-white/70 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-white/70 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#feedbacks"
                  className="text-white/70 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${contactInfo.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mr-3 shrink-0"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <h5 className="text-white font-medium">Instagram</h5>
                  <a
                    href={`https://instagram.com/${contactInfo.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    @{contactInfo.instagram}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mr-3 shrink-0"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h5 className="text-white font-medium">Email</h5>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-white/70 hover:text-white transition-colors duration-300 break-all"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mr-3 shrink-0"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="text-white font-medium">Telefone</h5>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div
          className="mt-16 pt-8 text-center text-white/50 text-sm"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <p>&copy; {new Date().getFullYear()} Publi X Agency. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
