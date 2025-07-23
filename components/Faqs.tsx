'use client';
import { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: 'How do I book a class?',
    answer:
      'You can book a class by going to our schedule page and selecting your desired time slot.',
  },
  {
    question: 'Do I need prior Pilates experience?',
    answer: 'No, beginners are always welcome!',
  },
  {
    question: 'What should I bring?',
    answer: 'Just bring yourself, comfortable clothing, and water!',
  },
  {
    question: 'Do you offer private sessions?',
    answer: 'Yes, private sessions are available upon request.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f7f7f5] py-20 flex justify-center">
      <div className="w-[90%] max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-10 font-sans text-black">
          Frequently Asked Questions
        </h2>

        <div  className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border border-[#d6d6d6] transition-all duration-300 ${
                  isOpen ? 'bg-white' : 'bg-[#f7f7f5]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start gap-3 px-6 py-5 text-left"
                >
                  <div className="pt-1">
                    {isOpen ? (
                      <X className="w-5 h-5 text-green-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-black" />
                    )}
                  </div>
                  <span className="text-base md:text-lg font-semibold text-black">
                    {faq.question}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 px-14 text-sm text-[#333] leading-relaxed overflow-hidden ${
                    isOpen
                      ? 'max-h-[500px] pb-6 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
