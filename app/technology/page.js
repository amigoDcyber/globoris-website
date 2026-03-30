'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Server, Shield, Cloud, Database, Zap, Lock } from 'lucide-react'

const techStack = {
  Backend: {
    icon: Server,
    color: 'from-blue-500 to-cyan-500',
    items: ['Spring Boot', 'Node.js', 'PostgreSQL', 'Redis', 'Apache Kafka'],
  },
  Frontend: {
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  Mobile: {
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    items: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
  },
  Infrastructure: {
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    items: ['Kubernetes', 'Docker', 'AWS', 'Google Cloud', 'Azure'],
  },
  Database: {
    icon: Database,
    color: 'from-pink-500 to-rose-500',
    items: ['PostgreSQL', 'MongoDB', 'Elasticsearch', 'DynamoDB'],
  },
  Security: {
    icon: Lock,
    color: 'from-cyan-500 to-blue-500',
    items: ['OAuth 2.0', 'JWT', 'TLS/SSL', 'OWASP', 'Encryption'],
  },
}

export default function Technology() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Technology</h1>
            <p className="text-xl text-gray-100">
              Enterprise-grade tech stack powering our solutions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Complete Tech Stack</h2>
            <p className="text-lg text-gray-600">
              Cutting-edge technologies ensuring scalability, security, and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, data], index) => {
              const Icon = data.icon
              return (
                <motion.div
                  key={category}
                  className="card-hover bg-gray-50 rounded-xl p-8 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className={`bg-gradient-to-br ${data.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-4">{category}</h3>

                  <ul className="space-y-3">
                    {data.items.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="mt-20 bg-primary text-white rounded-2xl p-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Architecture Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">Scalability</h4>
                <p className="text-gray-300">Microservices architecture enabling independent scaling of components</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Security</h4>
                <p className="text-gray-300">Multi-layer security with encryption, RBAC, and compliance monitoring</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Reliability</h4>
                <p className="text-gray-300">99.9% uptime SLA with automated failover and disaster recovery</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Performance</h4>
                <p className="text-gray-300">Global CDN, caching strategies, and optimized data pipelines</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
