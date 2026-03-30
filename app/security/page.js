'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Lock, Shield, CheckCircle2, AlertCircle } from 'lucide-react'

const securityFeatures = [
  {
    title: 'Data Encryption',
    description: 'End-to-end encryption for all data in transit and at rest',
    icon: Lock,
  },
  {
    title: 'Role-Based Access Control',
    description: 'Fine-grained permission management and user authentication',
    icon: Shield,
  },
  {
    title: 'Compliance',
    description: 'GDPR, HIPAA, and ISO 27001 compliant infrastructure',
    icon: CheckCircle2,
  },
  {
    title: 'Audit Logs',
    description: 'Comprehensive logging of all system activities and access',
    icon: AlertCircle,
  },
]

export default function Security() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Security</h1>
            <p className="text-xl text-gray-100">
              Enterprise-grade security protecting your data and systems
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Security First</h2>
              <p className="text-gray-600 mb-4">
                At Globoris, security is not an afterthought—it's fundamental to everything we build. Our infrastructure follows industry best practices and compliance standards.
              </p>
              <p className="text-gray-600 mb-6">
                We continuously monitor, test, and improve our security posture to protect your data and ensure business continuity.
              </p>
              <button className="btn-secondary">
                View Security Certifications
              </button>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <Icon className="text-secondary mb-3" size={28} />
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </motion.div>
          </div>

          <motion.div
            className="bg-gray-50 rounded-xl p-12 border border-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-8">Compliance Standards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['GDPR', 'HIPAA', 'ISO 27001', 'SOC 2'].map((standard) => (
                <div key={standard} className="bg-white rounded-lg p-6 text-center border border-gray-200">
                  <div className="text-lg font-bold text-secondary mb-2">✓</div>
                  <p className="font-semibold text-gray-900">{standard}</p>
                  <p className="text-sm text-gray-600 mt-2">Certified &<br /> Compliant</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
