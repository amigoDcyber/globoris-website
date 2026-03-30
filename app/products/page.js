'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BookOpen, Home, Lock } from 'lucide-react'

const products = [
  {
    id: 'schoolgate',
    name: 'SchoolGate',
    tagline: 'Complete School Management System',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    description: 'Transform educational institutions with integrated management across academics, finance, and operations.',
    capabilities: [
      'Academic Management - Course planning, grading, and transcripts',
      'Finance Module - Fee collection, expenses, and financial reporting',
      'Attendance Tracking - Automated attendance and reporting',
      'Student Portal - Access to grades, documents, and communications',
      'Parent Engagement - Real-time updates and communication',
      'HR Management - Staff management and payroll',
      'Library Management - Digital library and resource management',
    ],
  },
  {
    id: 'globorent',
    name: 'GloboRent',
    tagline: 'Digital Rental Ecosystem Platform',
    icon: Home,
    color: 'from-purple-500 to-pink-500',
    description: 'Revolutionize the rental industry with digital payments, automated compliance, and financial inclusion.',
    capabilities: [
      'Digital Payments - Secure payment processing',
      'Micro-loans - Quick loan approvals for rentals',
      'Tenant Verification - Background and credit checks',
      'Lease Management - Digital lease creation and tracking',
      'Payment Tracking - Automated payment reminders and history',
      'Dispute Resolution - Built-in mediation system',
      'Analytics Dashboard - Insights for owners and agents',
    ],
  },
  {
    id: 'sentinel',
    name: 'Stratus Sentinel',
    tagline: 'AI-Powered Cybersecurity Platform',
    icon: Lock,
    color: 'from-orange-500 to-red-500',
    description: 'Enterprise-grade security with AI-driven threat detection and rapid incident response.',
    capabilities: [
      'Threat Detection - Real-time anomaly detection',
      'Incident Response - Automated threat mitigation',
      'Vulnerability Management - Continuous security scanning',
      'Compliance Monitoring - Regulatory requirement tracking',
      'Security Intelligence - Global threat feeds',
      'Access Control - Identity and privilege management',
      'Audit Logging - Comprehensive security logs and reports',
    ],
  },
]

export default function Products() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Products</h1>
            <p className="text-xl text-gray-100">
              Industry-leading solutions transforming organizations
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={product.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {index % 2 === 0 ? (
                    <>
                      <div>
                        <span className="text-secondary font-semibold text-sm">{product.tagline}</span>
                        <h2 className="text-4xl font-bold text-primary my-4">{product.name}</h2>
                        <p className="text-lg text-gray-600 mb-8">{product.description}</p>

                        <div className="space-y-3 mb-8">
                          {product.capabilities.map((cap, i) => (
                            <div key={i} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700">{cap}</p>
                            </div>
                          ))}
                        </div>

                        <button className="btn-secondary">
                          Request Demo
                        </button>
                      </div>

                      <div className={`bg-gradient-to-br ${product.color} h-96 rounded-2xl flex items-center justify-center text-white`}>
                        <Icon size={120} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={`bg-gradient-to-br ${product.color} h-96 rounded-2xl flex items-center justify-center text-white`}>
                        <Icon size={120} />
                      </div>

                      <div>
                        <span className="text-secondary font-semibold text-sm">{product.tagline}</span>
                        <h2 className="text-4xl font-bold text-primary my-4">{product.name}</h2>
                        <p className="text-lg text-gray-600 mb-8">{product.description}</p>

                        <div className="space-y-3 mb-8">
                          {product.capabilities.map((cap, i) => (
                            <div key={i} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700">{cap}</p>
                            </div>
                          ))}
                        </div>

                        <button className="btn-secondary">
                          Request Demo
                        </button>
                      </div>
                    </>
                  )}
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
