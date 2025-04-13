"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import evolua from '../assets/evolua.png'
const FeedbackSection = () => {
  // Estado para controlar a exibição de mais feedbacks
  const [showAllFeedbacks, setShowAllFeedbacks] = useState(false)

  // Cores do projeto
  const primaryBlue = "#223e63"
  const secondaryBlue = "#69abc3"

  // Dados dos feedbacks
  const feedbacks = [
    {
      id: 1,
      text: "Gostei muito do trabalho da PX, eles trouxeram bons clientes para mim. Foi tudo feito com muita dedicação, empenho e divulgação dos produtos. Excelente a qualidade dos materiais, dos vídeos e das produções. Super recomendo, carismáticos e atenciosos!",
      author: "Samantha Kelly",
      instagram: "@samanthakelly._",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2821%29-OvgVtt41aKaqisY2qLtwblKkK7nuXY.png",
    },
    {
      id: 2,
      text: "Eu amo demais, são super criativos. Cada detalhe era um vídeo ou uma foto, isso fez render o máximo de materiais possíveis hahaha. A gente realmente vê o quanto vocês se esforçam para entregar o melhor para o cliente.",
      author: "Emily Santolin",
      instagram: "@emilysantolinbeauty",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N1GMxC56KEji74Da0w2lRrnsX2CfVk.png",
    },
    {
      id: 3,
      text: "Eu estou muito satisfeita com o seu serviços, o meu Instagram ficou outro nível, teve bastantes clientes comentando e tive novos clientes com essas atualizações também. É como vocês dizem, detalhes que fazem toda a diferença principalmente quando o assunto é nosso negócio. Obrigada pessoal pelo profissionalismo!",
      author: "Studio Llopez",
      instagram: "@studiollopez",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZrxQQ9t4dZIar8hbdj32EfHUzNLaOO.png",
    },
    {
      id: 4,
      text: "Conheci a Publi X através das redes sociais e fiz uma parceria com eles, e digo a vocês a experiência só confirmou: extremamente inteligentes, carismáticos, paciência, criativos, com muitas ideias, comprometimento e profissionalismo. Meu primeiro trabalho com eles já começou de uma forma impactante, abrindo portas para novos clientes e possibilidades. Não abro mão da PX",
      author: "José Mendonça",
      instagram: "@joseumendonca.fotografia",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Z155uNX6qw8BYlFQQPsLA8luj4lePA.png",
    },
    ,
    {
      id: 5,
      text: "Nick me ajudou com meus reels do instagram, desde a elaboração do roteiro até a gravação e edição. Apesar de não ter muito costume em ser gravada, ela fez com que eu me sentisse a vontade a todo momento, entregou rápido e com muita qualidade!",
      author: "Nathalia",
      instagram: "@nath_dev_",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lnoSm3QJkUJzdwgxXy1wgTmbUzxVb1.png",
    },
    {
      id: 6,
      text: "A Publi X tem sido uma empresa parceira da evolua surf, demonstrando muito comprometimento, responsabilidade e dedicação ao trabalho. Apesar de já trabalhar a 30 anos com surf, a parte de explorar as redes sociais pra aumentar o conhecimento e a rentabilidade da empresa era uma das minhas falhas como empresário. A PX veio para somar muito a equipe evolua surf, com ideias inovadoras e uma vontade de crescer muito contagiante. Tem sido extremamente gratificante esse trabalho com vocês e o retorno foi quase que imediato, porque sabiam o público a ser atingido.",
      author: "Evolua Surf",
      instagram: "@evoluasurf",
      image: evolua,
    }
  ]

  // Dividir os feedbacks entre iniciais e expandidos
  const initialFeedbacks = feedbacks.slice(0, 3)
  const expandedFeedbacks = feedbacks.slice(3)

  // Função para alternar a exibição de todos os feedbacks
  const toggleFeedbacks = () => {
    setShowAllFeedbacks(!showAllFeedbacks)
  }

  return (
    <section
      id="clientes"
      className="relative py-24 overflow-hidden"
      style={{
        background: secondaryBlue,
      }}
    >
      {/* Logo como marca d'água no canto inferior direito - sem opacidade */}
      <div className="absolute bottom-10 right-10 w-64 md:w-80 h-auto z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2822%29-JlCXehUMSeIta9mex0rzadlnEXzekS.png"
          alt="Publi X Logo"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Elementos decorativos adicionais */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Padrão de pontos */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Círculos decorativos */}
        <div
          className="absolute top-20 left-20 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #ffffff 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        ></div>

        <div
          className="absolute bottom-40 right-40 w-80 h-80 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #ffffff 0%, transparent 70%)",
            filter: "blur(25px)",
          }}
        ></div>

        {/* Formas geométricas */}
        <div
          className="absolute top-1/3 left-10 w-20 h-20 opacity-10 transform rotate-45"
          style={{
            border: "2px solid #ffffff",
          }}
        ></div>

        <div
          className="absolute top-2/3 right-20 w-16 h-16 opacity-10 transform rotate-12"
          style={{
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            border: "2px solid #ffffff",
          }}
        ></div>
      </div>

      {/* Gradientes nas bordas */}
      <div
        className="absolute top-0 left-0 w-full h-20 z-0"
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent)",
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-20 z-0"
        style={{
          background: "linear-gradient(to top, rgba(255, 255, 255, 0.1), transparent)",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Título da seção */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">O que nossos clientes dizem?</h2>
          <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid de feedbacks iniciais - sempre visíveis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialFeedbacks.map((feedback, index) => (
            <motion.div
              key={feedback.id}
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div
                className="h-full p-8 rounded-2xl flex flex-col"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Ícone de aspas */}
                <div className="mb-6 text-white/40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>

                {/* Texto do feedback */}
                <p className="text-white text-lg mb-8 flex-grow">{feedback.text}</p>

                {/* Autor do feedback */}
                <div className="flex items-center mt-auto">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30 mr-4">
                    <div className="w-full h-full flex items-center justify-center bg-white/10">
                      <img
                        src={feedback.image || "/placeholder.svg"}
                        alt={feedback.author}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{feedback.author}</h4>
                    <p className="text-white/70">{feedback.instagram}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feedbacks expandidos - visíveis apenas quando showAllFeedbacks é true */}
        <AnimatePresence>
          {showAllFeedbacks && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {expandedFeedbacks.map((feedback, index) => (
                  <motion.div
                    key={feedback.id}
                    className="h-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div
                      className="h-full p-8 rounded-2xl flex flex-col"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {/* Ícone de aspas */}
                      <div className="mb-6 text-white/40">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                        </svg>
                      </div>

                      {/* Texto do feedback */}
                      <p className="text-white text-lg mb-8 flex-grow">{feedback.text}</p>

                      {/* Autor do feedback */}
                      <div className="flex items-center mt-auto">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30 mr-4">
                          <div className="w-full h-full flex items-center justify-center bg-white/10">
                            <img
                              src={feedback.image || "/placeholder.svg"}
                              alt={feedback.author}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-bold">{feedback.author}</h4>
                          <p className="text-white/70">{feedback.instagram}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA para mais depoimentos */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.button
            className="px-8 py-4 rounded-full shadow-xl font-semibold transition-all duration-300 flex items-center space-x-2 relative overflow-hidden group mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleFeedbacks}
            style={{
              backgroundColor: "white",
              color: primaryBlue,
            }}
          >
            <span className="relative z-10">{showAllFeedbacks ? "Ver menos depoimentos" : "Ver mais depoimentos"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 ${
                showAllFeedbacks ? "transform rotate-180" : ""
              }`}
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
        </motion.div>
      </div>
    </section>
  )
}

export default FeedbackSection
