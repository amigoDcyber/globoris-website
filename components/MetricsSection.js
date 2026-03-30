'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  { label: '50,000+', description: 'Target Users' },
  { label: 'Multi-Country', description: 'Expansion' },
  { label: '99.9%', description: 'Uptime' },
  { label: 'Enterprise', description: 'Grade Architecture' },
]

function AnimatedCounter({ from = 0, to = 100, duration = 2 }) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    let start = from
    const increment = (to - from) / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [from, to, duration])

  return <span>{count.toLocaleString()}</span>
}

export default function MetricsSection() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for Scale</h2>
          <p className="text-xl text-gray-300">
            Enterprise-grade infrastructure supporting millions of transactions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-white bg-opacity-5 rounded-xl backdrop-blur-sm border border-white border-opacity-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.label}
              </div>
              <p className="text-gray-300">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
