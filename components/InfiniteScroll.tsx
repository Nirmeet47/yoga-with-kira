"use client";

const texts = [
  "Movement",
  "Calm & Balance",
  "Flex & Relax",
  "Serenity",
  "Clarity",
  "Energy Flow",
  "Mindful Strength",
  "Inner Peace",
];

export default function InfiniteScrollText() {
  return (
    <div className="w-full bg-gray-50 py-6 overflow-hidden">
      <div className="flex w-max animate-scroll gap-12 text-3xl md:text-5xl font-gabarito font-bold text-[#234f26]">
        {[...texts, ...texts].map((text, idx) => (
          <span
            key={idx}
            className="flex items-center gap-3 whitespace-nowrap"
          >
            <span>{text}</span>
            <span className="pl-5 text-lime-500 text-3xl md:text-4xl">✧</span>
          </span>
        ))}
      </div>
    </div>
  );
}
