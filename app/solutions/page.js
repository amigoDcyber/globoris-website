'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CreditCard, Lock, Zap, Wallet } from 'lucide-react'

const solutionDetails = [
  {
    title: 'Fintech Solutions',
    icon: CreditCard,
    color: 'from-blue-500 to-cyan-500',
    description: 'Next-generation financial technology platforms',
    features: [
      'Payment Systems - Secure, scalable payment infrastructure',
      'Digital Wallets - Multi-currency wallet management',
      'APIs - Robust REST and GraphQL APIs for integration',
      'Lending Systems - Automated lending and loan origination',
      'Fraud Detection - AI-powered transaction monitoring',
    ],
  },
  {
    title: 'GovTech Platforms',
    icon: Lock,
    color: 'from-purple-500 to-pink-500',
    description: 'Government digital transformation solutions',
    features: [
      'Citizen Services - Portal for public services',
      'Document Management - Digital record keeping',
      'Payment Systems - Tax and fee collection',
      'Compliance - Regulatory and audit trails',
      'Integration - Connect legacy systems',
    ],
  },
  {
    title: 'AI & Data Intelligence',
    icon: Zap,
    color: 'from-orange-500 to-red-500',
    description: 'Machine learning and analytics solutions',
    features: [
      'Predictive Analytics - Forecasting and insights',
      'Data Processing - ETL and data pipelines',
      'Business Intelligence - Dashboard and reporting',
      'NLP - Natural language processing',
      'Computer Vision - Image and video analysis',
    ],
  },
  {
    title: 'Enterprise Systems',
    icon: Wallet,
    color: 'from-green-500 to-emerald-500',
    description: 'Scalable enterprise software solutions',
    features: [
      'ERP Systems - Integrated business management',
      'CRM Platforms - Customer relationship tools',
      'Microservices - Cloud-native architecture',
      'API Gateway - Centralized API management',
      'Data Warehouse - Enterprise data platform',
    ],
  },
]

export default function Solutions() {
  return (
    <main>
      <Navbar />

      <section className="pt-40 pb-24 bg-gradient-to-b from-primary to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Solutions</h1>
            <p className="text-xl text-gray-100">
              Comprehensive technology platforms for every industry challenge
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {solutionDetails.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className={`bg-gradient-to-br ${solution.color} p-12 rounded-2xl text-white flex items-center justify-center h-64`}>
                      <Icon size={80} />
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <h2 className="text-4xl font-bold text-primary mb-4">{solution.title}</h2>
                    <p className="text-lg text-gray-600 mb-8">{solution.description}</p>

                    <div className="space-y-4">
                      {solution.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <button className="mt-8 btn-secondary">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
