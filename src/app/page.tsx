import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Arsenal from '@/components/Arsenal'
import Strategy from '@/components/Strategy'
import TheProof from '@/components/TheProof'
import TheVault from '@/components/TheVault'
import ThePulse from '@/components/ThePulse'
import TheCloser from '@/components/TheCloser'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#C9A96E] selection:text-black font-sans scroll-smooth">
      <Navbar />
      <HeroSection />
      <Arsenal />
      <Strategy />
      <TheProof />
      <TheVault />
      <ThePulse />
      <TheCloser />
      <Footer />
    </main>
  )
}