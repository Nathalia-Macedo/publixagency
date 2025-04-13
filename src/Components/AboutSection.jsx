"use client"

import { motion } from "framer-motion"

const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #223e63, #69abc3)",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 opacity-5"
          style={{
            backgroundImage: "url('/subtle-pattern.png')",
            backgroundSize: "200px",
          }}
        ></div>
        <div
          className="absolute top-0 right-0 w-1/3 h-1/3 opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block mb-4 text-white">
            Sobre a agência
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 rounded-full bg-white/50"></span>
          </h2>
        </motion.div>

        {/* Main content - Text (Centered) */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div
            className="p-8 rounded-2xl space-y-6 text-white text-center"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p className="text-lg leading-relaxed">
              Na Publi X, criatividade encontra propósito e estratégia vira resultado. Somos uma agência de marketing
              digital com alma publicitária — e isso faz toda a diferença. Unimos visão estratégica, sensibilidade
              criativa e leveza na comunicação para criar conexões reais entre marcas e pessoas.
            </p>

            <p className="text-lg leading-relaxed">
              Do planejamento ao conteúdo, do visual ao tráfego, cada etapa é conduzida com intencionalidade. Nada é por
              acaso: construímos presença digital com identidade, performance com personalidade e campanhas que fogem do
              lugar-comum.
            </p>

            <motion.div
              className="p-6 rounded-xl mt-8"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                borderLeft: "3px solid rgba(255, 255, 255, 0.5)",
                borderRight: "3px solid rgba(255, 255, 255, 0.5)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-lg font-medium text-white">
                Se a sua marca busca ser vista, lembrada e sentida — você está no lugar certo. Chega de fórmulas
                prontas. Vamos criar algo com a sua cara?
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Cards in horizontal row */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div
            className="p-4 rounded-xl"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex flex-wrap md:flex-nowrap -mx-2">
              {/* Feature 1 */}
              <motion.div
                className="w-1/2 md:w-1/4 p-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="p-3 rounded-lg hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div
                    className="w-10 h-10 rounded-full mb-3 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                      <path d="M2 2l7.586 7.586"></path>
                      <circle cx="11" cy="11" r="2"></circle>
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold mb-1 text-white">Estratégia</h3>
                  <p className="text-xs text-white/80">Planejamento com propósito</p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                className="w-1/2 md:w-1/4 p-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="p-3 rounded-lg hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div
                    className="w-10 h-10 rounded-full mb-3 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold mb-1 text-white">Criatividade</h3>
                  <p className="text-xs text-white/80">Ideias que fogem do óbvio</p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                className="w-1/2 md:w-1/4 p-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="p-3 rounded-lg hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div
                    className="w-10 h-10 rounded-full mb-3 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold mb-1 text-white">Identidade</h3>
                  <p className="text-xs text-white/80">Presença com personalidade</p>
                </div>
              </motion.div>

              {/* Feature 4 */}
              <motion.div
                className="w-1/2 md:w-1/4 p-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="p-3 rounded-lg hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div
                    className="w-10 h-10 rounded-full mb-3 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold mb-1 text-white">Resultados</h3>
                  <p className="text-xs text-white/80">Performance que se destaca</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.a
            href="https://wa.me/+557181594454"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full shadow-md text-[#223e63] font-semibold transition-all duration-300 flex items-center space-x-2 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span
              className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform scale-0 group-hover:scale-100 rounded-full"
              style={{
                background: "rgba(255, 255, 255, 1)",
              }}
            ></span>
            <span className="relative z-10">Fale conosco agora</span>
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
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
