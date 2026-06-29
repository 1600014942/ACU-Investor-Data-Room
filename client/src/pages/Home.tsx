/**
 * ACUindex Investor Room
 * 
 * Design Philosophy (Ornn-inspired minimalism):
 * - Ultra-minimalist centered layout with ample whitespace
 * - Infrastructure image as darkened/transparent background
 * - No borders, no cards, no visual containers
 * - Four text links centered, elegant line spacing
 * - Pure typography-driven design
 * - Subtle hover effects (text color shift)
 */

interface LinkItem {
  title: string;
  subtitle: string;
  href: string;
}

const links: LinkItem[] = [
  {
    title: "Live Demo",
    subtitle: "Request access to the latest ACUindex demo.",
    href: "#demo",
  },
  {
    title: "Web BP",
    subtitle: "View the latest investor presentation.",
    href: "#bp",
  },
  {
    title: "Methodology / Whitepaper",
    subtitle: "Read the ACU methodology and protocol draft.",
    href: "#methodology",
  },
  {
    title: "Contact / Schedule a Call",
    subtitle: "Contact the team or schedule a discussion.",
    href: "#contact",
  },
];

export default function Home() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 py-16 md:py-24 relative overflow-hidden"
      style={{
        backgroundImage: "url('/manus-storage/acuindex-bg-infrastructure_c130dcce.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Darkened overlay to reduce image prominence */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-2xl text-center">
        {/* Header */}
        <div className="mb-20 md:mb-32">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6">
            ACUindex
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-2">
            Investor Room
          </p>
          <p className="text-base md:text-lg text-gray-400">
            投资者关系维护与里程碑更新
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-gray-600 mx-auto mb-16 md:mb-20"></div>

        {/* Tagline and description */}
        <div className="mb-20 md:mb-28 space-y-6">
          <p className="text-base md:text-lg text-gray-300 font-light">
            Quality-Constrained AI Cost Optimization Infrastructure
          </p>
          <p className="text-base md:text-lg text-gray-300 font-light">
            质量约束下的 AI 调用降本与产能优化系统
          </p>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light max-w-xl mx-auto">
            ACUindex is building an AI productivity optimization infrastructure for high-frequency AI workloads.
            We help teams route tasks across models, verify output quality, and reduce model/API costs while preserving production-grade results.
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-gray-600 mx-auto mb-20 md:mb-28"></div>

        {/* Links - centered, no borders, elegant spacing */}
        <div className="space-y-12 md:space-y-16">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group block transition-all duration-300 ease-out"
            >
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl font-light text-white group-hover:text-gray-300 transition-colors duration-300">
                  {link.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-light">
                  {link.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-gray-600 mx-auto my-20 md:my-28"></div>

        {/* Footer info */}
        <div className="text-xs md:text-sm text-gray-500 space-y-1 font-light">
          <p>Status: Demo validation stage</p>
          <p>Last updated: 2026.06</p>
          <p className="mt-4">
            Not for settlement. Internal benchmark results are for product validation only.
          </p>
        </div>
      </div>
    </div>
  );
}
