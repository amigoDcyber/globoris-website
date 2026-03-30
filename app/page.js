import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import SolutionsCard from '@/components/SolutionsCard'
import ProductsSection from '@/components/ProductsSection'
import WhyGloboris from '@/components/WhyGloboris'
import MetricsSection from '@/components/MetricsSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SolutionsCard />
      <ProductsSection />
      <WhyGloboris />
      <MetricsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
