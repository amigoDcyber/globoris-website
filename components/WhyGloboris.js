'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Zap, Lock, Globe } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Scalable Architecture',
    description: 'Cloud-native microservices built to handle millions of concurrent users',
  },
  {
    icon: Brain,
    title: 'AI-Driven Systems',
    description: 'Machine learning at the core for intelligent, adaptive solutions',
  },
  {
    icon: Lock,
    title: 'Secure Infrastructure',
    description: 'Enterprise-grade security, compliance, and data protection',
  },
  {
    icon: Globe,
    title: 'Africa-Focused',
    description: 'Built for African markets with deep local understanding',
  },
]

import { Brain } from 'lucide-react'

export default function WhyGloboris() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
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
          <h2 className="section-title">Why Choose Globoris?</h2>
          <p className="section-subtitle">
            The foundation of Africa's digital transformation
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                className="card-hover bg-white rounded-xl p-8 border border-gray-100 flex items-start space-x-4"
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              >
                <div className="bg-secondary bg-opacity-10 rounded-lg p-4 flex-shrink-0">
                  <Icon className="text-secondary" size={28} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-primary mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
