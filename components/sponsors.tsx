"use client"

import { motion } from "framer-motion"

export default function Sponsors() {
  const sponsors = [
    { name: "Microsoft" },
    { name: "Google" },
    { name: "AWS" },
    { name: "LinkedIn" },
    { name: "Stripe" },
  ]

  // Estilos para el efecto 3D
  const textStyles = {
    base: "text-3xl font-extrabold transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-800 dark:from-white dark:to-gray-300",
    shadow: "1px 1px 0 rgba(0,0,0,0.15), 2px 2px 0 rgba(0,0,0,0.1), 3px 3px 5px rgba(0,0,0,0.1)",
    shadowHover: "1px 1px 0 rgba(0,0,0,0.15), 3px 3px 0 rgba(0,0,0,0.1), 5px 5px 10px rgba(0,0,0,0.1)",
  }

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-xl font-medium text-muted-foreground">Trusted by leading companies</h2>
          <div className="w-full flex flex-wrap justify-between items-center">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center mx-auto px-4 py-2 sm:px-0"
              >
                <motion.span
                  className={textStyles.base}
                  initial={{
                    textShadow: textStyles.shadow,
                    transform: "perspective(500px) rotateX(5deg)",
                    letterSpacing: "0.5px",
                  }}
                  whileHover={{
                    textShadow: textStyles.shadowHover,
                    transform: "perspective(500px) rotateX(0deg) scale(1.05)",
                  }}
                  aria-label={`${sponsor.name}, empresa patrocinadora`}
                >
                  {sponsor.name}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
