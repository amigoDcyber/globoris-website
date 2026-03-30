'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Globe, Brain } from 'lucide-react'

const solutions = [
  {
    id: 1,
    icon: Zap,
    title: 'Fintech Systems',
    description: 'Payment systems, wallets, APIs, and lending platforms',
    color: 'bg-blue-100',
  },
  {
    id: 2,
    icon: Globe,
    title: 'GovTech Platforms',
    description: 'Government digital transformation & citizen services',
    color: 'bg-purple-100',
  },
  {
    id: 3,
    icon: Brain,
    title: 'AI & Data Intelligence',
    description: 'Machine learning and advanced analytics solutions',
    color: 'bg-cyan-100',
  },
  {
    id: 4,
    icon: Shield,
    title: 'Enterprise Systems',
    description: 'Scalable enterprise software & infrastructure',
    color: 'bg-green-100',
  },
]

export default function SolutionsCard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Core Solutions</h2>
          <p className="section-subtitle">
            Comprehensive technology solutions for every industry
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={solution.id}
                className="card-hover bg-white rounded-xl p-8 border border-gray-100"
                variants={cardVariants}
              >
                <div className={`${solution.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{solution.title}</h3>
                <p className="text-gray-600 text-sm">{solution.description}</p>
                <button className="mt-4 text-secondary font-semibold text-sm hover:translate-x-1 transition-transform">
                  Learn More →
                </button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
