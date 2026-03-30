'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="min-h-screen flex items-center justify-center gradient-primary relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-white bg-opacity-10 text-accent rounded-full text-sm font-semibold backdrop-blur-sm">
            🌍 Enterprise Digital Infrastructure
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Building Africa's
          <span className="block text-accent">Digital Infrastructure</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto"
        >
          Scalable fintech, govtech, and AI-powered platforms transforming industries across the continent.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center">
            Explore Solutions
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all">
            Book a Demo
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 text-gray-200">
          <p className="text-sm mb-4">Trusted by leading organizations:</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {['MTN', 'Airtel', 'IremboPay'].map((brand) => (
              <div key={brand} className="text-lg font-semibold opacity-60 hover:opacity-100 transition">
                {brand}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
