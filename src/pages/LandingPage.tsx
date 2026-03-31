import { useState } from "react";
import { motion } from "motion/react";
import { VideoOff, Zap, CheckCircle, MessageCircle, Instagram, Download } from "lucide-react";
import PaymentModal from "../components/PaymentModal";
import LeadMagnetModal from "../components/LeadMagnetModal";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "", amount: 0 });

  const openModal = (name: string, amount: number) => {
    setSelectedPlan({ name, amount });
    setIsModalOpen(true);
  };

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-red-100 selection:text-red-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-heading font-bold text-xl sm:text-2xl tracking-tight">LOGICSCALE</span>
            </div>
            <div>
              <button
                onClick={scrollToPricing}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base rounded-lg transition-colors whitespace-nowrap"
              >
                [ GET MORE CLIENTS ]
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
            Get More Clients.<br />
            <span className="text-red-500">We Handle The Ads.</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            You don't need to learn Facebook. We write the scripts, edit the videos, and bring you ready-to-buy leads. You just answer the phone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToPricing}
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-heading text-2xl tracking-wide py-5 px-10 rounded-xl transition-transform hover:scale-105 shadow-lg shadow-red-500/20"
            >
              [ SEE OUR PLANS ]
            </button>
            <a
              href="https://wa.me/917499227347"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading text-xl tracking-wide py-5 px-8 rounded-xl transition-transform hover:scale-105 shadow-lg shadow-green-500/20"
            >
              <MessageCircle className="w-6 h-6" />
              WHATSAPP US
            </a>
            <a
              href="https://www.instagram.com/rcrobust/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 hover:opacity-90 text-white font-heading text-xl tracking-wide py-5 px-8 rounded-xl transition-transform hover:scale-105 shadow-lg shadow-purple-500/20"
            >
              <Instagram className="w-6 h-6" />
              INSTAGRAM
            </a>
          </div>
        </motion.div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold">
              Simplify The Process: <span className="text-red-500">LogicScale Style</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <VideoOff className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">No Confusing Tech Talk</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We remove the jargon. You won't ever have to look at a complicated Ads Dashboard.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Dead-Simple Execution</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We tell you exactly what to say on camera. You record it. We do the rest.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center aspect-square">
              {/* Minimalist Microphone Illustration */}
              <div className="relative flex flex-col items-center">
                <div className="absolute inset-0 bg-red-500 blur-[100px] opacity-20 rounded-full"></div>
                
                {/* Mic Head */}
                <div className="relative z-10 w-28 h-44 bg-gray-100 rounded-full border-8 border-black overflow-hidden flex flex-col">
                  {/* Grill pattern lines */}
                  <div className="w-full h-full flex flex-col justify-evenly opacity-20">
                    <div className="w-full h-1 bg-black"></div>
                    <div className="w-full h-1 bg-black"></div>
                    <div className="w-full h-1 bg-black"></div>
                    <div className="w-full h-1 bg-black"></div>
                    <div className="w-full h-1 bg-black"></div>
                  </div>
                </div>

                {/* Mic Holder (U-shape) */}
                <div className="w-40 h-24 border-b-8 border-x-8 border-black rounded-b-full -mt-16 z-0"></div>
                
                {/* Stem */}
                <div className="w-8 h-16 bg-black mt-0"></div>
                
                {/* Base */}
                <div className="w-48 h-8 bg-black rounded-t-xl mt-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Our Work */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold">
              Our Work & <span className="text-red-500">Testimonials</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              See the results we've delivered for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Image 1 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-transform hover:scale-[1.02]">
              <img src="/screenshot-1.png" alt="Client Testimonial 1" className="w-full h-auto object-contain max-h-[500px] mx-auto" />
            </div>

            {/* Video */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-transform hover:scale-[1.02]">
              <video 
                src="/video-1.mp4" 
                controls 
                className="w-full h-auto object-contain max-h-[500px] mx-auto bg-black"
              />
            </div>

            {/* Image 2 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-transform hover:scale-[1.02]">
              <img src="/screenshot-2.png" alt="Client Testimonial 2" className="w-full h-auto object-contain max-h-[500px] mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="lead-magnet-section py-24 bg-red-50 border-y border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
            Free Bonus: <span className="text-red-500">The Pre-Lead Sales Precautions</span>
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Before you start generating leads, make sure you're ready to close them. Download our exclusive guide to maximize your conversion rate.
          </p>
          <button
            onClick={() => setIsLeadModalOpen(true)}
            className="inline-flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white font-heading text-lg sm:text-xl tracking-wide py-5 px-8 sm:px-12 rounded-xl transition-transform hover:scale-105 shadow-xl shadow-red-500/20"
          >
            <Download className="w-6 h-6 flex-shrink-0" />
            <span className="text-left">Download the "Before Lead Generation Precautions to Convert More Lead"</span>
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl sm:text-6xl font-bold">Choose Your Plan.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan 1 */}
          <div className="bg-[#F9FAFB] rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Just The Setup</h3>
            <div className="mb-6">
              <span className="text-4xl font-heading font-bold">₹10,000</span>
              <span className="text-gray-500 font-medium"> / One-Time</span>
            </div>
            <p className="text-gray-600 mb-8 flex-grow text-lg">
              You want to run your own ads, but need it set up correctly.
            </p>
            <button
              onClick={() => openModal("Just The Setup", 10000)}
              className="w-full py-3 lg:py-4 border-2 border-black text-black font-bold rounded-xl hover:bg-black hover:text-white transition-colors text-sm lg:text-lg px-2"
            >
              [ GET SET UP ]
            </button>
          </div>

          {/* Plan 2 */}
          <div className="bg-[#F9FAFB] rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">We Run Your Ads</h3>
            <div className="mb-6">
              <span className="text-4xl font-heading font-bold">₹15,000</span>
              <span className="text-gray-500 font-medium"> / month</span>
            </div>
            <p className="text-gray-600 mb-8 flex-grow text-lg">
              You make the videos and pictures, we do all the confusing computer work.
            </p>
            <button
              onClick={() => openModal("We Run Your Ads", 15000)}
              className="w-full py-3 lg:py-4 border-2 border-black text-black font-bold rounded-xl hover:bg-black hover:text-white transition-colors text-sm lg:text-lg px-2"
            >
              [ START GETTING LEADS ]
            </button>
          </div>

          {/* Plan 3 */}
          <div className="bg-[#F9FAFB] rounded-2xl p-8 shadow-xl border-2 border-red-500 flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
              ⭐ MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2 mt-2">We Do Everything</h3>
            <div className="mb-6">
              <span className="text-5xl font-heading font-bold">₹25,000</span>
              <span className="text-gray-500 font-medium"> / month</span>
            </div>
            <p className="text-gray-800 font-medium mb-6 text-lg">
              A complete 'Done-For-You' system.
            </p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">We give you the exact scripts.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">You record it on your phone.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">We edit the video.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">We run the ads.</span>
              </li>
            </ul>
            <button
              onClick={() => openModal("We Do Everything", 25000)}
              className="w-full py-4 lg:py-5 bg-red-500 text-white font-heading text-base lg:text-xl tracking-wide rounded-xl hover:bg-red-600 transition-colors shadow-lg shadow-red-500/30 px-2"
            >
              [ I WANT THIS PLAN ]
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="font-heading font-bold text-2xl tracking-tight block mb-2">LOGICSCALE</span>
            <p className="text-gray-400">© {new Date().getFullYear()} LogicScale. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/917499227347"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-green-500 rounded-full transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/rcrobust/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 rounded-full transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={selectedPlan.name}
        amount={selectedPlan.amount}
      />

      <LeadMagnetModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
      />
    </div>
  );
}
