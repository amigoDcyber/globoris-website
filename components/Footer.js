'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Share } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Globoris</h3>
            <p className="text-gray-300 text-sm">
              Building Africa's Digital Infrastructure through innovative technology solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/solutions#fintech" className="hover:text-accent transition">Fintech</Link></li>
              <li><Link href="/solutions#govtech" className="hover:text-accent transition">GovTech</Link></li>
              <li><Link href="/solutions#ai" className="hover:text-accent transition">AI & Data</Link></li>
              <li><Link href="/solutions#enterprise" className="hover:text-accent transition">Enterprise</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/products#schoolgate" className="hover:text-accent transition">SchoolGate</Link></li>
              <li><Link href="/products#globorent" className="hover:text-accent transition">GloboRent</Link></li>
              <li><Link href="/products#sentinel" className="hover:text-accent transition">Stratus Sentinel</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:info@globoris.com">info@globoris.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Africa HQ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Globoris Technologies. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition"><Share size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-accent transition"><Share size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
