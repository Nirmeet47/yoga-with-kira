'use client';

import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from 'lucide-react';

const contactItems = [
  {
    title: 'Contact Us',
    info: '(205) 555-0100',
    icon: <Phone />,
  },
  {
    title: 'Email Us',
    info: 'hey@yogawithkira.com',
    icon: <Mail />,
  },
  {
    title: 'Location',
    info: '4140 Parker Rd. Allentown, New Mexico 31134',
    icon: <MapPin />,
  },
  {
    title: 'Business Hours',
    info: 'Mon–Sat: 08:30AM – 01:00PM | Sun: 10:00AM – 12:00PM',
    icon: <Clock />,
  },
];

export default function ContactSection() {
  return (
    <section className="bg-[#f8f9f8] px-4 md:px-16 py-20 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left: Info */}
        <div>
          <h2 className="font-amaranth text-5xl font-medium text-[#2E4023]">
            <span className="text-[#8DD82E]">Contact</span>{' '}
            <span className="text-black">Us</span>
          </h2>
          <p className="text-sm text-[#2D3B36] mt-4 leading-relaxed max-w-lg">
            We're here to support your journey to better health and well-being.
            Reach out today to ask questions, schedule a consultation.
          </p>

          <div className="mt-10 space-y-4">
            {contactItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-6 py-4 rounded-full transition-all duration-300 cursor-pointer bg-white border border-[#e0e0e0] group hover:bg-[#2E4023]"
              >
                <div className="p-2 rounded-full transition-all duration-300 bg-[#8DD82E]">
                  {React.cloneElement(item.icon, {
                    className: 'w-5 h-5 stroke-white',
                  })}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2D3B36] group-hover:text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#2D3B36] group-hover:text-white">
                    {item.info}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white rounded-2xl border border-[#e6e6e6] p-8">
          <h3 className="font-amaranth text-5xl font-medium text-black text-center mb-8">
            Send us a Message
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-[#e6e6e6] text-[#2D3B36] placeholder-[#7F928F] rounded-lg px-4 py-3 text-sm w-full  "
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-[#e6e6e6] text-[#2D3B36] placeholder-[#7F928F] rounded-lg px-4 py-3 text-sm w-full  "
              />
              <input
                type="text"
                placeholder="Phone"
                className="border border-[#e6e6e6] text-[#2D3B36] placeholder-[#7F928F] rounded-lg px-4 py-3 text-sm w-full  "
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-[#e6e6e6] text-[#2D3B36] placeholder-[#7F928F] rounded-lg px-4 py-3 text-sm w-full  "
              />
            </div>
   <textarea
  placeholder="Message"
  className="h-[180px] resize-none border border-[#e6e6e6] text-[#2D3B36] placeholder-[#7F928F] rounded-lg px-4 py-3 text-sm w-full  "
></textarea>


            {/* Book appointment */}
            <div className="flex justify-center">
              <div className="flex items-center">
                <button
                  type="submit"
                  className="bg-[#2E4023] hover:bg-[#24361b] text-white px-6 py-2 rounded-full text-sm font-medium transition"
                >
                  Book an Appointment
                </button>
                <button
                  type="button"
                  className="bg-[#8DD82E] border-[#35402A] border-3  p-2 rounded-full transition"
                >
                  <ArrowRight className="w-4 h-4 stroke-black" />
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
