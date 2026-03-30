'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Users, Target, Lightbulb } from 'lucide-react'

export default function About() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Globoris</h1>
            <p className="text-xl text-gray-100">
              Pioneering Africa's digital transformation through innovative technology
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="bg-blue-50 rounded-xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To empower organizations and societies through innovative, scalable, and intelligent technology solutions.
              </p>
            </motion.div>

            <motion.div
              className="bg-purple-50 rounded-xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To become Africa's leading technology powerhouse delivering world-class digital infrastructure.
              </p>
            </motion.div>

            <motion.div
              className="bg-cyan-50 rounded-xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-cyan-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-cyan-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Our Values</h3>
              <p className="text-gray-600">
                Innovation, integrity, and commitment to transforming African industries through technology.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="bg-gray-50 rounded-xl p-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Company Overview</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Globoris Technologies Limited is a multinational technology solutions provider focused on building scalable, intelligent, and impactful digital systems across Africa and beyond.
              </p>
              <p>
                We specialize in fintech platforms, GovTech systems, AI-powered solutions, enterprise software development, and digital transformation infrastructure.
              </p>
              <p>
                Our team brings together world-class experts in software engineering, data science, business development, and industry-specific solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
