import { useState } from "react";

/**
 * ACUindex Investor Room
 * 
 * Design Philosophy:
 * - Pure black background (#000000) with white text (#FFFFFF)
 * - Minimalist, institutional aesthetic
 * - Four link cards with subtle borders (#333333)
 * - Hover state: border brightens to white, background shifts to #111111
 * - No decorative elements, no gradients, no clutter
 * - Spacing and typography convey hierarchy and premium positioning
 */

interface LinkCard {
  number: string;
  title: string;
  subtitle: string;
  href: string;
}

const linkCards: LinkCard[] = [
  {
    number: "01",
    title: "Live Demo",
    subtitle: "Request access to the latest ACUindex demo.",
    href: "#demo",
  },
  {
    number: "02",
    title: "Web BP",
    subtitle: "View the latest investor presentation.",
    href: "#bp",
  },
  {
    number: "03",
    title: "Methodology / Whitepaper",
    subtitle: "Read the ACU methodology and protocol draft.",
    href: "#methodology",
  },
  {
    number: "04",
    title: "Contact / Schedule a Call",
    subtitle: "Contact the team or schedule a discussion.",
    href: "#contact",
  },
];

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header with logo */}
      <header className="pt-8 px-8 md:pt-12 md:px-12">
        <div className="text-xl md:text-2xl font-light tracking-wide">
          ACUindex
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col justify-center px-8 md:px-12 py-16 md:py-24">
        {/* Title section */}
        <div className="max-w-3xl mb-20 md:mb-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Investor Room
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            投资者关系维护与里程碑更新
          </p>

          {/* Divider line */}
          <div className="w-full h-px bg-gray-700 mb-8"></div>

          {/* Tagline */}
          <p className="text-base md:text-lg text-gray-300 mb-6">
            Quality-Constrained AI Cost Optimization Infrastructure
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8">
            质量约束下的 AI 调用降本与产能优化系统
          </p>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            ACUindex is building an AI productivity optimization infrastructure for high-frequency AI workloads.
            We help teams route tasks across models, verify output quality, and reduce model/API costs while preserving production-grade results.
          </p>
        </div>

        {/* Link cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mb-16">
          {linkCards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              <div
                className={`
                  p-6 md:p-8 border transition-all duration-200 ease-out
                  ${
                    hoveredCard === index
                      ? "border-white bg-gray-950"
                      : "border-gray-700 bg-black"
                  }
                `}
              >
                <div className="text-xs md:text-sm text-gray-500 mb-3 tracking-widest">
                  {card.number}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400">
                  {card.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer info */}
        <div className="text-xs md:text-sm text-gray-600 space-y-2">
          <p>Status: Demo validation stage</p>
          <p>Last updated: 2026.06</p>
          <p className="mt-4">
            Not for settlement. Internal benchmark results are for product validation only.
          </p>
        </div>
      </main>
    </div>
  );
}
