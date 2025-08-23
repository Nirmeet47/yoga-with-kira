"use client";
import { useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";

export default function PreRegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative bg-[#f7f7f5] py-16 px-4 overflow-hidden">
      {/* Decorative Top-Right Image */}
      <img
        src="/images/retreats/register-form-bg.png"
        alt="Decorative"
        className="absolute top-0 right-0 w-32 md:w-48 lg:w-64 pointer-events-none select-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="font-amaranth text-5xl md:text-6xl font-medium mb-6">
            <span className="text-[#A9D941]">Pre-Register for a</span>
            <br />
            <span className="text-[#35402A]">Life-Changing Experience</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-[#35402A] rounded-3xl p-8 md:p-12 shadow-2xl w-full">
          <h2 className="text-white text-4xl md:text-5xl font-amaranth font-bold text-center mb-10">
            Reserve Your Spot
          </h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A9D941] focus:border-transparent transition-all"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A9D941] focus:border-transparent transition-all"
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A9D941] focus:border-transparent transition-all"
              />

              {/* Date of Birth */}
              <div className="relative">
                <input
                  type="text"
                  name="dob"
                  placeholder="Date Of Birth"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A9D941] focus:border-transparent transition-all"
                />
                <Calendar
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>

            {/* Submit Button with Arrow */}
            <div className="flex justify-center items-center">
              {/* Main Button */}
              <button className="bg-[#A9D941] font-semibold text-[#35402A] px-8 py-3 rounded-full text-lg ">
                I'm Interested
              </button>

              {/* Arrow Button */}
              <button className="bg-white border-4 border-[#A9D941] p-3 rounded-full transition-colors duration-300">
                <ArrowRight className="w-6 h-6 text-[#35402A]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
