import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="mb-8"
      >
        <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center max-w-lg"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Payment Received.
        </h1>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          We will message you on WhatsApp in 5 minutes to start your onboarding.
        </p>
        
        <Link 
          to="/"
          className="inline-block border-2 border-black text-black font-bold py-3 px-8 rounded-xl hover:bg-black hover:text-white transition-colors"
        >
          Return to Homepage
        </Link>
      </motion.div>
    </div>
  );
}
