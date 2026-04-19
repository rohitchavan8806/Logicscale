import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { VideoOff, Zap, CheckCircle, MessageCircle, Instagram, Download } from "lucide-react";
import PaymentModal from "../components/PaymentModal";
import LeadMagnetModal from "../components/LeadMagnetModal";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "", amount: 0 });

  useEffect(() => {
    // Dynamically inject the Instagram embed script on mount
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
            {/* Instagram Video (Reel) */}
            <div className="w-full flex justify-center overflow-hidden" dangerouslySetInnerHTML={{ __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DTxWnCijURy/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DTxWnCijURy/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DTxWnCijURy/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Rohit | Advertisment | Digital marketing (@logicscale.in)</a></p></div></blockquote>` }} />
            
            {/* Instagram Image (Post) */}
            <div className="w-full flex justify-center overflow-hidden" dangerouslySetInnerHTML={{ __html: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DXTK4e5iW2T/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/DXTK4e5iW2T/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/DXTK4e5iW2T/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Rohit | Advertisment | Digital marketing (@logicscale.in)</a></p></div></blockquote>` }} />
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
