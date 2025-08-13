"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#f7f7f5] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Form Container */}
        <div className="bg-[#35402A] rounded-3xl p-8 md:p-12 shadow-lg">
          <h2 className="text-white text-4xl md:text-5xl font-amaranth font-medium text-center mb-10">
            Send us a Message
          </h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-6 py-3 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A9D941]"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-6 py-3 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A9D941]"
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-6 py-3 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A9D941]"
              />

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-6 py-3 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A9D941]"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-6 py-3 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A9D941]"
            />

            {/* Submit Button */}
            <div className="flex justify-center items-center ">
              <button className="bg-[#A9D941] font-semibold text-[#35402A] px-8 py-3 rounded-full text-lg hover:bg-[#2a3221] hover:text-white transition-colors duration-300">
                Send Message
              </button>
              <button className="bg-white border-4 border-[#A9D941] p-3 rounded-full transition-colors duration-300 hover:bg-[#A9D941] hover:border-white">
                <ArrowRight className="w-6 h-6 text-[#35402A]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
