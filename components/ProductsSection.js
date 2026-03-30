'use client'

import { motion } from 'framer-motion'
import { BookOpen, Home, Lock } from 'lucide-react'

const products = [
  {
    id: 1,
    icon: BookOpen,
    name: 'SchoolGate',
    tagline: 'School Management System',
    description: 'Complete school management platform with finance, academics, and operations management.',
    features: ['Finance Management', 'Academic Tracking', 'Operations Control'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    icon: Home,
    name: 'GloboRent',
    tagline: 'Rental Ecosystem',
    description: 'Digital payment solutions, loans, and compliance management for rental platforms.',
    features: ['Digital Payments', 'Loan Management', 'Compliance Tools'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    icon: Lock,
    name: 'Stratus Sentinel',
    tagline: 'Cybersecurity Platform',
    description: 'AI-powered threat detection, incident response, and security intelligence.',
    features: ['Threat Detection', 'Incident Response', 'Security Intelligence'],
    gradient: 'from-orange-500 to-red-500',
  },
]

export default function ProductsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">
            Powerful solutions transforming industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.id}
                className="group card-hover bg-gray-50 rounded-2xl overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`bg-gradient-to-br ${product.gradient} h-32 flex items-end justify-start p-6`}>
                  <div className="bg-white rounded-lg p-3">
                    <Icon className="text-gray-900" size={28} />
                  </div>
                </div>

                <div className="p-8">
                  <div className="text-sm text-secondary font-semibold mb-2">{product.tagline}</div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="w-full btn-secondary">
                    Learn More
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
