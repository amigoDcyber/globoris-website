'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Briefcase, Building2, Heart, GraduationCap, Home, Database } from 'lucide-react'

const industries = [
  {
    name: 'Education',
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-500',
    challenges: [
      'Manual administrative processes',
      'Fragmented data management',
      'Limited parent-school communication',
    ],
    solutions: 'SchoolGate transforms education management with integrated academic, financial, and operational systems.',
    products: ['SchoolGate'],
  },
  {
    name: 'Real Estate & Rentals',
    icon: Home,
    color: 'from-purple-500 to-pink-500',
    challenges: [
      'Manual payment collection',
      'Compliance tracking difficulties',
      'Limited access to credit',
    ],
    solutions: 'GloboRent revolutionizes rental operations with digital payments, compliance automation, and integrated lending.',
    products: ['GloboRent'],
  },
  {
    name: 'Government',
    icon: Building2,
    color: 'from-orange-500 to-red-500',
    challenges: [
      'Legacy system integration',
      'Citizen service delivery',
      'Document management at scale',
    ],
    solutions: 'GovTech platforms enable seamless citizen services and digital government transformation.',
    products: ['GovTech Solutions'],
  },
  {
    name: 'Finance & Banking',
    icon: Briefcase,
    color: 'from-green-500 to-emerald-500',
    challenges: [
      'Payment infrastructure gaps',
      'Fraud prevention',
      'Regulatory compliance',
    ],
    solutions: 'Fintech solutions provide secure, scalable payment systems and advanced fraud detection.',
    products: ['Fintech Solutions'],
  },
  {
    name: 'Healthcare',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    challenges: [
      'Patient data management',
      'System interoperability',
      'Compliance requirements',
    ],
    solutions: 'Enterprise systems designed for healthcare with HIPAA compliance and data security.',
    products: ['Enterprise Systems', 'Stratus Sentinel'],
  },
  {
    name: 'Technology',
    icon: Database,
    color: 'from-cyan-500 to-blue-500',
    challenges: [
      'Cybersecurity threats',
      'System scalability',
      'Data protection',
    ],
    solutions: 'Comprehensive security and infrastructure solutions for tech companies.',
    products: ['Stratus Sentinel', 'AI & Data Intelligence'],
  },
]

export default function Industries() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Industries</h1>
            <p className="text-xl text-gray-100">
              Tailored solutions for every industry vertical
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <motion.div
                  key={industry.name}
                  className="card-hover bg-gray-50 rounded-xl p-8 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className={`bg-gradient-to-br ${industry.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-4">{industry.name}</h3>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Challenges</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {industry.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-secondary mt-1">→</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-700">{industry.solutions}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {industry.products.map((product, i) => (
                      <span key={i} className="px-3 py-1 bg-secondary bg-opacity-10 text-secondary text-xs font-semibold rounded-full">
                        {product}
                      </span>
                    ))}
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
