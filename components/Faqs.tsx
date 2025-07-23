'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: 'How do I book a class?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Do I need prior Pilates experience?',
    answer:
      'Not at all! Our sessions are designed for all levels, and our instructors will guide you based on your comfort and experience.',
  },
  {
    question: 'What should I bring?',
    answer:
      'Bring a water bottle, a towel, and comfortable workout clothes. Mats and props will be provided.',
  },
  {
    question: 'Do you offer private sessions?',
    answer:
      'Yes, we offer private 1-on-1 sessions tailored to your goals. Contact us to learn more and schedule.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-[#f4f5f4] px-4 md:px-16 py-20 font-sans">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1a1a1a]">Frequently Asked Questions</h2>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className={`transition-all duration-300 border rounded-xl overflow-hidden ${
                isOpen
                  ? 'bg-white border-[#d1d5db] shadow-sm'
                  : 'bg-[#f4f5f4] border-[#e5e7eb]'
              }`}
            >
              <button
                onClick={() => toggleIndex(i)}
                className="w-full flex items-start gap-4 px-6 py-4 text-left group focus:outline-none"
              >
                <div className="pt-1">
                  {isOpen ? (
                    <X className="w-5 h-5 text-[#8DD82E]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#2E4023]" />
                  )}
                </div>
                <div className="flex-1">
                  <div
                    className={`font-semibold text-base ${
                      isOpen ? 'text-[#2E4023]' : 'text-[#1a1a1a]'
                    }`}
                  >
                    {item.question}
                  </div>
                </div>
              </button>

              {/* Answer wrapper */}
              <div
                className={`px-6 text-sm text-[#4f4f4f] leading-relaxed transition-all duration-300 ${
                  isOpen
                    ? 'max-h-[300px] py-2 opacity-100'
                    : 'max-h-0 opacity-0 py-0'
                } overflow-hidden`}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
