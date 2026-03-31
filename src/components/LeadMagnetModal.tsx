import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Download } from "lucide-react";

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadMagnetModal({ isOpen, onClose }: LeadMagnetModalProps) {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setName("");
      setContactNumber("");
      setIsSubmitting(false);
      setIsSuccess(false);
    }
  }, [isOpen]);

  const triggerDownload = async () => {
    try {
      const response = await fetch("/pre-lead-sales-precautions.pdf");
      if (!response.ok) throw new Error("Failed to fetch PDF");
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.download = "pre-lead-sales-precautions.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => window.URL.revokeObjectURL(url), 1000);
    } catch (error) {
      console.error("Download error:", error);
      // Fallback
      window.open("/pre-lead-sales-precautions.pdf", "_blank");
    }
  };

  const handleProceed = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contactNumber) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contactNumber, plan: "Lead Magnet PDF", amount: 0 }),
      });
      
      if (res.ok) {
        setIsSuccess(true);
        // Trigger the download automatically using Blob approach
        await triggerDownload();
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
    } finally {
      setIsSubmitting(false);
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

            {!isSuccess ? (
              <div>
                <h3 className="mb-2 text-2xl font-bold font-heading">Get Your Free Guide</h3>
                <p className="mb-6 text-sm text-gray-600">
                  Enter your details below to instantly download <span className="font-semibold text-black">The Pre-Lead Sales Precautions</span>.
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
                    className="w-full py-4 text-lg font-bold text-white transition-colors bg-red-500 rounded-xl hover:bg-red-600 disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Processing..." : (
                      <>
                        <Download className="w-5 h-5" />
                        Download PDF Now
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center py-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Download className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="mb-2 text-2xl font-bold font-heading text-green-600">Download Started!</h3>
                <p className="mb-6 text-gray-600">
                  Your PDF is downloading. If it didn't start automatically, click the button below.
                </p>
                <button
                  onClick={triggerDownload}
                  className="w-full py-4 text-lg font-bold text-white transition-colors bg-green-500 rounded-xl hover:bg-green-600 block"
                >
                  Download Again
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
