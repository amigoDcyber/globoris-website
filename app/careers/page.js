'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Briefcase, Users, Heart, TrendingUp } from 'lucide-react'

const jobs = [
  {
    title: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'Kigali, Rwanda',
    type: 'Full-time',
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Kigali, Rwanda',
    type: 'Full-time',
  },
  {
    title: 'Data Scientist',
    department: 'AI/ML',
    location: 'Kigali, Rwanda',
    type: 'Full-time',
  },
  {
    title: 'Solutions Architect',
    department: 'Solutions',
    location: 'Remote',
    type: 'Full-time',
  },
]

const values = [
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work together to solve complex problems and achieve shared goals.',
  },
  {
    icon: Briefcase,
    title: 'Excellence',
    description: 'We pursue excellence in everything we do, from code to customer service.',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'We invest in continuous learning and career development for our team.',
  },
  {
    icon: Heart,
    title: 'Impact',
    description: 'We build solutions that create meaningful impact in African communities.',
  },
]

export default function Careers() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-100">
              Build the future of Africa's digital infrastructure
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
            <h2 className="text-4xl font-bold text-primary mb-4">Our Culture</h2>
            <p className="text-lg text-gray-600">
              We believe in building a diverse, inclusive, and innovative team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-secondary bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-primary mb-8">Open Positions</h3>
            <div className="grid grid-cols-1 gap-4">
              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  className="card-hover bg-gray-50 rounded-lg p-6 border border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-lg font-bold text-primary mb-2">{job.title}</h4>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <button className="btn-secondary text-sm md:whitespace-nowrap">
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary text-white rounded-xl p-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Don't see your role?</h3>
            <p className="mb-6">We're always looking for talented individuals to join our team.</p>
            <button className="bg-white text-secondary font-bold px-8 py-3 rounded-lg hover:shadow-lg transition-all">
              Send us your resume
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
