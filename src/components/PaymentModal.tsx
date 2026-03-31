import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { QRCodeSVG } from "qrcode.react";
import { X } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  amount: number;
}

export default function PaymentModal({ isOpen, onClose, planName, amount }: PaymentModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const upiId = "logicscale@upi"; // Placeholder UPI ID
  const upiString = `upi://pay?pa=${upiId}&pn=LogicScale&am=${amount}&cu=INR`;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleProceed = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contactNumber) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contactNumber, plan: planName, amount }),
      });
      if (res.ok) {
        setStep(2);
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMobilePay = () => {
    window.location.href = upiString;
    // Simulate payment success after a short delay for demo purposes
    setTimeout(() => {
      window.location.href = "/success";
    }, 3000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Pay LogicScale',
          text: `Scan this QR code to pay ₹${amount} for the ${planName} plan.`,
          url: window.location.origin + '/qr.jpeg',
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      alert('Sharing is not supported on this browser. You can save the image directly.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md p-6 bg-white shadow-2xl rounded-2xl"
          >
            <button
              onClick={onClose}
              className="absolute text-gray-400 top-4 right-4 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>

            {step === 1 ? (
              <div>
                <h3 className="mb-2 text-2xl font-bold font-heading">Complete Your Order</h3>
                <p className="mb-6 text-sm text-gray-600">
                  You are selecting the <span className="font-semibold text-black">{planName}</span> plan.
                </p>
                <form onSubmit={handleProceed} className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Contact Number</label>
                    <input
                      type="tel"
                      required
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg font-bold text-white transition-colors bg-red-500 rounded-xl hover:bg-red-600 disabled:opacity-70"
                  >
                    {isSubmitting ? "Processing..." : "Proceed to Payment"}
                  </button>
                </form>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center">
                <h3 className="mb-2 text-2xl font-bold font-heading">Complete Payment</h3>
                <p className="mb-6 text-gray-600">
                  Amount to pay: <span className="font-bold text-black">₹{amount.toLocaleString()}</span>
                </p>

                {isMobile ? (
                  <div className="w-full space-y-4">
                    <div className="p-2 bg-white border-2 border-gray-100 shadow-sm rounded-xl mx-auto max-w-[200px] mb-4">
                      <img src="/qr.jpeg" alt="PhonePe QR Code" className="w-full h-auto rounded-lg" />
                    </div>
                    <button
                      onClick={handleMobilePay}
                      className="w-full py-4 text-xl font-bold text-white transition-colors bg-red-500 rounded-xl hover:bg-red-600"
                    >
                      Pay via UPI App
                    </button>
                    <button
                      onClick={handleShare}
                      className="w-full py-3 text-lg font-bold text-black border-2 border-black transition-colors bg-white rounded-xl hover:bg-gray-50"
                    >
                      Share QR Code
                    </button>
                    <a
                      href="https://wa.me/917499227347"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 text-lg font-bold text-green-600 border-2 border-green-600 transition-colors bg-white rounded-xl hover:bg-green-50 text-center"
                    >
                      WhatsApp for more info
                    </a>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="p-2 bg-white border-2 border-gray-100 shadow-sm rounded-xl">
                      <img src="/qr.jpeg" alt="PhonePe QR Code" className="w-48 h-48 object-contain rounded-lg" />
                    </div>
                    <p className="mt-4 font-medium text-gray-600">
                      Scan with PhonePe, GPay, or Paytm
                    </p>
                    <button
                      onClick={handleShare}
                      className="mt-4 px-6 py-2 text-sm font-bold text-black border-2 border-black transition-colors bg-white rounded-lg hover:bg-gray-50"
                    >
                      Share QR Code
                    </button>
                    <a
                      href="https://wa.me/917499227347"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 text-sm text-green-600 font-medium hover:text-green-700 underline"
                    >
                      WhatsApp for more information
                    </a>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
