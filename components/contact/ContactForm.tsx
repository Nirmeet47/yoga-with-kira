"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative bg-[#f7f7f5] py-8 sm:py-12 md:py-16 px-3 sm:px-4">
      {/* Top Right Decorative Image */}
      <div className="absolute top-0 right-0 w-16 sm:w-20 md:w-22 lg:w-24 xl:w-30">
        <Image
          src="/images/contact/contact-bg-2.png"
          alt="Decorative background"
          width={400}
          height={400}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Form Container */}
        <div className="bg-[#35402A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-amaranth font-medium text-center mb-6 sm:mb-8 md:mb-10 px-2">
            Send us a Message
          </h2>

          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A9D941] text-sm sm:text-base"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A9D941] text-sm sm:text-base"
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A9D941] text-sm sm:text-base"
              />

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A9D941] text-sm sm:text-base"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A9D941] text-sm sm:text-base resize-none sm:resize-y"
            />

            {/* Submit Button */}
            <div className="flex justify-center items-center pt-2">
              <button className="bg-[#A9D941] font-semibold text-[#35402A] px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base md:text-lg hover:bg-[#2a3221] hover:text-white transition-colors duration-300 flex-shrink-0">
                Send Message
              </button>
              <button className="bg-white border-4 border-[#A9D941] p-2 sm:p-2.5 md:p-3 rounded-full transition-colors duration-300 hover:bg-[#A9D941] hover:border-white flex-shrink-0">
                <ArrowRight className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-[#35402A]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}