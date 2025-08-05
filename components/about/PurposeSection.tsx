"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function PurposeSection() {
  return (
    <section className="relative bg-[#f7f7f7] overflow-hidden pb-16">
      {/* TOP SECTION */}
      <div className="flex items-center py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGES */}
          <div className="relative flex justify-center lg:justify-start mb-40 lg:mb-0">
            {/* Main Image */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-72 lg:h-[420px] rounded-2xl overflow-hidden shadow-lg z-10 lg:ml-20">
              <Image
                src="/images/about/purpose1.jpg"
                alt="Yoga Session"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Image */}
            <div className="absolute -bottom-20 left-16 sm:left-16 lg:left-8 w-52 h-72 sm:w-60 sm:h-80 lg:w-60 lg:h-[340px] rounded-2xl overflow-hidden shadow-lg animate-float-fancy">
              <Image
                src="/images/about/purpose2.jpg"
                alt="Yoga Pose"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="text-left">
            <h2 className="font-amaranth text-3xl md:text-4xl leading-snug text-[#35402A] mb-4">
              Rooted in {" "}
              <span className="text-[#A9D941]">Purpose</span>, Guided by Presence
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              At our core, we are a collective of passionate teachers, mindful
              movers, and wellness seekers united by the belief that yoga is
              more than physical movement — it’s a way of life.
            </p>

            <ul className="space-y-5">
              {[
                {
                  title: "Calm & Soulful",
                  desc: "Through breath, stillness, and flow, we help you reconnect with your body, quiet the mind, and awaken your inner peace.",
                },
                {
                  title: "Warm & Welcoming",
                  desc: "Whether you’re just starting out or deep in your practice, our studio is a safe, welcoming place to grow, heal, and simply be.",
                },
                {
                  title: "Professional & Purpose-Driven",
                  desc: "Guided with the intention to offer authentic, accessible yoga to all, we bring together experienced teachers and curated practices.",
                },
                {
                  title: "Minimal & Modern",
                  desc: "We are a space for stillness, strength, and self-discovery, helping people slow down, breathe deeply, and live more intentionally.",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#A9D941] w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-[#35402A]">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BADGE */}
      <div className="flex items-center justify-center mt-16 relative px-4">
        <div className="absolute w-full h-px bg-gray-300 top-1/2 left-0"></div>
        <div className="relative z-10 bg-white px-6 py-2 md:px-8 md:py-3 rounded-full border border-gray-300 text-gray-800 text-sm md:text-base font-medium flex items-center space-x-3 shadow-md">
          <span>500+ Successful Sessions</span>
          <span className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4 md:w-5 md:h-5 text-green-500"
              >
                <path d="M12 2l2.9 6.5L22 9.3l-5 5 1.2 7.7L12 18.6 5.8 22l1.2-7.7-5-5 7.1-0.8L12 2z" />
              </svg>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
